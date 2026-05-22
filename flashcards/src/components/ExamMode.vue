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
      v-model:quizInput="customQuizCount"
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
        <span class="progress-left">
          <button
            class="drawer-toggle-btn"
            @click="drawerOpen = true"
            type="button"
            title="題目列表"
          >
            <span class="material-icons">list</span>
          </button>
          題目 {{ currentIdx + 1 }} / {{ quizQuestions.length }}
        </span>
        <span v-if="examType === 'full'" class="answered-count">
          已答 {{ answeredCount }} 題
        </span>
        <span v-else-if="examType === 'review'" class="answered-count">
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
        <!-- 全部檢視模式：暫停 + 上一題 -->
        <template v-if="examType === 'review'">
          <button class="nav-btn" @click="pauseReview" type="button">
            <span class="material-icons">pause_circle</span>
            暫停
          </button>
          <button
            v-if="currentIdx > 0"
            class="nav-btn"
            @click="goBack"
            type="button"
          >
            <span class="material-icons">arrow_back</span>
            上一題
          </button>
        </template>
        <!-- 單題/整卷模式：上一題 -->
        <button
          v-else-if="currentIdx > 0"
          class="nav-btn"
          @click="goBack"
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

    <!-- 全部檢視模式：題目目錄抽屜 -->
    <ExamDrawer
      :open="drawerOpen"
      :questions="quizQuestions"
      :current="currentIdx"
      :answers="answers"
      @close="drawerOpen = false"
      @go="onDrawerGo"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import QuestionCard from './QuestionCard.vue'
import ExamResult from './ExamResult.vue'
import ExamSetup from './ExamSetup.vue'
import ExamDrawer from './ExamDrawer.vue'
import { useExamLogic } from '../composables/useExamLogic.js'

const SUBJECT_KEY = 'ipas-exam-subject'

const props = defineProps({
  /** EXAM_DATA[level].subjects（全部科目） */
  subjects: { type: Array, required: true }
})

/* 狀態 */
const subjectIdx = ref(0)
const drawerOpen = ref(false)
const isRestoring = ref(false)

/** 判斷科目是否有考題 */
function subjectHasExams(subj) {
  return subj.exams.length > 0 && subj.exams.some(e => e.questions.length > 0)
}

/** 目前科目 */
const currentSubject = computed(() => props.subjects[subjectIdx.value] || props.subjects[0])

/* 考題邏輯（透過 composable 管理） */
const {
  phase, examType, quizQuestions, currentIdx, answers,
  instantRevealed, questionCardRef,
  allQuestions, quizCount, customQuizCount, answeredCount, progressPct,
  examResults, savedProgress,
  startExam, onAnswer, revealAnswer, nextInstant,
  pauseReview, finishExam, tryRestoreSession
} = useExamLogic(currentSubject)

/** 回上一題 */
function goBack() {
  if (currentIdx.value > 0) {
    currentIdx.value--
    instantRevealed.value = false
  }
}

/** 從抽屜跳轉到指定題目 */
function onDrawerGo(idx) {
  currentIdx.value = idx
  instantRevealed.value = false
}

/** 切換科目時重設（還原期間不觸發） */
watch(subjectIdx, () => {
  if (isRestoring.value) return
  phase.value = 'setup'
  // 記住目前選的科目
  try { localStorage.setItem(SUBJECT_KEY, String(subjectIdx.value)) } catch {}
})

/** 掛載時還原科目選擇，並嘗試恢復進行中的考試 */
onMounted(() => {
  try {
    const saved = localStorage.getItem(SUBJECT_KEY)
    if (saved != null) {
      const idx = Number(saved)
      if (idx >= 0 && idx < props.subjects.length) {
        isRestoring.value = true
        subjectIdx.value = idx
        isRestoring.value = false
      }
    }
  } catch {}
  // 嘗試恢復進行中的考試（直接跳回作答畫面）
  if (!tryRestoreSession()) {
    // 沒有進行中的考試，但有暫停記錄時自動選到對應模式
    if (savedProgress.value) {
      examType.value = savedProgress.value.examType
    }
  }
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
  align-items: center;
  font-size: 0.8rem;
  color: var(--custard-brown-light);
  margin-bottom: 16px;
}
.progress-left {
  display: flex;
  align-items: center;
  gap: 6px;
}
.drawer-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1.5px solid var(--custard-cream);
  border-radius: 8px;
  background: #fff;
  color: var(--custard-brown-light);
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
}
.drawer-toggle-btn:hover {
  border-color: var(--custard-gold);
  color: var(--custard-deep);
  background: var(--custard-light);
}
.drawer-toggle-btn .material-icons {
  font-size: 18px;
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
