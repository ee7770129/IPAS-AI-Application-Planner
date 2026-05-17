<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：App.vue
  功能：學習卡片系統主佈局（組合所有元件）
  建立日期：2026-05-14
  版本：2.0.0
-->
<template>
  <div class="app-wrapper">
  <!-- 頂部標題 -->
  <header class="header">
    <div class="header-top">
      <div class="header-content">
        <h1>IPAS AI 應用規劃師 - {{ mode === 'exam' ? '歷屆考題' : '學習卡片' }}</h1>
        <p>{{ mode === 'exam' ? '歷屆考題隨機練習' : '翻轉卡片，掌握知識要點' }}</p>
      </div>
      <div class="header-actions">
        <button class="header-icon-btn" @click="showSettings = !showSettings" type="button" title="設定">
          <span class="material-icons">settings</span>
        </button>
        <button
          v-if="showExamTab"
          class="header-icon-btn"
          @click="mode = mode === 'flashcard' ? 'exam' : 'flashcard'"
          type="button"
          :title="mode === 'flashcard' ? '切換至歷屆考題' : '切換至學習卡片'"
        >
          <span class="material-icons">{{ mode === 'flashcard' ? 'quiz' : 'style' }}</span>
        </button>
      </div>
    </div>
    <Transition name="settings">
      <SettingsPanel
        v-if="showSettings"
        v-model:selectedZhVoiceId="selectedZhVoiceId"
        v-model:selectedEnVoiceId="selectedEnVoiceId"
        v-model:speechRate="speechRate"
        :selectedZhVoiceName="selectedZhVoiceName"
        :selectedEnVoiceName="selectedEnVoiceName"
        @testVoice="testVoice"
        @testZhVoice="testZhVoice"
      />
    </Transition>
  </header>

  <!-- 級別頁籤 -->
  <LevelTabs v-model="level" :levels="DATA" />

  <!-- === 學習卡片模式 === -->
  <template v-if="mode === 'flashcard'">

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
    @reshuffle="doShuffle"
  />

  <!-- 卡片區域 -->
  <div class="card-area">
    <template v-if="displayCards.length">
      <div v-if="topicIdx === -1" class="topic-badge">
        <span class="material-icons">bookmark</span>
        {{ displayCards[cardIdx]._topicLabel }}
      </div>
      <div class="card-counter">
        <button class="drawer-btn" @click="drawerOpen = true" type="button" title="卡片目錄">
          <span class="material-icons">menu</span>
        </button>
        卡片 {{ cardIdx + 1 }} / {{ displayCards.length }}
      </div>
      <FlashCard ref="flashCardRef" :card="displayCards[cardIdx]" />
      <CardNav
        :current="cardIdx"
        :total="displayCards.length"
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

  <!-- 卡片目錄抽屜 -->
  <CardDrawer
    :open="drawerOpen"
    :cards="displayCards"
    :current="cardIdx"
    :topicLabel="drawerLabel"
    @close="drawerOpen = false"
    @go="goCard"
  />

  </template>

  <!-- === 歷屆考題模式 === -->
  <template v-if="mode === 'exam'">
    <ExamMode :subjects="examSubjects" />
  </template>

  <!-- 撐開剩餘空間，把 footer 推到底 -->
  <div class="spacer"></div>

  <!-- 頁尾 -->
  <footer class="site-footer">
    <div class="footer-links">
      <a href="https://ipd.nat.gov.tw/ipas/certification/AIAP/learning-resources" target="_blank" rel="noopener" class="footer-link">
        <span class="material-icons footer-icon">menu_book</span>
        iPAS AI 應用規劃師 - 學習資源
      </a>
    </div>
    <div class="footer-info">
      <span class="material-icons footer-icon">copyright</span>
      <span>2026 emoyilab.com</span>
      <span class="footer-sep"></span>
      <span class="material-icons footer-icon">mail</span>
      <span>emoyilab@gmail.com</span>
    </div>
  </footer>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { DATA } from './data/cards.js'
import { EXAM_DATA, hasExams } from './data/exams/index.js'
import { useVoiceSettings } from './composables/useVoiceSettings.js'
import { usePosition } from './composables/usePosition.js'
import { useInputEvents } from './composables/useInputEvents.js'
import LevelTabs from './components/LevelTabs.vue'
import SubjectTabs from './components/SubjectTabs.vue'
import TopicSelect from './components/TopicSelect.vue'
import FlashCard from './components/FlashCard.vue'
import CardNav from './components/CardNav.vue'
import CardDrawer from './components/CardDrawer.vue'
import ExamMode from './components/ExamMode.vue'
import SettingsPanel from './components/SettingsPanel.vue'

/* 語音設定（含 provide 給子元件） */
const {
  selectedZhVoiceId, selectedEnVoiceId, speechRate,
  selectedZhVoiceName, selectedEnVoiceName,
  testVoice, testZhVoice
} = useVoiceSettings()

/* 位置記憶 */
const { isRestoring, savePosition, restorePosition } = usePosition()

/* 狀態 */
const level = ref('beginner')
const mode = ref('flashcard')
const subjectIdx = ref(0)
const topicIdx = ref(0)
const cardIdx = ref(0)
const flashCardRef = ref(null)
const shuffledCards = ref([])
const drawerOpen = ref(false)
const showSettings = ref(false)

/** 當前級別是否有考題可用 */
const showExamTab = computed(() => hasExams(level.value))

