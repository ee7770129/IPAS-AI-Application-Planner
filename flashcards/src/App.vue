<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：App.vue
  功能：學習卡片系統主佈局（組合所有元件）
  建立日期：2026-05-14
  版本：1.0.0
-->
<template>
  <div class="app-wrapper">
  <!-- 頂部標題 -->
  <header class="header">
    <h1>IPAS AI 應用規劃師 - 學習卡片</h1>
    <p>翻轉卡片，掌握知識要點</p>
    <button class="settings-btn" @click="showSettings = !showSettings" type="button" title="設定">
      <span class="material-icons">settings</span>
    </button>
    <Transition name="settings">
      <div v-if="showSettings" class="settings-panel">
        <span class="material-icons settings-icon">record_voice_over</span>
        <span class="settings-label">朗讀語音</span>
        <div class="voice-dropdown" ref="voiceDropdownRef">
          <button class="voice-trigger" @click="showVoiceMenu = !showVoiceMenu" type="button">
            <span class="voice-trigger-text">{{ voices[selectedVoiceIdx]?.name || '載入中...' }}</span>
            <span class="material-icons voice-arrow" :class="{ open: showVoiceMenu }">expand_more</span>
          </button>
          <Transition name="vdrop">
            <ul v-if="showVoiceMenu" class="voice-menu">
              <li
                v-for="(v, i) in voices"
                :key="i"
                class="voice-item"
                :class="{ active: i === selectedVoiceIdx }"
                @click="selectedVoiceIdx = i; showVoiceMenu = false"
              >
                <span class="voice-name">{{ v.name }}</span>
                <span class="voice-lang">{{ v.lang }}</span>
              </li>
            </ul>
          </Transition>
        </div>
        <button class="voice-test-btn" @click="testVoice" type="button">
          <span class="material-icons">play_arrow</span> 試聽
        </button>
      </div>
    </Transition>
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
import { ref, computed, watch, provide, onMounted, onBeforeUnmount } from 'vue'
import { DATA } from './data/cards.js'
import LevelTabs from './components/LevelTabs.vue'
import SubjectTabs from './components/SubjectTabs.vue'
import TopicSelect from './components/TopicSelect.vue'
import FlashCard from './components/FlashCard.vue'
import CardNav from './components/CardNav.vue'
import CardDrawer from './components/CardDrawer.vue'

/* 狀態 */
const level = ref('beginner')
const subjectIdx = ref(0)
const topicIdx = ref(0)
const cardIdx = ref(0)
const flashCardRef = ref(null)
const shuffledCards = ref([])
const isRestoring = ref(false)
const drawerOpen = ref(false)

/* localStorage 位置記憶 */
const STORAGE_KEY = 'ipas-flashcards-position'

/** 將目前位置存入 localStorage */
function savePosition() {
  if (isRestoring.value) return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      level: level.value,
      subjectIdx: subjectIdx.value,
      topicIdx: topicIdx.value,
      cardIdx: cardIdx.value
    }))
  } catch { /* localStorage 不可用時靜默忽略 */ }
}

/** 從 localStorage 還原位置（含邊界驗證） */
async function restorePosition() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const saved = JSON.parse(raw)

    /* 驗證級別 */
    if (!DATA[saved.level]) return
    isRestoring.value = true

    level.value = saved.level
    const lv = DATA[saved.level]

    /* 驗證科目索引 */
    const si = Number(saved.subjectIdx) || 0
    if (si < 0 || si >= lv.subjects.length) { isRestoring.value = false; return }
    subjectIdx.value = si

    /* 驗證主題索引（-1 代表全部隨機） */
    const subj = lv.subjects[si]
    const ti = Number(saved.topicIdx)
    if (ti < -1 || ti >= subj.topics.length) { isRestoring.value = false; return }
    topicIdx.value = ti

    /* 全部隨機模式需先洗牌，再還原卡片索引 */
    if (ti === -1) doShuffle()

    /* 驗證卡片索引 */
    const cards = ti === -1 ? shuffledCards.value : (subj.topics[ti]?.cards || [])
    const ci = Number(saved.cardIdx) || 0
    cardIdx.value = (ci >= 0 && ci < cards.length) ? ci : 0

    /* 等待 watcher 執行完畢後再關閉旗標，避免 watcher 將 cardIdx 重設為 0 */
    await nextTick()
    isRestoring.value = false
  } catch { isRestoring.value = false }
}

/* 語音設定 */
const showSettings = ref(false)
const showVoiceMenu = ref(false)
const voiceDropdownRef = ref(null)
const voices = ref([])
const selectedVoiceIdx = ref(0)

/** 載入可用語音清單（篩選英文語音） */
function loadVoices() {
  const all = window.speechSynthesis.getVoices()
  voices.value = all.filter(v => v.lang.startsWith('en'))
  if (voices.value.length && selectedVoiceIdx.value >= voices.value.length) {
    selectedVoiceIdx.value = 0
  }
}

