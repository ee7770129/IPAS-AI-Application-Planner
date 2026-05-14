<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：App.vue
  功能：學習卡片系統主佈局（組合所有元件）
  建立日期：2026-05-14
  版本：1.0.0
-->
<template>
  <!-- 頂部標題 -->
  <header class="header">
    <h1>IPAS AI 應用規劃師 - 學習卡片</h1>
    <p>翻轉卡片，掌握知識要點</p>
  </header>

  <!-- 級別頁籤 -->
  <LevelTabs v-model="level" :levels="DATA" />

  <!-- 科目頁籤 -->
  <SubjectTabs
    v-if="currentLevel.subjects.length"
    v-model="subjectIdx"
    :subjects="currentLevel.subjects"
  />

  <!-- 主題選擇 -->
  <TopicSelect
    v-if="currentSubject && currentSubject.topics.length"
    v-model="topicIdx"
    :topics="currentSubject.topics"
  />

  <!-- 卡片區域 -->
  <div class="card-area">
    <template v-if="currentTopic && currentTopic.cards.length">
      <div class="card-counter">卡片 {{ cardIdx + 1 }} / {{ currentTopic.cards.length }}</div>
      <FlashCard ref="flashCardRef" :card="currentTopic.cards[cardIdx]" />
      <CardNav
        :current="cardIdx"
        :total="currentTopic.cards.length"
        @go="goCard"
      />
    </template>
    <div v-else class="placeholder">
      <span class="material-icons">construction</span>
      <p>此科目內容建置中</p>
    </div>
  </div>

  <!-- 鍵盤提示（手機版隱藏）-->
  <div class="keyboard-hint">
    鍵盤操作：空白鍵 翻轉 / 左右方向鍵 切換卡片
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { DATA } from './data/cards.js'
import LevelTabs from './components/LevelTabs.vue'
import SubjectTabs from './components/SubjectTabs.vue'
import TopicSelect from './components/TopicSelect.vue'
import FlashCard from './components/FlashCard.vue'
import CardNav from './components/CardNav.vue'

/* 狀態 */
const level = ref('beginner')
const subjectIdx = ref(0)
const topicIdx = ref(0)
const cardIdx = ref(0)
const flashCardRef = ref(null)

/* 計算屬性 */
const currentLevel = computed(() => DATA[level.value])
const currentSubject = computed(() => currentLevel.value.subjects[subjectIdx.value] || null)
const currentTopic = computed(() => {
  if (!currentSubject.value) return null
  return currentSubject.value.topics[topicIdx.value] || null
})

/* 切換級別時重設所有索引 */
watch(level, () => {
  subjectIdx.value = 0
  topicIdx.value = 0
  cardIdx.value = 0
})

/* 切換科目時重設主題與卡片索引 */
watch(subjectIdx, () => {
  topicIdx.value = 0
  cardIdx.value = 0
})

/* 切換主題時重設卡片索引 */
watch(topicIdx, () => {
  cardIdx.value = 0
})

/* 卡片導覽 */
function goCard(idx) {
  if (!currentTopic.value) return
  if (idx < 0 || idx >= currentTopic.value.cards.length) return
  cardIdx.value = idx
}

/* 鍵盤操作 */
function onKeydown(e) {
  if (e.key === ' ' || e.key === 'Spacebar') {
    e.preventDefault()
    if (flashCardRef.value) flashCardRef.value.toggle()
  } else if (e.key === 'ArrowLeft') {
    goCard(cardIdx.value - 1)
  } else if (e.key === 'ArrowRight') {
    goCard(cardIdx.value + 1)
  }
}

/* 觸控滑動 */
let touchStartX = 0
let touchStartY = 0

function onTouchStart(e) {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}

function onTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - touchStartX
  const dy = e.changedTouches[0].clientY - touchStartY
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    goCard(cardIdx.value + (dx < 0 ? 1 : -1))
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('touchstart', onTouchStart, { passive: true })
  document.addEventListener('touchend', onTouchEnd, { passive: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('touchstart', onTouchStart)
  document.removeEventListener('touchend', onTouchEnd)
})
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, var(--header-from), var(--header-to));
  color: #fff;
  text-align: center;
  padding: 20px 16px 12px;
  box-shadow: 0 3px 12px var(--custard-shadow);
}
.header h1 {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
}
.header p {
  font-size: 0.8rem;
  opacity: 0.85;
  margin-top: 4px;
}

.card-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-height: 420px;
}
.card-counter {
  font-size: 0.85rem;
  color: var(--custard-brown-light);
  margin-bottom: 10px;
  font-weight: 500;
}
.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  color: var(--custard-brown-light);
  opacity: 0.5;
  text-align: center;
  padding: 40px;
}
.placeholder .material-icons {
  font-size: 48px;
  margin-bottom: 12px;
}
.keyboard-hint {
  text-align: center;
  padding: 8px;
  font-size: 0.72rem;
  color: var(--custard-brown-light);
  opacity: 0.45;
}

@media (max-width: 600px) {
  .header { padding: 16px 12px 10px; }
  .header h1 { font-size: 1.1rem; }
  .card-area { padding: 12px 10px; min-height: 360px; }
  .keyboard-hint { display: none; }
}
@media (max-width: 380px) {
  .header h1 { font-size: 0.95rem; }
}
</style>
