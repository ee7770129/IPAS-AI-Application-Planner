<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：CardNav.vue
  功能：卡片導覽列元件（上下張按鈕 + 圓點指示器）
  建立日期：2026-05-14
  版本：1.0.0
-->
<template>
  <div class="nav-bar">
    <button class="nav-btn" :disabled="current === 0" @click="$emit('go', current - 1)">
      <span class="material-icons">chevron_left</span>
      <span class="btn-text">上一張</span>
    </button>
    <div v-if="total <= 20" class="dots">
      <span
        v-for="i in total"
        :key="i"
        class="dot"
        :class="{ active: i - 1 === current }"
        @click="$emit('go', i - 1)"
      />
    </div>
    <button class="nav-btn" :disabled="current === total - 1" @click="$emit('go', current + 1)">
      <span class="btn-text">下一張</span>
      <span class="material-icons">chevron_right</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  current: { type: Number, required: true },
  total: { type: Number, required: true }
})
defineEmits(['go'])
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 18px 0 10px;
  max-width: 560px;
  width: 100%;
}
.nav-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 20px;
  border: 2px solid var(--custard-cream);
  border-radius: 28px;
  background: #fff;
  color: var(--custard-brown);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.nav-btn:hover:not(:disabled) {
  background: var(--custard-cream);
  border-color: var(--custard-gold);
}
.nav-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.nav-btn .material-icons { font-size: 18px; }

.dots {
  display: flex;
  gap: 8px;
  align-items: center;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--custard-cream);
  border: 2px solid var(--custard-gold);
  transition: all 0.25s;
  cursor: pointer;
}
.dot.active {
  background: var(--custard-deep);
  border-color: var(--custard-amber);
  transform: scale(1.2);
}

@media (max-width: 600px) {
  .nav-btn { padding: 8px 14px; font-size: 0.8rem; }
  .dots { gap: 6px; }
  .dot { width: 8px; height: 8px; }
}
@media (max-width: 380px) {
  .btn-text { display: none; }
  .nav-btn { padding: 10px 14px; }
}
</style>
