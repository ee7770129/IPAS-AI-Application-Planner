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
        <div v-if="card.engTitle" class="card-eng">{{ card.engTitle }}</div>
        <div class="flip-hint">
          <span class="material-icons">touch_app</span> 點擊翻面
        </div>
      </div>

      <!-- 背面：完整解釋 -->
      <div class="card-face card-back" ref="backRef">
        <div class="back-title">{{ card.title }}</div>
        <div v-if="card.engTitle" class="back-eng">{{ card.engTitle }}</div>

        <template v-for="(sec, si) in card.back.sections" :key="si">
          <div class="section-label">
            <span class="material-icons">{{ sec.icon }}</span> {{ sec.label }}
          </div>
          <div v-if="sec.content" class="section-content" v-html="nl2br(sec.content)"></div>
          <div v-if="sec.code" class="code-block" v-html="nl2br(sec.code)"></div>
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

        <div class="flip-hint-back">點擊翻回正面</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'

const props = defineProps({
  card: { type: Object, required: true }
})

const flipped = ref(false)
const flipperRef = ref(null)
const frontRef = ref(null)
const backRef = ref(null)

/** 將換行符轉為 <br>，並跳脫 HTML */
function nl2br(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
}

/** 同步容器高度，避免背面內容與導覽列重疊 */
function syncHeight() {
  if (!flipperRef.value) return
  const target = flipped.value ? backRef.value : frontRef.value
  if (target) {
    flipperRef.value.style.height = target.scrollHeight + 'px'
  }
}

onMounted(syncHeight)
watch(flipped, () => nextTick(syncHeight))
watch(() => props.card, () => {
  flipped.value = false
  nextTick(syncHeight)
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
  font-size: 0.9rem;
  color: var(--custard-brown-light);
  opacity: 0.7;
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
