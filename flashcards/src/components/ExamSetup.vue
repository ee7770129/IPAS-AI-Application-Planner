<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：ExamSetup.vue
  功能：考題練習開始畫面（科目資訊、模式選擇、開始按鈕）
  建立日期：2026-05-17
  版本：1.0.0
-->
<template>
  <div class="exam-setup">
    <div class="setup-card">
      <span class="material-icons setup-icon">assignment</span>
      <h3 class="setup-title">歷屆考題練習</h3>
      <p class="setup-info">
        題庫：{{ subjectLabel }}
        <br>
        共 {{ totalCount }} 題，隨機抽
        <input
          type="tel"
          inputmode="numeric"
          pattern="[0-9]*"
          class="quiz-count-input"
          :value="quizInput"
          @input="$emit('update:quizInput', Math.max(1, Math.min(totalCount, parseInt($event.target.value) || 15)))"
          @focus="$event.target.select()"
        />
        題
      </p>

      <!-- 模式選擇 -->
      <div class="mode-select">
        <button
          class="mode-option"
          :class="{ active: modelValue === 'instant' }"
          @click="$emit('update:modelValue', 'instant')"
          type="button"
        >
          <span class="material-icons">visibility</span>
          <span class="mode-name">單題模式</span>
          <span v-if="savedProgress && savedProgress.examType === 'instant'" class="mode-desc mode-resume">
            繼續（已做 {{ savedProgress.answeredCount }}/{{ quizCount }} 題）
          </span>
          <span v-else class="mode-desc">隨機 {{ quizCount }} 題，做一題看一題</span>
        </button>
        <button
          class="mode-option"
          :class="{ active: modelValue === 'full' }"
          @click="$emit('update:modelValue', 'full')"
          type="button"
        >
          <span class="material-icons">grading</span>
          <span class="mode-name">整卷模式</span>
          <span v-if="savedProgress && savedProgress.examType === 'full'" class="mode-desc mode-resume">
            繼續（已做 {{ savedProgress.answeredCount }}/{{ quizCount }} 題）
          </span>
          <span v-else class="mode-desc">隨機 {{ quizCount }} 題，做完再檢討</span>
        </button>
        <button
          class="mode-option"
          :class="{ active: modelValue === 'review' }"
          @click="$emit('update:modelValue', 'review')"
          type="button"
        >
          <span class="material-icons">playlist_play</span>
          <span class="mode-name">全部檢視</span>
          <span v-if="savedProgress && savedProgress.examType === 'review'" class="mode-desc mode-resume">
            繼續（已做 {{ savedProgress.answeredCount }}/{{ totalCount }} 題）
          </span>
          <span v-else class="mode-desc">全部 {{ totalCount }} 題，可暫停繼續</span>
        </button>
      </div>

      <button class="start-btn" @click="$emit('start')" type="button">
        <span class="material-icons">{{ savedProgress && savedProgress.examType === modelValue ? 'play_circle' : 'play_arrow' }}</span>
        {{ savedProgress && savedProgress.examType === modelValue ? '繼續作答' : '開始作答' }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  subjectLabel: { type: String, required: true },
  totalCount: { type: Number, required: true },
  quizCount: { type: Number, required: true },
  quizInput: { type: Number, default: 15 },
  modelValue: { type: String, required: true },
  /** localStorage 中的暫停記錄（null 表示無記錄） */
  savedProgress: { type: Object, default: null }
})

defineEmits(['update:modelValue', 'update:quizInput', 'start'])
</script>

<style scoped>
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
.quiz-count-input {
  width: 40px;
  padding: 1px 2px;
  border: none;
  border-bottom: 1.5px solid var(--custard-deep);
  border-radius: 0;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--custard-deep);
  text-align: center;
  background: transparent;
  outline: none;
  -moz-appearance: textfield;
}
.quiz-count-input::-webkit-outer-spin-button,
.quiz-count-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.quiz-count-input:focus {
  border-bottom-color: var(--header-from);
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

.mode-resume {
  color: var(--custard-deep);
  font-weight: 600;
}

@media (max-width: 600px) {
  .mode-select { flex-direction: column; }
  .setup-card { padding: 24px 16px; }
}
</style>
