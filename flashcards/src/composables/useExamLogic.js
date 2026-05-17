/*
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：useExamLogic.js
  功能：考題練習邏輯 composable（狀態管理、洗牌、全部檢視進度）
  建立日期：2026-05-17
  版本：1.0.0
*/

import { ref, computed, watch } from 'vue'

const QUIZ_COUNT = 15
const REVIEW_STORAGE_PREFIX = 'ipas-exam-review-'

/**
 * 考題練習邏輯 composable
 * @param {import('vue').ComputedRef} currentSubject - 目前科目 computed ref
 */
export function useExamLogic(currentSubject) {
  const phase = ref('setup') // setup | answering | result
  const examType = ref('instant') // instant | full | review
  const quizQuestions = ref([])
  const currentIdx = ref(0)
  const answers = ref({})
  const instantRevealed = ref(false)
  const questionCardRef = ref(null)

  /** 所有題目（合併該科目所有屆） */
  const allQuestions = computed(() => {
    if (!currentSubject.value) return []
    const all = []
    for (const exam of currentSubject.value.exams) {
      for (const q of exam.questions) {
        all.push({ ...q, _examLabel: exam.label })
      }
    }
    return all
  })

  /** 實際出題數 */
  const quizCount = computed(() => Math.min(QUIZ_COUNT, allQuestions.value.length))

  /** 已答題數 */
  const answeredCount = computed(() => Object.keys(answers.value).length)

  /** 進度百分比 */
  const progressPct = computed(() => ((currentIdx.value + 1) / quizQuestions.value.length) * 100)

  /** 結果陣列 */
  const examResults = computed(() => {
    return quizQuestions.value.map((q, idx) => ({
      question: q,
      userAnswer: answers.value[idx] || null,
      correct: answers.value[idx] === q.answer
    }))
  })

  /** 目前科目的 localStorage key */
  const reviewStorageKey = computed(() => {
    if (!currentSubject.value) return ''
    return REVIEW_STORAGE_PREFIX + currentSubject.value.id
  })

  /** 讀取 localStorage 中的全部檢視進度 */
  const savedProgress = computed(() => {
    try {
      const raw = localStorage.getItem(reviewStorageKey.value)
      if (!raw) return null
      const data = JSON.parse(raw)
      if (!data || typeof data.currentIdx !== 'number') return null
      return {
        currentIdx: data.currentIdx,
        answeredCount: Object.keys(data.answers || {}).length,
        timestamp: data.timestamp
      }
    } catch { return null }
  })

  /** Fisher-Yates 洗牌 */
  function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  /** 儲存全部檢視進度到 localStorage */
  function saveReviewProgress() {
    if (examType.value !== 'review') return
    try {
      localStorage.setItem(reviewStorageKey.value, JSON.stringify({
        currentIdx: currentIdx.value,
        answers: answers.value,
        timestamp: Date.now()
      }))
    } catch { /* 靜默忽略 */ }
  }

  /** 清除全部檢視進度 */
  function clearReviewProgress() {
    try { localStorage.removeItem(reviewStorageKey.value) } catch {}
  }

  /** 開始考試 */
  function startExam() {
    if (examType.value === 'review') {
      quizQuestions.value = [...allQuestions.value]
      const saved = savedProgress.value
      if (saved) {
        try {
          const raw = JSON.parse(localStorage.getItem(reviewStorageKey.value))
          answers.value = raw.answers || {}
          currentIdx.value = raw.currentIdx || 0
        } catch {
          answers.value = {}
          currentIdx.value = 0
        }
      } else {
        answers.value = {}
        currentIdx.value = 0
      }
    } else {
      const shuffled = shuffle(allQuestions.value)
      quizQuestions.value = shuffled.slice(0, quizCount.value)
      answers.value = {}
      currentIdx.value = 0
    }
    instantRevealed.value = false
    phase.value = 'answering'
  }

  /** 選擇答案 */
  function onAnswer(label) {
    answers.value[currentIdx.value] = label
    saveReviewProgress()
  }

  /** 顯示答案 */
  function revealAnswer() {
    instantRevealed.value = true
    if (questionCardRef.value) questionCardRef.value.reveal()
  }

  /** 下一題 */
  function nextInstant() {
    currentIdx.value++
    instantRevealed.value = false
    saveReviewProgress()
  }

  /** 全部檢視模式：暫停 */
  function pauseReview() {
    saveReviewProgress()
    phase.value = 'setup'
  }

  /** 完成考試 */
  function finishExam() {
    if (examType.value === 'review') clearReviewProgress()
    phase.value = 'result'
  }

  return {
    phase, examType, quizQuestions, currentIdx, answers,
    instantRevealed, questionCardRef,
    allQuestions, quizCount, answeredCount, progressPct,
    examResults, savedProgress,
    startExam, onAnswer, revealAnswer, nextInstant,
    pauseReview, finishExam
  }
}
