<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：ExamDrawer.vue
  功能：考題目錄側邊抽屜（全部檢視模式，列出所有題目與作答狀態，點擊跳轉）
  建立日期：2026-05-21
  版本：1.0.0
-->
<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="open" class="drawer-overlay" @click.self="$emit('close')">
        <div class="drawer-panel">
          <!-- 標題列 -->
          <div class="drawer-header">
            <span class="material-icons drawer-header-icon">list</span>
            <span class="drawer-title">題目列表</span>
            <span class="drawer-count">{{ questions.length }} 題</span>
            <button class="drawer-close" @click="$emit('close')" type="button">
              <span class="material-icons">close</span>
            </button>
          </div>

          <!-- 題目列表 -->
          <ul class="drawer-list" ref="listRef">
            <li
              v-for="(q, i) in questions"
              :key="i"
              class="drawer-item"
              :class="{ active: i === current }"
              :ref="el => { if (i === current) activeRef = el }"
              @click="$emit('go', i); $emit('close')"
            >
              <span class="item-number" :class="statusClass(i)">{{ i + 1 }}</span>
              <span class="item-text">{{ truncate(q.question) }}</span>
              <span v-if="q._examLabel && q._examLabel.startsWith('S')" class="item-source-tag">S</span>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  questions: { type: Array, default: () => [] },
  current: { type: Number, default: 0 },
  /** 作答記錄 { [idx]: 'A'|'B'|'C'|'D' } */
  answers: { type: Object, default: () => ({}) }
})

defineEmits(['close', 'go'])

const listRef = ref(null)
const activeRef = ref(null)

/** 取得題目的狀態 class */
function statusClass(idx) {
  if (idx === props.current) return 'current'
  const userAnswer = props.answers[idx]
  if (userAnswer == null) return 'unanswered'
  return userAnswer === props.questions[idx].answer ? 'correct' : 'wrong'
}

/** 截斷題目文字 */
function truncate(text) {
  if (!text) return ''
  return text.length > 22 ? text.slice(0, 22) + '...' : text
}

/** 開啟時自動捲動到當前題目 */
watch(() => activeRef.value, (el) => {
  nextTick(() => {
    if (el && listRef.value) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  })
})
</script>

<style scoped>
/* 遮罩 */
.drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(93, 58, 46, 0.35);
  backdrop-filter: blur(2px);
}

/* 面板 */
.drawer-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  max-width: 85vw;
  height: 100%;
  background: var(--custard-bg);
  box-shadow: 4px 0 24px rgba(180, 120, 80, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 標題列 */
.drawer-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 12px;
  background: linear-gradient(135deg, var(--header-from), var(--header-to));
  color: #fff;
  flex-shrink: 0;
}
.drawer-header-icon {
  font-size: 20px;
}
.drawer-title {
  font-size: 0.88rem;
  font-weight: 700;
  flex: 1;
}
.drawer-count {
  font-size: 0.72rem;
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 10px;
  flex-shrink: 0;
}
.drawer-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}
.drawer-close:hover {
  background: rgba(255, 255, 255, 0.35);
}
.drawer-close .material-icons {
  font-size: 18px;
}

/* 題目列表 */
.drawer-list {
  flex: 1;
  overflow-y: auto;
  list-style: none;
  padding: 8px 0;
}
.drawer-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  cursor: pointer;
  transition: background 0.15s;
  border-left: 3px solid transparent;
}
.drawer-item:hover {
  background: rgba(255, 213, 79, 0.15);
}
.drawer-item.active {
  background: var(--custard-cream);
  border-left-color: var(--custard-deep);
}

/* 題號圓圈 */
.item-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 0.72rem;
  font-weight: 700;
  flex-shrink: 0;
}
.item-number.unanswered {
  background: var(--custard-cream);
  color: var(--custard-brown-light);
}
.item-number.current {
  background: var(--custard-deep);
  color: #fff;
}
.item-number.correct {
  background: #4caf50;
  color: #fff;
}
.item-number.wrong {
  background: #e57373;
  color: #fff;
}

/* 題目文字 */
.item-text {
  font-size: 0.82rem;
  color: var(--custard-brown);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-source-tag {
  flex-shrink: 0;
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 0.65rem;
  font-weight: 700;
  background: var(--custard-deep);
  color: #fff;
}

/* 滑入動畫 */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.25s ease;
}
.drawer-enter-active .drawer-panel,
.drawer-leave-active .drawer-panel {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-enter-from .drawer-panel,
.drawer-leave-to .drawer-panel {
  transform: translateX(-100%);
}
</style>
