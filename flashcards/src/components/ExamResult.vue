<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：ExamResult.vue
  功能：整卷模式結果頁（總分、逐題對錯、展開解析）
  建立日期：2026-05-16
  版本：1.0.0
-->
<template>
  <div class="exam-result">
    <!-- 成績摘要 -->
    <div class="result-summary">
      <div class="score-circle" :class="scoreLevel">
        <span class="score-num">{{ correctCount }}</span>
        <span class="score-sep">/</span>
        <span class="score-total">{{ total }}</span>
      </div>
      <div class="score-label">
        正確率 {{ Math.round(correctCount / total * 100) }}%
      </div>
    </div>

    <!-- 逐題清單 -->
    <div class="result-list">
      <div
        v-for="(item, idx) in results"
        :key="idx"
        class="result-item"
        :class="{ expanded: expandedIdx === idx }"
      >
        <button class="result-row" @click="toggleExpand(idx)" type="button">
          <span class="result-num">{{ idx + 1 }}</span>
          <span class="material-icons result-icon" :class="item.correct ? 'correct' : 'wrong'">
            {{ item.correct ? 'check_circle' : 'cancel' }}
          </span>
          <span class="result-question">{{ truncate(item.question.question, 30) }}</span>
          <span class="material-icons expand-arrow">
            {{ expandedIdx === idx ? 'expand_less' : 'expand_more' }}
          </span>
        </button>
        <Transition name="slide">
          <div v-if="expandedIdx === idx" class="result-detail">
            <div class="detail-question">{{ item.question.question }}</div>
            <div class="detail-options">
              <div
                v-for="opt in item.question.options"
                :key="opt.label"
                class="detail-option"
                :class="{
                  correct: opt.label === item.question.answer,
                  wrong: opt.label === item.userAnswer && opt.label !== item.question.answer,
                  'user-pick': opt.label === item.userAnswer
                }"
              >
                <span class="opt-label">{{ opt.label }}</span>
                <span class="opt-text">{{ opt.text }}</span>
              </div>
            </div>
            <div class="detail-meta">
              <span class="material-icons">folder</span>
              章節：{{ item.question.chapter }}
            </div>
            <div class="detail-explain">{{ item.question.explanation }}</div>
            <!-- 各選項解析 -->
            <div v-if="item.question.optionExplanations" class="detail-opt-explains">
              <div
                v-for="opt in item.question.options"
                :key="opt.label"
                class="detail-opt-item"
              >
                <div class="detail-opt-head">
                  <span class="detail-opt-label" :class="opt.label === item.question.answer ? 'correct' : 'wrong'">{{ opt.label }}</span>
                  <span>{{ opt.text }}</span>
                </div>
                <div v-if="item.question.optionExplanations[opt.label]" class="detail-opt-reason">
                  {{ item.question.optionExplanations[opt.label] }}
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- 操作按鈕 -->
    <div class="result-actions">
      <button class="action-btn primary" @click="$emit('retry')" type="button">
        <span class="material-icons">refresh</span>
        重新作答
      </button>
      <button class="action-btn" @click="$emit('back')" type="button">
        <span class="material-icons">arrow_back</span>
        返回
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  /** [{ question, userAnswer, correct }] */
  results: { type: Array, required: true }
})

defineEmits(['retry', 'back'])

const expandedIdx = ref(null)

const total = computed(() => props.results.length)
const correctCount = computed(() => props.results.filter(r => r.correct).length)
const scoreLevel = computed(() => {
  const pct = correctCount.value / total.value
  if (pct >= 0.8) return 'high'
  if (pct >= 0.6) return 'mid'
  return 'low'
})

function toggleExpand(idx) {
  expandedIdx.value = expandedIdx.value === idx ? null : idx
}

function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '...' : str
}
</script>

<style scoped>
.exam-result {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}

/* 成績摘要 */
.result-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
}

.score-circle {
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid;
  margin-bottom: 8px;
}
.score-circle.high { border-color: #4caf50; color: #2e7d32; }
.score-circle.mid { border-color: #ff9800; color: #e65100; }
.score-circle.low { border-color: #e53935; color: #c62828; }

.score-num { font-size: 1.8rem; font-weight: 800; }
.score-sep { font-size: 1.2rem; margin: 0 2px; opacity: 0.5; }
.score-total { font-size: 1.1rem; font-weight: 600; opacity: 0.7; }

.score-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--custard-brown-light);
}

/* 逐題清單 */
.result-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
}

.result-item {
  border: 1px solid var(--custard-cream);
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.result-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 14px;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 0.85rem;
  color: var(--custard-brown);
  cursor: pointer;
  text-align: left;
}

.result-num {
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--custard-brown-light);
  min-width: 20px;
}

.result-icon { font-size: 20px; }
.result-icon.correct { color: #4caf50; }
.result-icon.wrong { color: #e53935; }

.result-question {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.expand-arrow {
  font-size: 20px;
  color: var(--custard-brown-light);
}

/* 展開詳情 */
.result-detail {
  padding: 12px 16px 16px;
  border-top: 1px solid var(--custard-cream);
  background: var(--custard-light);
}

.detail-question {
  font-size: 0.85rem;
  line-height: 1.7;
  margin-bottom: 12px;
  font-weight: 500;
}

.detail-options {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

.detail-option {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.82rem;
  line-height: 1.5;
  background: #fff;
  border: 1px solid transparent;
}
.detail-option.correct {
  border-color: #4caf50;
  background: rgba(76, 175, 80, 0.06);
}
.detail-option.wrong {
  border-color: #e53935;
  background: rgba(229, 57, 53, 0.06);
}

.opt-label {
  font-weight: 700;
  min-width: 18px;
  color: var(--custard-deep);
}

.detail-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--custard-brown-light);
  margin-bottom: 8px;
}
.detail-meta .material-icons {
  font-size: 15px;
  color: var(--custard-deep);
}

.detail-explain {
  font-size: 0.83rem;
  line-height: 1.7;
  color: var(--custard-brown);
}

/* 操作按鈕 */
.result-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 16px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: 2px solid var(--custard-cream);
  border-radius: 24px;
  background: #fff;
  color: var(--custard-brown);
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}
.action-btn:hover {
  border-color: var(--custard-gold);
  background: var(--custard-light);
}
.action-btn.primary {
  border-color: var(--custard-deep);
  background: var(--custard-deep);
  color: #fff;
}
.action-btn.primary:hover {
  background: var(--custard-amber);
  border-color: var(--custard-amber);
}
.action-btn .material-icons { font-size: 18px; }

/* 各選項解析 */
.detail-opt-explains {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed var(--custard-cream);
}
.detail-opt-item {
  padding: 8px 10px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--custard-cream);
}
.detail-opt-head {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.5;
}
.detail-opt-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 700;
  flex-shrink: 0;
}
.detail-opt-label.correct {
  background: rgba(76, 175, 80, 0.15);
  color: #2e7d32;
}
.detail-opt-label.wrong {
  background: rgba(229, 57, 53, 0.1);
  color: #c62828;
}
.detail-opt-reason {
  margin-top: 4px;
  padding-left: 26px;
  font-size: 0.78rem;
  line-height: 1.6;
  color: var(--custard-brown-light);
}

/* 動畫 */
.slide-enter-active, .slide-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.slide-enter-to, .slide-leave-from {
  opacity: 1;
  max-height: 600px;
}
</style>
