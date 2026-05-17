<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：SettingsPanel.vue
  功能：語音設定面板（語速、中英文語音選擇、試聽）
  建立日期：2026-05-17
  版本：1.0.0
-->
<template>
  <div class="settings-panel">
    <!-- 語速控制 -->
    <div class="settings-row">
      <span class="material-icons settings-icon">speed</span>
      <span class="settings-label">語速</span>
      <input
        type="range"
        class="rate-slider"
        min="0.5"
        max="2.0"
        step="0.1"
        v-model.number="speechRate"
      />
      <span class="rate-value">{{ speechRate.toFixed(1) }}x</span>
    </div>

    <!-- 英文語音 -->
    <div class="settings-row">
      <span class="material-icons settings-icon">translate</span>
      <span class="settings-label">英文</span>
      <div class="voice-dropdown" ref="voiceDropdownRef">
        <button class="voice-trigger" ref="enTriggerRef" @click="toggleVoiceMenu('en')" type="button">
          <span class="voice-trigger-text">{{ selectedEnVoiceName }}</span>
          <span class="material-icons voice-arrow" :class="{ open: showVoiceMenu }">expand_more</span>
        </button>
        <Teleport to="body">
          <Transition name="vdrop">
            <ul v-if="showVoiceMenu" class="voice-menu" :style="menuStyle">
              <li
                v-for="v in EN_VOICES"
                :key="v.id"
                class="voice-item"
                :class="{ active: v.id === selectedEnVoiceId }"
                @click="selectedEnVoiceId = v.id; showVoiceMenu = false"
              >
                <span class="voice-name">{{ v.name }}</span>
                <span class="voice-lang">{{ v.lang }}</span>
              </li>
            </ul>
          </Transition>
        </Teleport>
      </div>
      <button class="voice-test-btn" @click="testVoice" type="button">
        <span class="material-icons">play_arrow</span>
      </button>
    </div>

    <!-- 中文語音 -->
    <div class="settings-row">
      <span class="material-icons settings-icon">record_voice_over</span>
      <span class="settings-label">中文</span>
      <div class="voice-dropdown" ref="zhVoiceDropdownRef">
        <button class="voice-trigger" ref="zhTriggerRef" @click="toggleVoiceMenu('zh')" type="button">
          <span class="voice-trigger-text">{{ selectedZhVoiceName }}</span>
          <span class="material-icons voice-arrow" :class="{ open: showZhVoiceMenu }">expand_more</span>
        </button>
        <Teleport to="body">
          <Transition name="vdrop">
            <ul v-if="showZhVoiceMenu" class="voice-menu" :style="menuStyle">
              <li
                v-for="v in ZH_VOICES"
                :key="v.id"
                class="voice-item"
                :class="{ active: v.id === selectedZhVoiceId }"
                @click="selectedZhVoiceId = v.id; showZhVoiceMenu = false"
              >
                <span class="voice-name">{{ v.name }}</span>
                <span class="voice-lang">{{ v.lang }}</span>
              </li>
            </ul>
          </Transition>
        </Teleport>
      </div>
      <button class="voice-test-btn" @click="testZhVoice" type="button">
        <span class="material-icons">play_arrow</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ZH_VOICES, EN_VOICES } from '../utils/edge-tts.js'

const props = defineProps({
  selectedZhVoiceId: { type: String, required: true },
  selectedEnVoiceId: { type: String, required: true },
  speechRate: { type: Number, required: true },
  selectedZhVoiceName: { type: String, required: true },
  selectedEnVoiceName: { type: String, required: true }
})

const emit = defineEmits([
  'update:selectedZhVoiceId',
  'update:selectedEnVoiceId',
  'update:speechRate',
  'testVoice',
  'testZhVoice'
])

/* 語音選單狀態 */
const showVoiceMenu = ref(false)
const showZhVoiceMenu = ref(false)
const voiceDropdownRef = ref(null)
const zhVoiceDropdownRef = ref(null)
const enTriggerRef = ref(null)
const zhTriggerRef = ref(null)
const menuStyle = ref({})

/** 開關語音選單，並計算固定定位的 top 值 */
function toggleVoiceMenu(type) {
  if (type === 'en') {
    showZhVoiceMenu.value = false
    showVoiceMenu.value = !showVoiceMenu.value
    if (showVoiceMenu.value && enTriggerRef.value) {
      const rect = enTriggerRef.value.getBoundingClientRect()
      menuStyle.value = { top: `${rect.bottom + 6}px` }
    }
  } else {
    showVoiceMenu.value = false
    showZhVoiceMenu.value = !showZhVoiceMenu.value
    if (showZhVoiceMenu.value && zhTriggerRef.value) {
      const rect = zhTriggerRef.value.getBoundingClientRect()
      menuStyle.value = { top: `${rect.bottom + 6}px` }
    }
  }
}

/* 使用 v-model 模式的 computed 寫法，讓 props 可寫 */
const selectedZhVoiceId = computed({
  get: () => props.selectedZhVoiceId,
  set: (val) => emit('update:selectedZhVoiceId', val)
})
const selectedEnVoiceId = computed({
  get: () => props.selectedEnVoiceId,
  set: (val) => emit('update:selectedEnVoiceId', val)
})
const speechRate = computed({
  get: () => props.speechRate,
  set: (val) => emit('update:speechRate', val)
})

function testVoice() { emit('testVoice') }
function testZhVoice() { emit('testZhVoice') }

/* 點擊外部關閉語音下拉 */
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (voiceDropdownRef.value && !voiceDropdownRef.value.contains(e.target)) {
      showVoiceMenu.value = false
    }
    if (zhVoiceDropdownRef.value && !zhVoiceDropdownRef.value.contains(e.target)) {
      showZhVoiceMenu.value = false
    }
  })
})
</script>

<style scoped>
/* 設定面板 */
.settings-panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
}
@media (min-width: 768px) {
  .settings-panel {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
.settings-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
}
.settings-label {
  font-size: 0.78rem;
  font-weight: 600;
  min-width: 28px;
}
.settings-icon {
  font-size: 16px;
}
.rate-slider {
  flex: 1;
  min-width: 80px;
  max-width: 160px;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.rate-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.rate-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.rate-value {
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 32px;
  text-align: center;
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
</style>

<!-- 語音選單（Teleport 到 body，需用全域樣式） -->
<style>
.voice-menu {
  position: fixed;
  left: 12px;
  right: 12px;
  max-height: 240px;
  overflow: hidden auto;
  background: #fff;
  border: 2px solid var(--custard-cream);
  border-radius: var(--radius);
  padding: 0;
  margin: 0;
  list-style: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 600;
  font-family: "Microsoft JhengHei", "Noto Sans TC", "PingFang TC", sans-serif;
}
.voice-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 0.82rem;
  color: var(--custard-brown);
  cursor: pointer;
  transition: background 0.15s;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
}
.voice-tag {
  flex-shrink: 0;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 8px;
  background: rgba(102, 187, 106, 0.2);
  color: #2E7D32;
}
.voice-lang {
  flex-shrink: 0;
  font-size: 0.72rem;
  opacity: 0.6;
}

/* 語音下拉動畫 */
.vdrop-enter-active,
.vdrop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: top center;
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
</style>
