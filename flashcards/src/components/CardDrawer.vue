<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：CardDrawer.vue
  功能：卡片目錄側邊抽屜（列出所有卡片名稱，點擊跳轉）
  建立日期：2026-05-16
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
            <span class="drawer-title">{{ topicLabel }}</span>
            <span class="drawer-count">{{ cards.length }} 張</span>
            <button class="drawer-close" @click="$emit('close')" type="button">
              <span class="material-icons">close</span>
            </button>
          </div>

          <!-- 卡片列表 -->
          <ul class="drawer-list" ref="listRef">
            <li
              v-for="(card, i) in cards"
              :key="i"
              class="drawer-item"
              :class="{ active: i === current }"
              :ref="el => { if (i === current) activeRef = el }"
              @click="$emit('go', i); $emit('close')"
            >
              <span class="item-number">{{ card.number }}</span>
              <span class="item-title">{{ card.title }}</span>
              <span v-if="card.supplementary" class="item-badge">補充</span>
              <span v-if="card.engTitle" class="item-eng">{{ card.engTitle }}</span>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

defineProps({
  open: { type: Boolean, default: false },
  cards: { type: Array, default: () => [] },
  current: { type: Number, default: 0 },
  topicLabel: { type: String, default: '' }
})

defineEmits(['close', 'go'])

const listRef = ref(null)
const activeRef = ref(null)

/** 開啟時自動捲動到當前卡片 */
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
  width: 280px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

/* 卡片列表 */
.drawer-list {
  flex: 1;
  overflow-y: auto;
  list-style: none;
  padding: 8px 0;
}
.drawer-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
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
.item-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--custard-gold);
  color: #fff;
  border-radius: 50%;
  font-size: 0.72rem;
  font-weight: 700;
  flex-shrink: 0;
}
.drawer-item.active .item-number {
  background: var(--custard-deep);
}
.item-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--custard-brown);
  line-height: 1.4;
}
.item-badge {
  font-size: 0.6rem;
  font-weight: 700;
  color: #fff;
  background: var(--custard-deep);
  padding: 1px 6px;
  border-radius: 8px;
  flex-shrink: 0;
  line-height: 1.5;
}
.item-eng {
  font-size: 0.7rem;
  color: var(--custard-brown-light);
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none;
}

/* 寬螢幕才顯示英文名稱 */
@media (min-width: 360px) {
  .drawer-item {
    flex-wrap: wrap;
  }
  .item-eng {
    display: block;
    width: 100%;
    padding-left: 32px;
  }
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
