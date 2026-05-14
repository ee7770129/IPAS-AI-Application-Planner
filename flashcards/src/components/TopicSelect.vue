<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：TopicSelect.vue
  功能：主題下拉選單元件
  建立日期：2026-05-14
  版本：1.0.0
-->
<template>
  <div class="topic-bar" v-if="topics.length">
    <span class="material-icons topic-icon">style</span>
    <select :value="modelValue" @change="$emit('update:modelValue', Number($event.target.value))">
      <option v-for="(t, i) in topics" :key="t.id" :value="i">
        {{ t.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  topics: { type: Array, required: true },
  modelValue: { type: Number, required: true }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.topic-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px 6px;
}
.topic-icon {
  color: var(--custard-deep);
  font-size: 20px;
}
.topic-bar select {
  padding: 8px 32px 8px 14px;
  border: 2px solid var(--custard-cream);
  border-radius: 24px;
  background: #fff;
  color: var(--custard-brown);
  font-size: 0.88rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%236D4C41' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(183, 142, 58, 0.1);
}
.topic-bar select:hover {
  border-color: var(--custard-gold);
  box-shadow: 0 2px 12px rgba(183, 142, 58, 0.2);
}
.topic-bar select:focus {
  border-color: var(--custard-deep);
  box-shadow: 0 2px 12px rgba(183, 142, 58, 0.25);
}

@media (max-width: 600px) {
  .topic-bar select {
    font-size: 0.82rem;
    padding: 7px 28px 7px 12px;
  }
}
</style>
