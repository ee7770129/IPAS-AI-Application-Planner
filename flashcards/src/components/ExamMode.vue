<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：ExamMode.vue
  功能：歷屆考題練習主元件（含單題即時/整卷兩種模式）
  建立日期：2026-05-16
  版本：1.0.0
-->
<template>
  <div class="exam-mode">
    <!-- 科目選擇 -->
    <div v-if="props.subjects.length > 0" class="exam-subject-tabs">
      <button
        v-for="(subj, idx) in props.subjects"
        :key="subj.id"
        class="exam-subject-tab"
        :class="{
          active: subjectIdx === idx,
          disabled: !subjectHasExams(subj)
        }"
        :disabled="!subjectHasExams(subj)"
        @click="subjectIdx = idx"
        type="button"
      >
        {{ subj.label }}
        <span v-if="!subjectHasExams(subj)" class="no-exam-hint">（尚無考題）</span>
      </button>
    </div>

    <!-- 開始畫面（未開始作答時） -->
    <ExamSetup
      v-if="phase === 'setup'"
      v-model="examType"
      :subjectLabel="currentSubject.label"
      :totalCount="allQuestions.length"
      :quizCount="quizCount"
      :savedProgress="savedProgress"
      @start="startExam"
    />

    <!-- 作答中 -->
    <div v-else-if="phase === 'answering'" class="exam-answering">
      <!-- 進度列 -->
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPct + '%' }"></div>
      </div>
      <div class="progress-info">
        <span>題目 {{ currentIdx + 1 }} / {{ quizQuestions.length }}</span>
        <span v-if="examType === 'full'" class="answered-count">
          已答 {{ answeredCount }} 題
        </span>
      </div>

      <!-- 題目 -->
      <QuestionCard
        ref="questionCardRef"
        :question="quizQuestions[currentIdx]"
        :forceReveal="examType === 'instant' && instantRevealed"
        :externalAnswer="answers[currentIdx] || null"
        @answered="onAnswer"
      />

      <!-- 操作按鈕 -->
      <div class="exam-nav">
        <!-- 全部檢視模式：暫停按鈕 -->
        <button
          v-if="examType === 'review'"
          class="nav-btn"
          @click="pauseReview"
          type="button"
        >
          <span class="material-icons">pause_circle</span>
          暫停
        </button>
        <button
          v-else-if="currentIdx > 0"
          class="nav-btn"
          @click="currentIdx--"
          type="button"
        >
          <span class="material-icons">arrow_back</span>
          上一題
        </button>
        <div class="nav-spacer"></div>

        <!-- 單題/全部檢視模式：看答案按鈕 -->
        <button
          v-if="(examType === 'instant' || examType === 'review') && !instantRevealed && answers[currentIdx]"
          class="nav-btn primary"
          @click="revealAnswer"
          type="button"
        >
          <span class="material-icons">visibility</span>
          看答案
        </button>

        <!-- 單題/全部檢視模式：下一題（看完解析後） -->
        <button
          v-if="(examType === 'instant' || examType === 'review') && instantRevealed && currentIdx < quizQuestions.length - 1"
          class="nav-btn primary"
          @click="nextInstant"
          type="button"
        >
          下一題
          <span class="material-icons">arrow_forward</span>
        </button>

        <!-- 單題/全部檢視模式：最後一題看完解析 -->
        <button
          v-if="(examType === 'instant' || examType === 'review') && instantRevealed && currentIdx === quizQuestions.length - 1"
          class="nav-btn primary"
          @click="finishExam"
          type="button"
        >
          <span class="material-icons">done_all</span>
          查看結果
        </button>

        <!-- 整卷模式：下一題 -->
        <button
          v-if="examType === 'full' && currentIdx < quizQuestions.length - 1"
          class="nav-btn primary"
          @click="currentIdx++"
          type="button"
        >
          下一題
          <span class="material-icons">arrow_forward</span>
        </button>

        <!-- 整卷模式：送出 -->
        <button
          v-if="examType === 'full' && currentIdx === quizQuestions.length - 1"
          class="nav-btn submit"
          :disabled="answeredCount < quizQuestions.length"
          @click="finishExam"
          type="button"
        >
          <span class="material-icons">send</span>
          送出作答
        </button>
      </div>

      <!-- 整卷模式：題目導覽圓點 -->
      <div v-if="examType === 'full'" class="dot-nav">
        <button
          v-for="(q, idx) in quizQuestions"
          :key="idx"
          class="dot"
          :class="{
            active: idx === currentIdx,
            answered: answers[idx] != null
          }"
          @click="currentIdx = idx"
          type="button"
          :title="'第 ' + (idx + 1) + ' 題'"
        >
          {{ idx + 1 }}
        </button>
      </div>
    </div>

    <!-- 結果頁 -->
    <ExamResult
      v-else-if="phase === 'result'"
      :results="examResults"
      @retry="startExam"
      @back="phase = 'setup'"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import QuestionCard from './QuestionCard.vue'
