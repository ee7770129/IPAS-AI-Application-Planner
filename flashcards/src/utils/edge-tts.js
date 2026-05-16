/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：edge-tts.js
 * 功能：Edge TTS 前端封裝（透過 /api/tts 後端代理合成語音）
 * 建立日期：2026-05-16
 * 版本：2.2.0
 */

/** 預設中文語音（曉曉 - 自然語音） */
const DEFAULT_ZH_VOICE = 'zh-CN-XiaoxiaoNeural'

/** 預設英文語音 */
const DEFAULT_EN_VOICE = 'en-US-EmmaMultilingualNeural'

/**
 * 將 0.5~2.0 的語速數值轉為 Edge TTS 格式（"+50%"、"-25%" 等）
 */
function formatRate(rate) {
  const pct = Math.round((rate - 1) * 100)
  return pct >= 0 ? `+${pct}%` : `${pct}%`
}

/**
 * 共用 AudioContext（iOS Safari 需要在使用者互動時 resume）
 */
let _ctx = null
function getAudioContext() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)()
  return _ctx
}

/**
 * 透過後端 API 合成語音並播放
 *
 * iOS Safari 限制：AudioContext 必須在使用者互動時 resume。
 * 解法：每次呼叫時先 resume AudioContext（同步觸發於 click 事件鏈），
 * fetch 完成後用 decodeAudioData + AudioBufferSourceNode 播放。
 *
 * @param {string} text - 要朗讀的文字
 * @param {object} options
 * @param {string} [options.voice] - 語音名稱
 * @param {number} [options.rate=1.0] - 語速倍率
 * @param {AbortSignal} [options.signal] - 取消信號
 * @returns {Promise<{source: AudioBufferSourceNode, ctx: AudioContext}>}
 */
export async function edgeSpeak(text, options = {}) {
  const voice = options.voice || DEFAULT_ZH_VOICE
  const rate = formatRate(options.rate || 1.0)

  /* 在使用者互動的同步呼叫鏈中 resume AudioContext（iOS 必要） */
  const ctx = getAudioContext()
  if (ctx.state === 'suspended') ctx.resume()

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

  const arrayBuffer = await res.arrayBuffer()
  const audioBuffer = await ctx.decodeAudioData(arrayBuffer)

  const source = ctx.createBufferSource()
  source.buffer = audioBuffer
  source.connect(ctx.destination)
  source.start(0)

  /* 支援取消 */
  if (options.signal) {
    options.signal.addEventListener('abort', () => {
      try { source.stop() } catch {}
    }, { once: true })
  }

  return { source, ctx }
}

/**
 * edgeSpeak 的包裝，回傳 Promise 在播放結束時 resolve
 */
export function edgeSpeakAsync(text, options = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const { source } = await edgeSpeak(text, options)
      source.onended = () => resolve()
    } catch (err) {
      reject(err)
    }
  })
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
