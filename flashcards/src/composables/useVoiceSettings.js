/*
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：useVoiceSettings.js
  功能：Edge TTS 語音設定 composable（語音選擇、語速、localStorage 持久化）
  建立日期：2026-05-17
  版本：1.0.0
*/

import { ref, computed, watch, provide } from 'vue'
import { ZH_VOICES, EN_VOICES, DEFAULT_ZH_VOICE, DEFAULT_EN_VOICE, edgeSpeak } from '../utils/edge-tts.js'

const EDGE_ZH_KEY = 'ipas-edge-zh-voice'
const EDGE_EN_KEY = 'ipas-edge-en-voice'
const RATE_KEY = 'ipas-flashcards-rate'

/**
 * Edge TTS 語音設定 composable
 * 管理中英文語音選擇、語速控制，並透過 provide 提供給子元件
 */
export function useVoiceSettings() {
  const selectedZhVoiceId = ref(DEFAULT_ZH_VOICE)
  const selectedEnVoiceId = ref(DEFAULT_EN_VOICE)
  const speechRate = ref(1.0)

  /* 從 localStorage 還原設定 */
  try {
    const savedRate = localStorage.getItem(RATE_KEY)
    if (savedRate) speechRate.value = Math.max(0.5, Math.min(2.0, Number(savedRate)))
    const savedZh = localStorage.getItem(EDGE_ZH_KEY)
    if (savedZh && ZH_VOICES.find(v => v.id === savedZh)) selectedZhVoiceId.value = savedZh
    const savedEn = localStorage.getItem(EDGE_EN_KEY)
    if (savedEn && EN_VOICES.find(v => v.id === savedEn)) selectedEnVoiceId.value = savedEn
  } catch { /* localStorage 不可用時靜默忽略 */ }

  /* 設定變更時存入 localStorage */
  watch(selectedZhVoiceId, (id) => {
    try { localStorage.setItem(EDGE_ZH_KEY, id) } catch {}
  })
  watch(selectedEnVoiceId, (id) => {
    try { localStorage.setItem(EDGE_EN_KEY, id) } catch {}
  })
  watch(speechRate, (rate) => {
    try { localStorage.setItem(RATE_KEY, String(rate)) } catch {}
  })

  /** 取得目前選定的語音名稱（用於顯示） */
  const selectedZhVoiceName = computed(() => ZH_VOICES.find(v => v.id === selectedZhVoiceId.value)?.name || '曉曉')
  const selectedEnVoiceName = computed(() => EN_VOICES.find(v => v.id === selectedEnVoiceId.value)?.name || 'Emma')

  /** 試聽英文語音 */
  function testVoice() {
    edgeSpeak('Hello, this is a test.', { voice: selectedEnVoiceId.value, rate: speechRate.value })
  }

  /** 試聽中文語音 */
  function testZhVoice() {
    edgeSpeak('這是語音測試。', { voice: selectedZhVoiceId.value, rate: speechRate.value })
  }

  /** 透過 provide 讓 FlashCard 取得 Edge TTS 語音設定 */
  provide('getEdgeZhVoice', () => selectedZhVoiceId.value)
  provide('getEdgeEnVoice', () => selectedEnVoiceId.value)
  provide('getSpeechRate', () => speechRate.value)

  return {
    selectedZhVoiceId,
    selectedEnVoiceId,
    speechRate,
    selectedZhVoiceName,
    selectedEnVoiceName,
    testVoice,
    testZhVoice
  }
}