/** 試聽選定語音 */
function testVoice() {
  if (!voices.value.length) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance('Hello, this is a test.')
  utterance.voice = voices.value[selectedVoiceIdx.value]
  utterance.lang = 'en-US'
  utterance.rate = 0.9
  window.speechSynthesis.speak(utterance)
}

/** 透過 provide 讓 FlashCard 取得選定的語音 */
provide('getSelectedVoice', () => voices.value[selectedVoiceIdx.value] || null)

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

/** 目前要顯示的卡片陣列（一般模式用 topic.cards，全部模式用 shuffledCards） */
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

/* 切換級別時重設所有索引 */
watch(level, () => {
  if (isRestoring.value) return
  subjectIdx.value = 0
  topicIdx.value = 0
  cardIdx.value = 0
  savePosition()
})

/* 切換科目時重設主題與卡片索引 */
watch(subjectIdx, () => {
  if (isRestoring.value) return
  topicIdx.value = 0
  cardIdx.value = 0
  savePosition()
})

/* 切換主題時：若切到「全部」則洗牌，否則重設卡片索引 */
watch(topicIdx, (val) => {
  if (isRestoring.value) return
  cardIdx.value = 0
  if (val === -1) doShuffle()
  savePosition()
})

/* 切換卡片時儲存位置 */
watch(cardIdx, () => {
  savePosition()
})

/* 卡片導覽 */
function goCard(idx) {
  if (idx < 0 || idx >= displayCards.value.length) return
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
  /* 還原上次閱讀位置 */
  restorePosition()
  /* 載入語音清單（部分瀏覽器需等 voiceschanged 事件） */
  loadVoices()
  window.speechSynthesis.onvoiceschanged = loadVoices
  /* 點擊外部關閉語音下拉 */
  document.addEventListener('click', (e) => {
    if (voiceDropdownRef.value && !voiceDropdownRef.value.contains(e.target)) {
      showVoiceMenu.value = false
    }
  })
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('touchstart', onTouchStart)
  document.removeEventListener('touchend', onTouchEnd)
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
  position: relative;
  background: linear-gradient(135deg, var(--header-from), var(--header-to));
  color: #fff;
  text-align: center;
  padding: 20px 16px 12px;
  box-shadow: 0 3px 12px var(--custard-shadow);
}

/* 設定按鈕 */
.settings-btn {
  position: absolute;
  top: 12px;
  right: 12px;
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
.settings-btn:hover {
  background: rgba(255, 255, 255, 0.35);
}
.settings-btn .material-icons {
  font-size: 20px;
}

/* 設定面板 */
.settings-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  flex-wrap: wrap;
}
.settings-label {
  font-size: 0.78rem;
  font-weight: 600;
}
.settings-icon {
  font-size: 16px;
}

/* 語音自訂下拉 */
.voice-dropdown {
  position: relative;
}
.voice-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 0.78rem;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
  max-width: 240px;
}
.voice-trigger:hover {
  background: rgba(255, 255, 255, 0.35);
}
.voice-trigger-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.voice-arrow {
  font-size: 16px;
  transition: transform 0.2s;
  flex-shrink: 0;
}
.voice-arrow.open {
  transform: rotate(180deg);
}
.voice-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 100%;
  width: max-content;
  max-width: 90vw;
  max-height: 240px;
  overflow-y: auto;
  background: #fff;
  border: 2px solid var(--custard-cream);
  border-radius: var(--radius);
  padding: 6px 0;
  margin: 0;
  list-style: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 200;
}
.voice-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  font-size: 0.82rem;
  color: var(--custard-brown);
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;
}
.voice-item:hover {
  background: var(--custard-light);
}
.voice-item.active {
  background: var(--custard-cream);
  font-weight: 700;
  color: var(--custard-deep);
}
.voice-name {
  font-weight: 500;
}
.voice-lang {
  font-size: 0.72rem;
  opacity: 0.6;
}

/* 語音下拉動畫 */
.vdrop-enter-active,
.vdrop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: top right;
}
.vdrop-enter-from,
.vdrop-leave-to {
  opacity: 0;
  transform: scaleY(0.9);
}
.vdrop-enter-to,
.vdrop-leave-from {
  opacity: 1;
  transform: scaleY(1);
}

.voice-test-btn {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 0.78rem;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
}
.voice-test-btn:hover {
  background: rgba(255, 255, 255, 0.35);
}
.voice-test-btn .material-icons {
  font-size: 16px;
}

/* 設定面板動畫 */
.settings-enter-active,
.settings-leave-active {
  transition: opacity 0.2s ease, max-height 0.2s ease;
}
.settings-enter-from,
.settings-leave-to {
  opacity: 0;
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
  .header { padding: 16px 12px 10px; }
  .header h1 { font-size: 1.1rem; }
  .card-area { padding: 12px 10px; min-height: 360px; }
  .keyboard-hint { display: none; }
}
@media (max-width: 380px) {
  .header h1 { font-size: 0.95rem; }
}
</style>
