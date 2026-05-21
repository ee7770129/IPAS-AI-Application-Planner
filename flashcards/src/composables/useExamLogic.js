/*
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：useExamLogic.js
  功能：考題練習邏輯 composable（狀態管理、洗牌、考試進度持久化）
  建立日期：2026-05-17
  版本：2.0.0
*/

import { ref, computed, watch } from 'vue'

const QUIZ_COUNT = 15
const SESSION_PREFIX = 'ipas-exam-session-'

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

  /** 目前科目的 session localStorage key */
  const sessionKey = computed(() => {
    if (!currentSubject.value) return ''
    return SESSION_PREFIX + currentSubject.value.id
  })

  // --- 持久化：統一存取所有考試模式的進度 ---

  /** 儲存考試進度到 localStorage */
  function saveSession() {
    if (phase.value !== 'answering') return
    try {
      const data = {
        examType: examType.value,
        currentIdx: currentIdx.value,
        answers: answers.value,
        timestamp: Date.now()
      }
      // instant / full 模式需要存洗牌後的題目順序（用題目 id 記錄）
      if (examType.value !== 'review') {
        data.questionIds = quizQuestions.value.map(q => q.id)
      }
      localStorage.setItem(sessionKey.value, JSON.stringify(data))
    } catch { /* 靜默忽略 */ }
  }

  /** 清除考試進度 */
  function clearSession() {
    try { localStorage.removeItem(sessionKey.value) } catch {}
  }

  /**
   * 讀取已儲存的考試進度摘要（用於 setup 頁面顯示）
   * 回傳 null 表示沒有進度
   */
  const savedProgress = computed(() => {
    try {
      const raw = localStorage.getItem(sessionKey.value)
      if (!raw) return null
      const data = JSON.parse(raw)
      if (!data || typeof data.currentIdx !== 'number') return null
      return {
        currentIdx: data.currentIdx,
        answeredCount: Object.keys(data.answers || {}).length,
        examType: data.examType || 'review',
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

  /**
   * 嘗試從 localStorage 恢復進行中的考試
   * @returns {boolean} 是否成功恢復
   */
  function tryRestoreSession() {
    try {
      const raw = localStorage.getItem(sessionKey.value)
      if (!raw) return false
      const data = JSON.parse(raw)
      if (!data || typeof data.currentIdx !== 'number') return false

      const savedType = data.examType || 'review'
      examType.value = savedType

      if (savedType === 'review') {
        // 全部檢視：題目就是全部題目（按原始順序）
        quizQuestions.value = [...allQuestions.value]
      } else {
        // instant / full：用儲存的題目 id 還原洗牌順序
        const ids = data.questionIds || []
        if (ids.length === 0) return false
        const idMap = new Map()
        for (const q of allQuestions.value) {
          idMap.set(q.id, q)
        }
        const restored = []
        for (const id of ids) {
          const q = idMap.get(id)
          if (q) restored.push(q)
        }
        if (restored.length === 0) return false
        quizQuestions.value = restored
      }

      answers.value = data.answers || {}
      currentIdx.value = Math.min(data.currentIdx, quizQuestions.value.length - 1)
      instantRevealed.value = false
      phase.value = 'answering'
      return true
    } catch { return false }
  }

  /** 開始考試（如果有同模式的已存進度就恢復，否則重新開始） */
  function startExam() {
    const saved = savedProgress.value
    // 有同模式的進度 → 恢復
    if (saved && saved.examType === examType.value) {
      if (tryRestoreSession()) return
    }
    // 全新開始
    if (examType.value === 'review') {
      quizQuestions.value = [...allQuestions.value]
    } else {
      const shuffled = shuffle(allQuestions.value)
      quizQuestions.value = shuffled.slice(0, quizCount.value)
    }
    answers.value = {}
    currentIdx.value = 0
    instantRevealed.value = false
    phase.value = 'answering'
    saveSession()
  }

  /** 選擇答案 */
  function onAnswer(label) {
    answers.value[currentIdx.value] = label
    saveSession()
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
    saveSession()
  }

  /** 全部檢視模式：暫停 */
  function pauseReview() {
    saveSession()
    phase.value = 'setup'
  }

  /** 完成考試 */
  function finishExam() {
    clearSession()
    phase.value = 'result'
  }

  return {
    phase, examType, quizQuestions, currentIdx, answers,
    instantRevealed, questionCardRef,
    allQuestions, quizCount, answeredCount, progressPct,
    examResults, savedProgress,
    startExam, onAnswer, revealAnswer, nextInstant,
    pauseReview, finishExam, tryRestoreSession
  }
}
