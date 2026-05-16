/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：api/tts.js
 * 功能：Vercel Serverless Function - Edge TTS 語音合成代理
 * 建立日期：2026-05-16
 * 版本：1.0.0
 *
 * POST /api/tts
 * Body: { text: string, voice?: string, rate?: string }
 * Response: audio/mpeg
 */

import { EdgeTTS } from 'edge-tts-universal'

/** 文字長度上限（防止濫用） */
const MAX_TEXT_LENGTH = 5000

export default async function handler(req, res) {
  /* 只允許 POST */
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { text, voice = 'zh-CN-XiaoxiaoNeural', rate = '+0%' } = req.body || {}

  /* 驗證輸入 */
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'text is required' })
  }
  if (text.length > MAX_TEXT_LENGTH) {
    return res.status(400).json({ error: `text exceeds ${MAX_TEXT_LENGTH} characters` })
  }

  try {
    const tts = new EdgeTTS(text, voice, { rate })
    const result = await tts.synthesize()
    const buffer = Buffer.from(await result.audio.arrayBuffer())

    res.setHeader('Content-Type', 'audio/mpeg')
    res.setHeader('Cache-Control', 'public, max-age=86400')
    return res.send(buffer)
  } catch (err) {
    console.error('Edge TTS error:', err)
    return res.status(500).json({ error: 'TTS synthesis failed' })
  }
}
