<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：ModeTabs.vue
  功能：模式切換頁籤（學習卡片 / 歷屆考題）
  建立日期：2026-05-16
  版本：1.0.0
-->
<template>
  <div v-if="showExamTab" class="mode-tabs">
    <button
      class="mode-tab"
      :class="{ active: modelValue === 'flashcard' }"
      @click="$emit('update:modelValue', 'flashcard')"
      type="button"
    >
      學習卡片
    </button>
    <button
      class="mode-tab"
      :class="{ active: modelValue === 'exam' }"
      @click="$emit('update:modelValue', 'exam')"
      type="button"
    >
      歷屆考題
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: 'flashcard' },
  showExamTab: { type: Boolean, default: false }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.mode-tabs {
  display: flex;
  background: var(--custard-light);
  border-bottom: 2px solid var(--custard-cream);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.mode-tab {
  flex: 1;
  padding: 10px 0;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--custard-brown-light);
  transition: all 0.2s;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  font-family: inherit;
  text-align: center;
}

.mode-tab.active {
  color: var(--custard-amber);
  border-bottom-color: var(--custard-amber);
  background: rgba(249, 168, 37, 0.08);
}

@media (max-width: 600px) {
  .mode-tab { padding: 8px 14px; font-size: 0.8rem; }
}
</style>
