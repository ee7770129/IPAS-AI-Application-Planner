<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：FlashCard.vue
  功能：翻轉卡片元件（正面名詞 / 背面解釋）
  建立日期：2026-05-14
  版本：2.0.0
-->
<template>
  <div class="card-flip-container" @click="flipped = !flipped">
    <div class="card-flipper" :class="{ flipped }" ref="flipperRef">

      <!-- 正面：只放名詞 -->
      <div class="card-face card-front" ref="frontRef">
        <div class="card-number">{{ card.number }}</div>
        <div class="card-title">{{ card.title }}</div>
        <div v-if="card.engTitle" class="card-eng">
          {{ card.engTitle }}
          <button class="speak-btn" :class="{ loading: isLoadingEn }" @click.stop="speak(card.engTitle)" type="button" title="朗讀英文">
            <span class="material-icons">{{ isLoadingEn ? 'hourglass_top' : 'volume_up' }}</span>
          </button>
        </div>
        <img v-if="card.image" :src="card.image" :alt="card.title" class="card-image" @load="syncHeight" />
        <div class="flip-hint">
          <span class="material-icons">touch_app</span> 點擊翻面
        </div>
      </div>

      <!-- 背面：完整解釋 -->
      <div class="card-face card-back" ref="backRef">
        <div class="back-title">{{ card.title }}</div>
        <div v-if="card.engTitle" class="back-eng">
          {{ card.engTitle }}
          <button class="speak-btn" :class="{ loading: isLoadingEn }" @click.stop="speak(card.engTitle)" type="button" title="朗讀英文">
            <span class="material-icons">{{ isLoadingEn ? 'hourglass_top' : 'volume_up' }}</span>
          </button>
        </div>

        <template v-for="(sec, si) in card.back.sections" :key="si">
          <div class="section-label">
            <span class="material-icons">{{ sec.icon }}</span> {{ sec.label }}
          </div>
          <div v-if="sec.content" class="section-content" v-html="nl2br(sec.content)"></div>
          <div v-if="sec.code" class="code-block" v-html="escapeHtml(sec.code)"></div>
          <ChartSection v-if="sec.chart" :chart="sec.chart" />
          <div v-if="sec.table" class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th v-for="(h, hi) in sec.table.headers" :key="hi">{{ h }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, ri) in sec.table.rows" :key="ri">
                  <td v-for="(cell, ci) in row" :key="ci" :class="{ 'row-header': ci === 0 }">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="sec.tree" class="tree-block" v-html="nl2br(sec.tree)"></div>
          <div v-if="sec.tags" class="tags-row">
            <div
              v-for="(tag, ti) in sec.tags"
              :key="ti"
              class="tag"
              :class="'tag-' + tag.type"
            >
              {{ tag.text }}
            </div>
          </div>
        </template>

        <div class="back-actions">
          <button class="read-btn" :class="{ loading: isLoadingZh }" @click.stop="readExplanation" type="button" :title="isLoadingZh ? '載入中...' : isReadingZh ? '停止朗讀' : '朗讀解釋'">
            <span class="material-icons">{{ isLoadingZh ? 'hourglass_top' : isReadingZh ? 'stop' : 'volume_up' }}</span>
            {{ isLoadingZh ? '載入中...' : isReadingZh ? '停止' : '朗讀解釋' }}
          </button>
        </div>
        <div class="flip-hint-back">點擊翻回正面</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import ChartSection from './ChartSection.vue'
import { useSpeech } from '../composables/useSpeech.js'

const props = defineProps({
  card: { type: Object, required: true }
})

const flipped = ref(false)
const flipperRef = ref(null)
const frontRef = ref(null)
const backRef = ref(null)

/* 朗讀邏輯（透過 composable 管理） */
const {
  isReadingZh, isLoadingEn, isLoadingZh,
  stopAll, clearCache, speak, readExplanation
} = useSpeech(() => props.card)

/** 將換行符轉為 <br>，並跳脫 HTML */
function nl2br(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
}

/** 跳脫 HTML（不轉換換行，搭配 white-space: pre-wrap 使用） */
function escapeHtml(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** 同步容器高度，避免背面內容與導覽列重疊 */
function syncHeight() {
  if (!flipperRef.value) return
  const target = flipped.value ? backRef.value : frontRef.value
  if (target) {
    flipperRef.value.style.height = target.scrollHeight + 'px'
  }
}

let resizeObs = null
onMounted(() => {
  syncHeight()
  document.fonts.ready.then(syncHeight)
  setTimeout(syncHeight, 300)
  /* 視窗/容器大小變化時重新計算高度 */
  resizeObs = new ResizeObserver(syncHeight)
  if (flipperRef.value) resizeObs.observe(flipperRef.value)
})
onBeforeUnmount(() => { if (resizeObs) resizeObs.disconnect() })
watch(flipped, () => nextTick(syncHeight))
watch(() => props.card, () => {
  flipped.value = false
  stopAll()
  clearCache()
  nextTick(() => {
    syncHeight()
    setTimeout(syncHeight, 150)
  })
})

/** 讓父元件可透過鍵盤觸發翻轉 */
defineExpose({
  toggle() { flipped.value = !flipped.value }
})
</script>

<style scoped>
.card-flip-container {
  width: 100%;
  max-width: 560px;
  perspective: 1200px;
  cursor: pointer;
}
.card-flipper {
  position: relative;
  width: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              height 0.4s ease;
  transform-style: preserve-3d;
}
.card-flipper.flipped {
  transform: rotateY(180deg);
}

.card-face {
  width: 100%;
  border-radius: var(--radius);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow: 0 6px 24px var(--custard-shadow);
  overflow: hidden;
}

/* -- 正面：簡潔大字名詞 -- */
.card-front {
  position: relative;
  background: linear-gradient(160deg, var(--custard-card-front), #FFF9E0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 28px;
  min-height: 280px;
  text-align: center;
  border: 2px solid var(--custard-cream);
}
.card-number {
  position: absolute;
  top: 16px;
  left: 20px;
  width: 32px;
  height: 32px;
  background: var(--custard-deep);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
}
.card-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--custard-amber);
  margin-bottom: 8px;
}
.card-eng {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.9rem;
  color: var(--custard-brown-light);
  opacity: 0.7;
}
.speak-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: var(--custard-cream);
  color: var(--custard-deep);
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
  flex-shrink: 0;
}
.speak-btn:hover {
  background: var(--custard-gold);
}
.speak-btn .material-icons {
  font-size: 16px;
}
.card-image {
  max-width: 120px;
  max-height: 120px;
  margin-top: 12px;
  border-radius: 12px;
  object-fit: contain;
}

