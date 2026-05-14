<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：TopicSelect.vue
  功能：主題下拉選單元件（自訂樣式，含「全部」選項）
  建立日期：2026-05-14
  版本：1.2.0
-->
<template>
  <div class="topic-bar" v-if="topics.length">
    <div class="topic-dropdown" ref="dropdownRef">
      <button
        class="topic-trigger"
        :class="{ open: isOpen }"
        @click="toggle"
        type="button"
      >
        <span class="material-icons topic-icon">style</span>
        <span class="topic-label">{{ triggerLabel }}</span>
        <span class="material-icons topic-arrow" :class="{ open: isOpen }">expand_more</span>
      </button>
      <Transition name="dropdown">
        <ul v-if="isOpen" class="topic-menu" role="listbox">
          <!-- 全部（隨機） -->
          <li
            class="topic-option"
            :class="{ active: modelValue === -1 }"
            role="option"
            :aria-selected="modelValue === -1"
            @click="selectAll"
          >
            <span class="material-icons option-icon">shuffle</span>
            全部（隨機）
          </li>
          <li class="topic-divider"></li>
          <!-- 各主題 -->
          <li
            v-for="(t, i) in topics"
            :key="t.id"
            class="topic-option"
            :class="{ active: i === modelValue }"
            role="option"
            :aria-selected="i === modelValue"
            @click="select(i)"
          >
            {{ t.label }}
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  topics: { type: Array, required: true },
  modelValue: { type: Number, required: true }
})
const emit = defineEmits(['update:modelValue', 'reshuffle'])

const isOpen = ref(false)
const dropdownRef = ref(null)

/** 按鈕顯示文字 */
const triggerLabel = computed(() => {
  if (props.modelValue === -1) return '全部（隨機）'
  return props.topics[props.modelValue]?.label ?? ''
})

function toggle() {
  isOpen.value = !isOpen.value
}

/** 選擇「全部」：每次點擊都觸發重新洗牌 */
function selectAll() {
  if (props.modelValue === -1) {
    emit('reshuffle')
  } else {
    emit('update:modelValue', -1)
  }
  isOpen.value = false
}

function select(i) {
  emit('update:modelValue', i)
  isOpen.value = false
}

/** 點擊外部關閉選單 */
function onClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<style scoped>
.topic-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px 6px;
}

.topic-dropdown {
  position: relative;
}

/* 觸發按鈕 */
.topic-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 2px solid var(--custard-cream);
  border-radius: 24px;
  background: #fff;
  color: var(--custard-brown);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(183, 142, 58, 0.1);
  font-family: inherit;
}
.topic-trigger:hover {
  border-color: var(--custard-gold);
  box-shadow: 0 2px 12px rgba(183, 142, 58, 0.2);
}
.topic-trigger.open {
  border-color: var(--custard-deep);
  box-shadow: 0 2px 12px rgba(183, 142, 58, 0.25);
}

.topic-icon {
  color: var(--custard-deep);
  font-size: 20px;
}

.topic-arrow {
  font-size: 20px;
  color: var(--custard-brown-light);
  transition: transform 0.25s ease;
}
.topic-arrow.open {
  transform: rotate(180deg);
}

/* 下拉選單 */
.topic-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 100%;
  width: max-content;
  background: #fff;
  border: 2px solid var(--custard-cream);
  border-radius: var(--radius);
  padding: 6px 0;
  margin: 0;
  list-style: none;
  box-shadow: 0 8px 24px rgba(180, 120, 80, 0.18);
  z-index: 100;
  overflow: hidden;
}

.topic-option {
  padding: 10px 20px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--custard-brown);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
}
.topic-option:hover {
  background: var(--custard-light);
  color: var(--custard-amber);
}
.topic-option.active {
  background: var(--custard-cream);
  color: var(--custard-deep);
  font-weight: 700;
}

.option-icon {
  font-size: 18px;
}

.topic-divider {
  height: 1px;
  background: var(--custard-cream);
  margin: 4px 12px;
}

/* 展開/收合動畫 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: top center;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) scaleY(0.9);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateX(-50%) scaleY(1);
}

@media (max-width: 600px) {
  .topic-trigger {
    font-size: 0.82rem;
    padding: 7px 12px;
    gap: 6px;
  }
  .topic-icon,
  .topic-arrow {
    font-size: 18px;
  }
}
</style>
