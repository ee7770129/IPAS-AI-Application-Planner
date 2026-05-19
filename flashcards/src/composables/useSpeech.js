/*
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：useSpeech.js
  功能：Edge TTS 朗讀邏輯 composable（英文朗讀、背面解釋朗讀）
  建立日期：2026-05-17
  版本：1.0.0
*/

import { ref, inject } from 'vue'
import { edgeSpeak, edgeSynthesize, playBlobUrls } from '../utils/edge-tts.js'

/**
 * Edge TTS 朗讀邏輯 composable
 * 處理英文標題朗讀與卡片背面解釋的並行合成依序播放
 * @param {Function} getCard - 取得目前卡片物件的函式
 */
export function useSpeech(getCard) {
  const isSpeaking = ref(false)
  const isReadingZh = ref(false)
  const isLoadingEn = ref(false)
  const isLoadingZh = ref(false)

  /** 從 App.vue 取得語音設定 */
  const getEdgeZhVoice = inject('getEdgeZhVoice', () => 'zh-CN-XiaoxiaoNeural')
  const getEdgeEnVoice = inject('getEdgeEnVoice', () => 'en-US-EmmaMultilingualNeural')
  const getSpeechRate = inject('getSpeechRate', () => 1.0)

  /** 目前播放中的取消控制器 */
  let currentAbort = null
  /** 目前播放中的 Audio 物件（直接追踪，確保能立刻停止） */
  let currentAudio = null
  /** 背面朗讀快取（同一張卡再點直接播，不重新合成） */
  let cachedUrls = null
  let cachedCardRef = null

  /** 釋放快取的 Blob URL */
  function clearCache() {
    if (cachedUrls) {
      cachedUrls.forEach(url => URL.revokeObjectURL(url))
      cachedUrls = null
    }
    cachedCardRef = null
  }

  /** 停止所有朗讀，立刻清空未播完的音頻 */
  function stopAll() {
    if (currentAudio) {
      currentAudio.pause()
      currentAudio.src = ''
      currentAudio = null
    }
    if (currentAbort) { currentAbort.abort(); currentAbort = null }
    isSpeaking.value = false
    isReadingZh.value = false
    isLoadingEn.value = false
    isLoadingZh.value = false
  }

  /** 朗讀英文標題（Edge TTS） */
  async function speak(text) {
    if (!text) return
    stopAll()
    isLoadingEn.value = true
    isSpeaking.value = true
    const abort = new AbortController()
    currentAbort = abort
    try {
      const audio = await edgeSpeak(text, {
        voice: getEdgeEnVoice(),
        rate: getSpeechRate(),
        signal: abort.signal,
        onAudioCreated: (a) => { currentAudio = a }
      })
      isLoadingEn.value = false
      audio.addEventListener('ended', () => { isSpeaking.value = false }, { once: true })
    } catch {
      if (!abort.signal.aborted) { isLoadingEn.value = false; isSpeaking.value = false }
    }
  }

  /** 收集卡片背面文字，按段拆分，每段帶語音設定 */
  function collectBackChunks() {
    const card = getCard()
    const zhVoice = getEdgeZhVoice()
    const enVoice = getEdgeEnVoice()
    const chunks = []

    /* 先念標題（中文） */
    if (card.title) {
      chunks.push({ text: card.title, voice: zhVoice })
    }
    /* 再念英文名稱（英文語音） */
    if (card.engTitle) {
      chunks.push({ text: card.engTitle, voice: enVoice })
    }
    /* 再念各 section */
    if (card?.back?.sections) {
      for (const sec of card.back.sections) {
        const parts = []
        if (sec.label) parts.push(sec.label)
        if (sec.content) parts.push(sec.content)
        if (sec.code) parts.push(sec.code)
        if (sec.tags) {
          for (const tag of sec.tags) parts.push(tag.text)
        }
        if (parts.length) chunks.push({ text: parts.join('。'), voice: zhVoice })
      }
    }
    return chunks
  }

  /** 朗讀卡片背面解釋（有快取直接播，沒有才合成） */
  async function readExplanation() {
    if (isReadingZh.value || isLoadingZh.value) { stopAll(); return }
    stopAll()

    const card = getCard()
    const chunks = collectBackChunks()
    if (!chunks.length) return

    isReadingZh.value = true
    const abort = new AbortController()
    currentAbort = abort

    try {
      let urls
      if (cachedUrls && cachedCardRef === card) {
        /* 快取命中，直接播放 */
        urls = cachedUrls
      } else {
        /* 首次合成：並行送出所有段落，完成後快取 */
        isLoadingZh.value = true
        clearCache()
        const rate = getSpeechRate()
        urls = await Promise.all(
          chunks.map(chunk => edgeSynthesize(
            typeof chunk === 'string' ? chunk : chunk.text,
            {
              voice: (typeof chunk === 'object' && chunk.voice) ? chunk.voice : undefined,
              rate,
              signal: abort.signal
            }
          ))
        )
        isLoadingZh.value = false
        cachedUrls = urls
        cachedCardRef = card
      }

      /* 依序播放（不釋放 URL，保留快取） */
      await playBlobUrls(urls, {
        signal: abort.signal,
        onAudioCreated: (a) => { currentAudio = a }
      })
      isReadingZh.value = false
    } catch {
      if (!abort.signal.aborted) { isLoadingZh.value = false; isReadingZh.value = false }
    }
  }

  return {
    isSpeaking,
    isReadingZh,
    isLoadingEn,
    isLoadingZh,
    stopAll,
    clearCache,
    speak,
    readExplanation
  }
}
