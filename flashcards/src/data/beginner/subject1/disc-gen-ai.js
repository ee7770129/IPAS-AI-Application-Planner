/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：disc-gen-ai.js
 * 功能：鑑別式AI與生成式AI - 卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'disc-gen-ai',
  label: '鑑別式AI與生成式AI',
  cards: [
    { number: 1, title: '鑑別式AI', engTitle: 'Discriminative AI', back: { sections: [{ label: '是什麼', icon: 'search', content: '專門做「判斷、分類、辨別」的 AI。給它一筆資料，它告訴你這是什麼類別、有沒有問題。' }, { label: '做什麼', icon: 'checklist', code: '輸入 → 判斷結果\n\n垃圾郵件偵測：這封信 → 垃圾/正常\n影像辨識：這張圖 → 貓/狗\n品質檢測：這個產品 → 良品/瑕疵\n摘要評估：這份摘要 → 正確/有遺漏' }, { label: '跟生成式的差別', icon: 'compare', code: '鑑別式 → 「這是什麼？」（分類、判斷）\n生成式 → 「幫我做一個」（創造新內容）\n\n鑑別式做裁判，生成式做選手' }] } },
    { number: 2, title: '生成式AI', engTitle: 'Generative AI', back: { sections: [{ label: '是什麼', icon: 'auto_awesome', content: '能「創造新內容」的 AI。根據使用者的提示詞（Prompt），生成文字、圖片、音樂、程式碼等全新內容。' }, { label: '常見工具與技術', icon: 'build', code: '文字生成 → ChatGPT、Gemini、Claude（LLM）\n圖片生成 → Midjourney、DALL-E（Diffusion/GAN）\n音樂生成 → Suno、Udio\n程式碼   → GitHub Copilot\n\n底層技術：LLM、GAN、VAE、Diffusion Model' }, { label: '重點', icon: 'lightbulb', content: '生成式 AI 的核心能力是「生成新的、原創的內容」，而不只是分析或分類既有資料。' }] } }
  ]
}
