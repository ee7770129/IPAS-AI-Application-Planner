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
    <div v-if="phase === 'setup'" class="exam-setup">
      <div class="setup-card">
        <span class="material-icons setup-icon">assignment</span>
        <h3 class="setup-title">歷屆考題練習</h3>
        <p class="setup-info">
          題庫：{{ currentSubject.label }}
          <br>
          共 {{ allQuestions.length }} 題，每次隨機抽 {{ quizCount }} 題
        </p>

        <!-- 模式選擇 -->
        <div class="mode-select">
          <button
            class="mode-option"
            :class="{ active: examType === 'instant' }"
            @click="examType = 'instant'"
            type="button"
          >
            <span class="material-icons">visibility</span>
            <span class="mode-name">單題模式</span>
            <span class="mode-desc">做一題看一題解析</span>
          </button>
          <button
            class="mode-option"
            :class="{ active: examType === 'full' }"
            @click="examType = 'full'"
            type="button"
          >
            <span class="material-icons">grading</span>
            <span class="mode-name">整卷模式</span>
            <span class="mode-desc">做完再一起檢討</span>
          </button>
        </div>

        <button class="start-btn" @click="startExam" type="button">
          <span class="material-icons">play_arrow</span>
          開始作答
        </button>
      </div>
    </div>

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
        <button
          v-if="currentIdx > 0"
          class="nav-btn"
          @click="currentIdx--"
          type="button"
        >
          <span class="material-icons">arrow_back</span>
          上一題
        </button>
        <div class="nav-spacer"></div>

        <!-- 單題模式：看答案按鈕 -->
        <button
          v-if="examType === 'instant' && !instantRevealed && answers[currentIdx]"
          class="nav-btn primary"
          @click="revealAnswer"
          type="button"
        >
          <span class="material-icons">visibility</span>
          看答案
        </button>

        <!-- 單題模式：下一題（看完解析後） -->
        <button
          v-if="examType === 'instant' && instantRevealed && currentIdx < quizQuestions.length - 1"
          class="nav-btn primary"
          @click="nextInstant"
          type="button"
        >
          下一題
          <span class="material-icons">arrow_forward</span>
        </button>

        <!-- 單題模式：最後一題看完解析 -->
        <button
          v-if="examType === 'instant' && instantRevealed && currentIdx === quizQuestions.length - 1"
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

const props = defineProps({
  /** EXAM_DATA[level].subjects（全部科目） */
  subjects: { type: Array, required: true }
})

/* 狀態 */
const subjectIdx = ref(0)
const phase = ref('setup') // setup | answering | result
const examType = ref('instant') // instant | full
const quizQuestions = ref([])
const currentIdx = ref(0)
const answers = ref({}) // { idx: 'A'|'B'|'C'|'D' }
const instantRevealed = ref(false)
const questionCardRef = ref(null)

const QUIZ_COUNT = 15

/** 判斷科目是否有考題 */
function subjectHasExams(subj) {
  return subj.exams.length > 0 && subj.exams.some(e => e.questions.length > 0)
}

/** 目前科目 */
const currentSubject = computed(() => props.subjects[subjectIdx.value] || props.subjects[0])

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

/** Fisher-Yates 洗牌 */
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** 開始考試 */
function startExam() {
  const shuffled = shuffle(allQuestions.value)
  quizQuestions.value = shuffled.slice(0, quizCount.value)
  answers.value = {}
  currentIdx.value = 0
  instantRevealed.value = false
  phase.value = 'answering'
}

/** 選擇答案 */
function onAnswer(label) {
  answers.value[currentIdx.value] = label
}

/** 單題模式：顯示答案 */
function revealAnswer() {
  instantRevealed.value = true
  if (questionCardRef.value) questionCardRef.value.reveal()
}

/** 單題模式：下一題 */
function nextInstant() {
  currentIdx.value++
  instantRevealed.value = false
}

/** 完成考試 */
function finishExam() {
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

/* 開始畫面 */
.exam-setup {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.setup-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  background: #fff;
  border: 2px solid var(--custard-cream);
  border-radius: var(--radius);
  box-shadow: 0 2px 12px var(--custard-shadow);
  max-width: 400px;
  width: 100%;
}

.setup-icon {
  font-size: 48px;
  color: var(--custard-deep);
  margin-bottom: 12px;
}

.setup-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--custard-brown);
  margin-bottom: 8px;
}

.setup-info {
  font-size: 0.83rem;
  color: var(--custard-brown-light);
  text-align: center;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* 模式選擇 */
.mode-select {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  width: 100%;
}

.mode-option {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 14px 10px;
  border: 2px solid var(--custard-cream);
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.mode-option:hover {
  border-color: var(--custard-gold);
  background: var(--custard-light);
}
.mode-option.active {
  border-color: var(--custard-deep);
  background: rgba(232, 151, 107, 0.08);
}
.mode-option .material-icons {
  font-size: 24px;
  color: var(--custard-deep);
}
.mode-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--custard-brown);
}
.mode-desc {
  font-size: 0.72rem;
  color: var(--custard-brown-light);
}

.start-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 32px;
  border: none;
  border-radius: 24px;
  background: var(--custard-deep);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
}
.start-btn:hover {
  background: var(--custard-amber);
}
.start-btn .material-icons { font-size: 20px; }

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
  .mode-select { flex-direction: column; }
  .setup-card { padding: 24px 16px; }
}
</style>
