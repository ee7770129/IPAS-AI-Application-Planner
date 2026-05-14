<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：LevelTabs.vue
  功能：級別頁籤元件（初級 / 終極）
  建立日期：2026-05-14
  版本：1.0.0
-->
<template>
  <div class="level-tabs">
    <button
      v-for="(lvl, key) in levels"
      :key="key"
      class="level-tab"
      :class="{ active: key === modelValue }"
      @click="$emit('update:modelValue', key)"
    >
      {{ lvl.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  levels: { type: Object, required: true },
  modelValue: { type: String, required: true }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.level-tabs {
  display: flex;
  background: var(--custard-cream);
  border-bottom: 3px solid var(--custard-gold);
}
.level-tab {
  flex: 1;
  padding: 12px 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--custard-brown-light);
  transition: all 0.25s;
  position: relative;
}
.level-tab.active {
  color: var(--custard-amber);
  background: var(--custard-light);
}
.level-tab.active::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 20%;
  width: 60%;
  height: 3px;
  background: var(--custard-amber);
  border-radius: 2px;
}
.level-tab:not(.active):hover {
  background: rgba(255,255,255,0.4);
}

@media (max-width: 600px) {
  .level-tab { padding: 10px 0; font-size: 0.9rem; }
}
</style>
