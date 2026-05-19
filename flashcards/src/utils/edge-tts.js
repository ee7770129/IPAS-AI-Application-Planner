/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：edge-tts.js
 * 功能：Edge TTS 前端封裝（透過 /api/tts 後端代理合成語音）
 * 建立日期：2026-05-16
 * 版本：2.0.0
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
 * 只合成不播放，回傳 Blob URL
 */
export async function edgeSynthesize(text, options = {}) {
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
  return URL.createObjectURL(blob)
}

/**
 * 合成並播放單段文字
 */
export async function edgeSpeak(text, options = {}) {
  const url = await edgeSynthesize(text, options)
  const audio = new Audio(url)

  /* 讓外部可直接追踪此 Audio 物件 */
  if (options.onAudioCreated) options.onAudioCreated(audio)

  audio.addEventListener('ended', () => URL.revokeObjectURL(url), { once: true })
  audio.addEventListener('error', () => URL.revokeObjectURL(url), { once: true })

  if (options.signal) {
    options.signal.addEventListener('abort', () => {
      audio.pause()
      audio.src = ''
      URL.revokeObjectURL(url)
    }, { once: true })
  }

  await audio.play()
  return audio
}

/**
 * 並行合成多段文字，依序播放
 * @param {Array<string|{text:string, voice?:string}>} chunks - 文字段落（字串或帶語音的物件）
 * @param {object} options - voice, rate, signal, onStart
 * @returns {Promise<void>}
 */
export async function edgeSpeakChunks(chunks, options = {}) {
  if (!chunks.length) return

  /* 並行送出所有合成請求（每段可帶自己的 voice） */
  const urlPromises = chunks.map(chunk => {
    const text = typeof chunk === 'string' ? chunk : chunk.text
    const voice = (typeof chunk === 'object' && chunk.voice) ? chunk.voice : options.voice
    return edgeSynthesize(text, { ...options, voice })
  })
  const urls = await Promise.all(urlPromises)

  if (options.onStart) options.onStart()

  /* 依序播放 */
  for (const url of urls) {
    if (options.signal?.aborted) break
    await new Promise((resolve, reject) => {
      const audio = new Audio(url)
      audio.addEventListener('ended', () => { URL.revokeObjectURL(url); resolve() }, { once: true })
      audio.addEventListener('error', () => { URL.revokeObjectURL(url); resolve() }, { once: true })
      if (options.onAudioCreated) options.onAudioCreated(audio)
      if (options.signal) {
        options.signal.addEventListener('abort', () => {
          audio.pause()
          audio.src = ''
          URL.revokeObjectURL(url)
          resolve()
        }, { once: true })
      }
      audio.play().catch(reject)
    })
  }
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
