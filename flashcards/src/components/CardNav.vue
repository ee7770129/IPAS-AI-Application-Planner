<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：CardNav.vue
  功能：卡片導覽列元件（上下張按鈕 + 自適應圓點指示器）
  建立日期：2026-05-14
  版本：1.2.0
-->
<template>
  <div class="nav-bar">
    <button class="nav-btn" :disabled="current === 0" @click="$emit('go', current - 1)">
      <span class="material-icons">chevron_left</span>
      <span class="btn-text">上一張</span>
    </button>
    <div class="dots-viewport" ref="viewportRef">
      <div class="dots-track" ref="trackRef" :style="trackStyle">
        <span
          v-for="i in total"
          :key="i"
          class="dot"
          :class="{ active: i - 1 === current }"
          @click="$emit('go', i - 1)"
        />
      </div>
    </div>
    <button class="nav-btn" :disabled="current === total - 1" @click="$emit('go', current + 1)">
      <span class="btn-text">下一張</span>
      <span class="material-icons">chevron_right</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  current: { type: Number, required: true },
  total: { type: Number, required: true }
})
defineEmits(['go'])

watch(() => props.total, () => nextTick(measureDot))

const viewportRef = ref(null)
const trackRef = ref(null)
const viewportWidth = ref(300)
const actualDotStep = ref(16)

/** 監聽容器寬度變化 */
let resizeObs = null
onMounted(() => {
  nextTick(() => {
    measureDot()
    updateWidth()
  })
  resizeObs = new ResizeObserver(() => {
    updateWidth()
    measureDot()
  })
  if (viewportRef.value) resizeObs.observe(viewportRef.value)
})
onBeforeUnmount(() => { if (resizeObs) resizeObs.disconnect() })

function updateWidth() {
  if (viewportRef.value) viewportWidth.value = viewportRef.value.clientWidth
}

/** 從 DOM 讀取實際圓點尺寸 */
function measureDot() {
  if (!trackRef.value) return
  const dots = trackRef.value.querySelectorAll('.dot')
  if (dots.length >= 2) {
    const r0 = dots[0].getBoundingClientRect()
    const r1 = dots[1].getBoundingClientRect()
    actualDotStep.value = r1.left - r0.left
  } else if (dots.length === 1) {
    actualDotStep.value = dots[0].offsetWidth + 6
  }
}

/** 計算位移，讓當前圓點置中在可視範圍 */
const trackStyle = computed(() => {
  const step = actualDotStep.value
  const totalWidth = props.total * step - (step - 10)
  const vw = viewportWidth.value
  /* 全部放得下就置中 */
  if (totalWidth <= vw) {
    const pad = (vw - totalWidth) / 2
    return { transform: `translateX(${pad}px)` }
  }
  /* 放不下就滑動，讓 active dot 在可視區中央 */
  const center = props.current * step + 5
  let offset = vw / 2 - center
  const minOffset = vw - totalWidth
  if (offset < minOffset) offset = minOffset
  if (offset > 0) offset = 0
  return { transform: `translateX(${offset}px)` }
})
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
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
  white-space: nowrap;
  flex-shrink: 0;
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

.dots-viewport {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.dots-track {
  display: flex;
  gap: 6px;
  align-items: center;
  transition: transform 0.25s ease;
  width: max-content;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--custard-cream);
  transition: background 0.25s;
  cursor: pointer;
  flex-shrink: 0;
}
.dot.active {
  background: var(--custard-deep);
}

@media (max-width: 600px) {
  .nav-btn { padding: 8px 14px; font-size: 0.8rem; }
  .dots-track { gap: 5px; }
  .dot { width: 8px; height: 8px; }
}
@media (max-width: 380px) {
  .btn-text { display: none; }
  .nav-btn { padding: 10px 14px; }
}
</style>