import ExamResult from './ExamResult.vue'
import ExamSetup from './ExamSetup.vue'

const props = defineProps({
  /** EXAM_DATA[level].subjects（全部科目） */
  subjects: { type: Array, required: true }
})

/* 狀態 */
const subjectIdx = ref(0)
const phase = ref('setup') // setup | answering | result
const examType = ref('instant') // instant | full | review
const quizQuestions = ref([])
const currentIdx = ref(0)
const answers = ref({}) // { idx: 'A'|'B'|'C'|'D' }
const instantRevealed = ref(false)
const questionCardRef = ref(null)

const QUIZ_COUNT = 15
const REVIEW_STORAGE_PREFIX = 'ipas-exam-review-'

/** 判斷科目是否有考題 */
function subjectHasExams(subj) {
  return subj.exams.length > 0 && subj.exams.some(e => e.questions.length > 0)
}

/** 目前科目 */
const currentSubject = computed(() => props.subjects[subjectIdx.value] || props.subjects[0])

/** 目前科目的 localStorage key */
const reviewStorageKey = computed(() => {
  if (!currentSubject.value) return ''
  return REVIEW_STORAGE_PREFIX + currentSubject.value.id
})

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

/** 實際出題數（題庫不足 15 題時取全部） */
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

/** 讀取 localStorage 中的全部檢視進度（供 ExamSetup 顯示） */
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
    /* 全部檢視模式：原始順序，嘗試恢復進度 */
    quizQuestions.value = [...allQuestions.value]
    const saved = savedProgress.value
    if (saved) {
      /* 恢復進度 */
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
    /* 單題/整卷模式：隨機抽題 */
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

/** 單題/全部檢視模式：顯示答案 */
function revealAnswer() {
  instantRevealed.value = true
  if (questionCardRef.value) questionCardRef.value.reveal()
}

/** 單題/全部檢視模式：下一題 */
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

/** 切換科目時重設 */
watch(subjectIdx, () => {
  phase.value = 'setup'
})
</script>

<style scoped>
.exam-mode {
  width: 100%;
  padding: 0 16px 16px;
}

/* 科目頁籤 */
.exam-subject-tabs {
  display: flex;
  gap: 6px;
  padding: 8px 0 12px;
}

.exam-subject-tab {
  flex: 1;
  padding: 6px 16px;
  border: 1.5px solid var(--custard-cream);
  border-radius: 20px;
  text-align: center;
  background: #fff;
  color: var(--custard-brown-light);
  font-size: 0.8rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}
.exam-subject-tab:hover {
  border-color: var(--custard-gold);
}
.exam-subject-tab.active {
  border-color: var(--custard-deep);
  background: var(--custard-deep);
  color: #fff;
}
.exam-subject-tab.disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.no-exam-hint {
  font-size: 0.7rem;
  font-weight: 400;
  opacity: 0.7;
}

/* 作答中 */
.exam-answering {
  max-width: 680px;
  margin: 0 auto;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: var(--custard-cream);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
}
.progress-fill {
  height: 100%;
  background: var(--custard-deep);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--custard-brown-light);
  margin-bottom: 16px;
}
.answered-count {
  font-weight: 600;
  color: var(--custard-deep);
}

/* 導覽按鈕 */
.exam-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 8px 0;
}
.nav-spacer { flex: 1; }

.nav-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 2px solid var(--custard-cream);
  border-radius: 20px;
  background: #fff;
  color: var(--custard-brown);
  font-size: 0.83rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}
.nav-btn:hover {
  border-color: var(--custard-gold);
  background: var(--custard-light);
}
.nav-btn.primary {
  border-color: var(--custard-deep);
  background: var(--custard-deep);
  color: #fff;
}
.nav-btn.primary:hover {
  background: var(--custard-amber);
  border-color: var(--custard-amber);
}
.nav-btn.submit {
  border-color: #4caf50;
  background: #4caf50;
  color: #fff;
}
.nav-btn.submit:hover {
  background: #388e3c;
  border-color: #388e3c;
}
.nav-btn.submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.nav-btn .material-icons { font-size: 18px; }

/* 圓點導覽 */
.dot-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-top: 12px;
  padding: 8px 0;
}

.dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid var(--custard-cream);
  background: #fff;
  color: var(--custard-brown-light);
  font-size: 0.7rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}
.dot:hover {
  border-color: var(--custard-gold);
}
.dot.active {
  border-color: var(--custard-deep);
  background: var(--custard-deep);
  color: #fff;
}
.dot.answered {
  border-color: var(--custard-gold);
  background: var(--custard-light);
}

@media (max-width: 600px) {
  .exam-mode { padding: 0 10px 12px; }
}
</style>
