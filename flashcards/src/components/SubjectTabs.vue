<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：SubjectTabs.vue
  功能：科目頁籤元件
  建立日期：2026-05-14
  版本：1.0.0
-->
<template>
  <div class="subject-tabs" v-if="subjects.length">
    <button
      v-for="(subj, i) in subjects"
      :key="subj.id"
      class="subject-tab"
      :class="{ active: i === modelValue }"
      @click="$emit('update:modelValue', i)"
    >
      {{ subj.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  subjects: { type: Array, required: true },
  modelValue: { type: Number, required: true }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.subject-tabs {
  display: flex;
  background: var(--custard-light);
  border-bottom: 2px solid var(--custard-cream);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.subject-tab {
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
}
.subject-tab.active {
  color: var(--custard-amber);
  border-bottom-color: var(--custard-amber);
  background: rgba(249, 168, 37, 0.08);
}

@media (max-width: 600px) {
  .subject-tab { padding: 8px 14px; font-size: 0.8rem; }
}
</style>