.flip-hint {
  position: absolute;
  bottom: 14px;
  right: 16px;
  font-size: 0.75rem;
  color: var(--custard-brown-light);
  opacity: 0.6;
  display: flex;
  align-items: center;
  gap: 4px;
}
.flip-hint .material-icons { font-size: 16px; }

/* -- 背面 -- */
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--custard-card-back);
  transform: rotateY(180deg);
  padding: 24px 22px;
  min-height: 280px;
  border: 2px solid var(--custard-cream);
  overflow-y: auto;
}
.back-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--custard-amber);
}
.back-eng {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--custard-brown-light);
  opacity: 0.7;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--custard-cream);
  margin-bottom: 14px;
}
.back-title:last-of-type {
  padding-bottom: 10px;
  border-bottom: 2px solid var(--custard-cream);
  margin-bottom: 14px;
}
.section-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--custard-deep);
  margin-top: 14px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.section-label .material-icons { font-size: 16px; }
.section-content {
  font-size: 0.88rem;
  color: var(--custard-brown);
  line-height: 1.7;
  margin-bottom: 4px;
}
.code-block {
  background: rgba(255, 213, 79, 0.2);
  border-left: 3px solid var(--custard-deep);
  padding: 10px 14px;
  margin: 8px 0;
  border-radius: 0 8px 8px 0;
  font-family: "Consolas", "Source Code Pro", monospace;
  font-size: 0.82rem;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-x: auto;
}
.tree-block {
  background: rgba(255, 224, 130, 0.3);
  border: 2px solid var(--custard-cream);
  border-radius: 10px;
  padding: 14px 16px;
  margin: 10px 0;
  font-size: 0.85rem;
  line-height: 1.8;
  font-family: "Consolas", "Source Code Pro", "Microsoft JhengHei", monospace;
}
.tags-row { margin-top: 6px; }
.tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
  margin: 2px 4px 2px 0;
}
.tag-pro { background: rgba(102,187,106,0.2); color: #2E7D32; }
.tag-con { background: rgba(239,83,80,0.15); color: #C62828; }
/* -- 表格 -- */
.table-wrap {
  margin: 8px 0;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--custard-cream);
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.78rem;
  font-family: "Consolas", "Source Code Pro", monospace;
}
.data-table th {
  background: var(--custard-deep);
  color: #fff;
  padding: 6px 8px;
  text-align: right;
  font-weight: 700;
  white-space: nowrap;
}
.data-table th:first-child {
  text-align: left;
}
.data-table td {
  padding: 5px 8px;
  text-align: right;
  border-bottom: 1px solid rgba(255, 213, 79, 0.25);
  white-space: nowrap;
}
.data-table td.row-header {
  text-align: left;
  font-weight: 700;
  color: var(--custard-deep);
  background: rgba(255, 213, 79, 0.1);
}
.data-table tbody tr:hover {
  background: rgba(255, 213, 79, 0.15);
}

/* -- 朗讀解釋按鈕 -- */
.back-actions {
  display: flex;
  justify-content: center;
  margin-top: 14px;
}
.read-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border: 1.5px solid var(--custard-cream);
  border-radius: 20px;
  background: var(--custard-light);
  color: var(--custard-deep);
  font-size: 0.78rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}
.read-btn:hover {
  background: var(--custard-cream);
}
.read-btn.loading {
  opacity: 0.7;
  cursor: wait;
}
.read-btn .material-icons {
  font-size: 16px;
}
.speak-btn.loading .material-icons,
.read-btn.loading .material-icons {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.flip-hint-back {
  text-align: center;
  font-size: 0.75rem;
  color: var(--custard-brown-light);
  opacity: 0.5;
  margin-top: 16px;
  padding-top: 10px;
  border-top: 1px solid var(--custard-cream);
}

/* -- 手機版 -- */
@media (max-width: 600px) {
  .card-front { padding: 48px 20px; min-height: 240px; }
  .card-title { font-size: 1.3rem; }
  .card-back { padding: 18px 16px; min-height: 240px; }
  .section-content { font-size: 0.83rem; }
  .code-block { font-size: 0.78rem; padding: 8px 10px; }
}
@media (max-width: 380px) {
  .card-title { font-size: 1.15rem; }
}
</style>
