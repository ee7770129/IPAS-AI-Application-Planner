/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：edge-tts.js
 * 功能：Edge TTS 前端封裝（透過 /api/tts 後端代理合成語音）
 * 建立日期：2026-05-16
 * 版本：2.3.0
 */

/** 預設中文語音（曉曉 - 自然語音） */
const DEFAULT_ZH_VOICE = 'zh-CN-XiaoxiaoNeural'

/** 預設英文語音 */
const DEFAULT_EN_VOICE = 'en-US-EmmaMultilingualNeural'

function formatRate(rate) {
  const pct = Math.round((rate - 1) * 100)
  return pct >= 0 ? `+${pct}%` : `${pct}%`
}

/**
 * 全域共用 Audio 元素（避免 iOS 每次建立新 Audio 被擋）
 * iOS Safari 只允許使用者互動時啟動的 Audio 元素播放
 * 重複使用同一個元素，只換 src 即可
 */
let _audio = null
function getAudio() {
  if (!_audio) {
    _audio = new Audio()
    _audio.setAttribute('playsinline', '')
  }
  return _audio
}

/**
 * 在第一次使用者互動時解鎖 Audio（iOS Safari 必要）
 * 應在 App.vue onMounted 時呼叫
 */
export function unlockAudio() {
  const handler = () => {
    const audio = getAudio()
    /* 播放極短的靜音來解鎖 */
    audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABhgC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAYYoRwMHAAAAAAD/+1DEAAAH0ANX9AAAIgoAa/8wAABMEAABMEADAoKAAHwfB8HygIAgCAI+D5QEP8uf/BDv/ygIf//+XB8HwfKAh///5cHwfB8oCH///lwfB8HygIAgCAIAAAAExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tQxBEAAADSAAAAAAAAANIAAAAATEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=='
    audio.play().catch(() => {})
    document.removeEventListener('touchstart', handler)
    document.removeEventListener('click', handler)
  }
  document.addEventListener('touchstart', handler, { once: true })
  document.addEventListener('click', handler, { once: true })
}

/**
 * 透過後端 API 合成語音並播放
 */
export async function edgeSpeak(text, options = {}) {
  const voice = options.voice || DEFAULT_ZH_VOICE
  const rate = formatRate(options.rate || 1.0)

  const res = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, voice, rate }),
    signal: options.signal
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }))
    throw new Error(err.error || `TTS failed: ${res.status}`)
  }

  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  const audio = getAudio()

  /* 先停止之前的播放 */
  audio.pause()
  if (audio._prevUrl) URL.revokeObjectURL(audio._prevUrl)
  audio._prevUrl = url

  audio.src = url
  audio.load()

  /* 支援取消 */
  if (options.signal) {
    options.signal.addEventListener('abort', () => {
      audio.pause()
      audio.currentTime = 0
    }, { once: true })
  }

  await audio.play()
  return audio
}

/** Edge TTS 可用的中文語音清單 */
export const ZH_VOICES = [
  { id: 'zh-CN-XiaoxiaoNeural', name: '曉曉（女，自然）', lang: 'zh-CN' },
  { id: 'zh-CN-YunxiNeural', name: '雲希（男，自然）', lang: 'zh-CN' },
  { id: 'zh-CN-YunjianNeural', name: '雲健（男，新聞）', lang: 'zh-CN' },
  { id: 'zh-TW-HsiaoChenNeural', name: '曉臻（女，台灣）', lang: 'zh-TW' },
  { id: 'zh-TW-YunJheNeural', name: '雲哲（男，台灣）', lang: 'zh-TW' },
  { id: 'zh-HK-HiuGaaiNeural', name: '曉佳（女，香港）', lang: 'zh-HK' }
]

export const EN_VOICES = [
  { id: 'en-US-EmmaMultilingualNeural', name: 'Emma (Multilingual)', lang: 'en-US' },
  { id: 'en-US-AndrewMultilingualNeural', name: 'Andrew (Multilingual)', lang: 'en-US' },
  { id: 'en-US-AriaNeural', name: 'Aria (Female)', lang: 'en-US' },
  { id: 'en-US-GuyNeural', name: 'Guy (Male)', lang: 'en-US' }
]

export { DEFAULT_ZH_VOICE, DEFAULT_EN_VOICE }