/** 當前級別的考題科目資料 */
const examSubjects = computed(() => {
  const data = EXAM_DATA[level.value]
  if (!data) return []
  return data.subjects
})

/* 計算屬性 */
const currentLevel = computed(() => DATA[level.value])
const currentSubject = computed(() => currentLevel.value.subjects[subjectIdx.value] || null)
const currentTopic = computed(() => {
  if (!currentSubject.value) return null
  return currentSubject.value.topics[topicIdx.value] || null
})

/** 目前主題名稱（用於抽屜標題） */
const drawerLabel = computed(() => {
  if (topicIdx.value === -1) return '全部（隨機）'
  return currentTopic.value?.label || ''
})

/** 目前要顯示的卡片陣列 */
const displayCards = computed(() => {
  if (topicIdx.value === -1) return shuffledCards.value
  if (currentTopic.value) return currentTopic.value.cards
  return []
})

/** Fisher-Yates 洗牌 */
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** 合併所有主題卡片並隨機打亂 */
function doShuffle() {
  if (!currentSubject.value) return
  const all = []
  for (const topic of currentSubject.value.topics) {
    for (const card of topic.cards) {
      all.push({ ...card, _topicLabel: topic.label })
    }
  }
  shuffledCards.value = shuffle(all)
  cardIdx.value = 0
}

/* 卡片導覽 */
function goCard(idx) {
  if (idx < 0 || idx >= displayCards.value.length) return
  cardIdx.value = idx
}

/** 取得目前位置物件（供 savePosition 使用） */
function getCurrentPosition() {
  return {
    level: level.value,
    subjectIdx: subjectIdx.value,
    topicIdx: topicIdx.value,
    cardIdx: cardIdx.value
  }
}

/* 切換級別時重設所有索引 */
watch(level, () => {
  if (isRestoring.value) return
  subjectIdx.value = 0
  topicIdx.value = 0
  cardIdx.value = 0
  if (!hasExams(level.value)) mode.value = 'flashcard'
  savePosition(getCurrentPosition())
})

/* 切換科目時重設主題與卡片索引 */
watch(subjectIdx, () => {
  if (isRestoring.value) return
  topicIdx.value = 0
  cardIdx.value = 0
  savePosition(getCurrentPosition())
})

/* 切換主題時：若切到「全部」則洗牌，否則重設卡片索引 */
watch(topicIdx, (val) => {
  if (isRestoring.value) return
  cardIdx.value = 0
  if (val === -1) doShuffle()
  savePosition(getCurrentPosition())
})

/* 切換卡片時儲存位置 */
watch(cardIdx, () => {
  savePosition(getCurrentPosition())
})

/* 鍵盤與觸控事件 */
useInputEvents({ flashCardRef, cardIdx, goCard })

/* 掛載時還原位置 */
onMounted(() => {
  restorePosition(
    { level, subjectIdx, topicIdx, cardIdx },
    doShuffle,
    () => shuffledCards.value
  )
})
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.spacer {
  flex: 1;
}

.header {
  background: linear-gradient(135deg, var(--header-from), var(--header-to));
  color: #fff;
  padding: 16px 12px 12px;
  box-shadow: 0 3px 12px var(--custard-shadow);
}
.header-top {
  display: flex;
  align-items: center;
}
.header-content {
  flex: 1;
  text-align: center;
}

/* 頂部右側按鈕群組 */
.header-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.header-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}
.header-icon-btn:hover {
  background: rgba(255, 255, 255, 0.35);
}
.header-icon-btn .material-icons {
  font-size: 20px;
}

/* 設定面板動畫 */
.settings-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease, max-height 0.35s ease;
  overflow: hidden;
}
.settings-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease, max-height 0.2s ease;
  overflow: hidden;
}
.settings-enter-from {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}
.settings-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}
.settings-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}
.settings-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
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
.topic-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 14px;
  margin-bottom: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--custard-deep);
  background: var(--custard-light);
  border: 1px solid var(--custard-cream);
  border-radius: 20px;
}
.topic-badge .material-icons {
  font-size: 16px;
}
.card-counter {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--custard-brown-light);
  margin-bottom: 10px;
  font-weight: 500;
}
.drawer-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1.5px solid var(--custard-cream);
  border-radius: 8px;
  background: var(--custard-light);
  color: var(--custard-deep);
  cursor: pointer;
  transition: all 0.2s;
}
.drawer-btn:hover {
  background: var(--custard-cream);
}
.drawer-btn .material-icons {
  font-size: 18px;
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

.site-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-top: 1px solid var(--custard-cream);
  font-size: 0.75rem;
  color: var(--custard-brown-light);
}
.footer-links {
  display: flex;
  gap: 12px;
}
.footer-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--custard-deep);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  transition: opacity 0.2s;
}
.footer-link:hover {
  opacity: 0.7;
}
.footer-info {
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.55;
  flex-wrap: wrap;
  justify-content: center;
}
.footer-icon {
  font-size: 15px;
}
.footer-sep {
  width: 1px;
  height: 14px;
  background: var(--custard-brown-light);
  opacity: 0.4;
  margin: 0 4px;
}

@media (max-width: 600px) {
  .header { padding: 12px 8px 10px; }
  .header h1 { font-size: 1.1rem; }
  .card-area { padding: 12px 10px; min-height: 360px; }
  .keyboard-hint { display: none; }
}
@media (max-width: 380px) {
  .header h1 { font-size: 0.95rem; }
}
</style>
