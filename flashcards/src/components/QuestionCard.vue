<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：QuestionCard.vue
  功能：單題選擇題卡片（顯示題目、選項、解析）
  建立日期：2026-05-16
  版本：1.0.0
-->
<template>
  <div class="question-card">
    <!-- 題目 -->
    <div class="question-text">
      {{ question.question }}
      <img
        v-if="question.image"
        :src="question.image"
        class="question-image"
        alt="題目附圖"
      />
    </div>

    <!-- 選項 -->
    <div class="options">
      <button
        v-for="opt in question.options"
        :key="opt.label"
        class="option-btn"
        :class="optionClass(opt.label)"
        :disabled="locked"
        @click="selectOption(opt.label)"
        type="button"
      >
        <span class="option-label">{{ opt.label }}</span>
        <span class="option-text">{{ opt.text }}</span>
        <span v-if="locked && opt.label === question.answer" class="material-icons option-icon correct">check_circle</span>
        <span v-else-if="locked && opt.label === selected && opt.label !== question.answer" class="material-icons option-icon wrong">cancel</span>
      </button>
    </div>

    <!-- 解析區（鎖定後顯示） -->
    <Transition name="explain">
      <div v-if="locked" class="explanation">
        <div class="explain-header" :class="isCorrect ? 'correct' : 'wrong'">
          <span class="material-icons">{{ isCorrect ? 'check_circle' : 'cancel' }}</span>
          <span>{{ isCorrect ? '正確' : '錯誤' }}</span>
          <span class="explain-answer">正確答案：{{ question.answer }}</span>
        </div>
        <div class="explain-meta">
          <span class="material-icons">folder</span>
          <span>章節：{{ question.chapter }}</span>
        </div>
        <div class="explain-body">{{ question.explanation }}</div>

        <!-- 各選項解析 -->
        <div v-if="question.optionExplanations" class="option-explanations">
          <div
            v-for="opt in question.options"
            :key="opt.label"
            class="opt-explain-item"
            :class="{
              'is-correct': opt.label === question.answer,
              'is-wrong': opt.label !== question.answer
            }"
          >
            <div class="opt-explain-header">
              <span class="opt-explain-label" :class="opt.label === question.answer ? 'correct' : 'wrong'">{{ opt.label }}</span>
              <span class="opt-explain-text">{{ opt.text }}</span>
              <span v-if="opt.label === question.answer" class="material-icons opt-explain-icon correct">check_circle</span>
              <span v-else class="material-icons opt-explain-icon wrong">close</span>
            </div>
            <div v-if="question.optionExplanations[opt.label]" class="opt-explain-reason">
              {{ question.optionExplanations[opt.label] }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  question: { type: Object, required: true },
  /** 是否已鎖定（整卷模式送出後鎖定） */
  forceReveal: { type: Boolean, default: false },
  /** 外部傳入已選答案（整卷模式） */
  externalAnswer: { type: String, default: null }
})

const emit = defineEmits(['answered'])

const selected = ref(null)
const revealed = ref(false)

/** 是否鎖定（不可再改答案） */
const locked = computed(() => revealed.value || props.forceReveal)

/** 是否答對 */
const isCorrect = computed(() => selected.value === props.question.answer)

/** 選擇選項 */
function selectOption(label) {
  if (locked.value) return
  selected.value = label
  emit('answered', label)
}

/** 顯示答案（單題模式用） */
function reveal() {
  revealed.value = true
}

/** 重設狀態 */
function reset() {
  selected.value = null
  revealed.value = false
}

/** 題目變動時重設 */
watch(() => props.question.id, () => {
  reset()
})

/** 同步外部答案 */
watch(() => props.externalAnswer, (val) => {
  if (val !== null) selected.value = val
}, { immediate: true })

/** 選項的 CSS class */
function optionClass(label) {
  const classes = []
  if (selected.value === label) classes.push('selected')
  if (locked.value) {
    if (label === props.question.answer) classes.push('correct')
    else if (label === selected.value) classes.push('wrong')
  }
  return classes
}

defineExpose({ reveal, reset, selected })
</script>

<style scoped>
.question-card {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}

.question-text {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.7;
  color: var(--custard-brown);
  margin-bottom: 16px;
  padding: 16px;
  background: var(--custard-light);
  border-radius: var(--radius);
  border: 1px solid var(--custard-cream);
}

.question-image {
  display: block;
  max-width: 100%;
  margin: 12px auto 0;
  border-radius: 8px;
  border: 1px solid var(--custard-cream);
}

.options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.option-btn {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  border: 2px solid var(--custard-cream);
  border-radius: 12px;
  background: #fff;
  color: var(--custard-brown);
  font-size: 0.88rem;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1.6;
}

.option-btn:hover:not(:disabled) {
  border-color: var(--custard-gold);
  background: var(--custard-light);
}

.option-btn.selected {
  border-color: var(--custard-deep);
  background: rgba(232, 151, 107, 0.08);
}

.option-btn.correct {
  border-color: #4caf50;
  background: rgba(76, 175, 80, 0.06);
}

.option-btn.wrong {
  border-color: #e53935;
  background: rgba(229, 57, 53, 0.06);
}

.option-btn:disabled {
  cursor: default;
}

.option-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--custard-cream);
  color: var(--custard-deep);
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-top: 1px;
}

.option-text {
  flex: 1;
}

.option-icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}
.option-icon.correct { color: #4caf50; }
.option-icon.wrong { color: #e53935; }

/* 解析區 */
.explanation {
  margin-top: 16px;
  padding: 16px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--custard-cream);
  box-shadow: 0 2px 8px var(--custard-shadow);
}

.explain-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.explain-header.correct { color: #2e7d32; }
.explain-header.wrong { color: #c62828; }
.explain-header .material-icons { font-size: 20px; }

.explain-answer {
  margin-left: auto;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--custard-brown-light);
}

.explain-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--custard-brown-light);
  margin-bottom: 10px;
  padding: 6px 10px;
  background: var(--custard-light);
  border-radius: 8px;
}
.explain-meta .material-icons {
  font-size: 16px;
  color: var(--custard-deep);
}

.explain-body {
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--custard-brown);
}

/* 各選項解析 */
.option-explanations {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed var(--custard-cream);
}

.opt-explain-item {
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--custard-light);
  border: 1px solid var(--custard-cream);
}
.opt-explain-item.is-correct {
  background: rgba(76, 175, 80, 0.05);
  border-color: rgba(76, 175, 80, 0.25);
}

.opt-explain-header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.83rem;
  font-weight: 600;
  line-height: 1.5;
}

.opt-explain-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}
.opt-explain-label.correct {
  background: rgba(76, 175, 80, 0.15);
  color: #2e7d32;
}
.opt-explain-label.wrong {
  background: rgba(229, 57, 53, 0.1);
  color: #c62828;
}

.opt-explain-text {
  flex: 1;
  color: var(--custard-brown);
}

.opt-explain-icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}
.opt-explain-icon.correct { color: #4caf50; }
.opt-explain-icon.wrong { color: #bdbdbd; }

.opt-explain-reason {
  margin-top: 6px;
  padding-left: 30px;
  font-size: 0.8rem;
  line-height: 1.65;
  color: var(--custard-brown-light);
}

/* 動畫 */
.explain-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.explain-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
