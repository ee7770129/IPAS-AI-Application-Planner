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
    { number: 2, title: '生成式AI', engTitle: 'Generative AI', back: { sections: [{ label: '是什麼', icon: 'auto_awesome', content: '能「創造新內容」的 AI。根據使用者的提示詞（Prompt），生成文字、圖片、音樂、程式碼等全新內容。' }, { label: '常見工具與技術', icon: 'build', code: '文字生成 → ChatGPT、Gemini、Claude（LLM）\n圖片生成 → Midjourney、DALL-E（Diffusion/GAN）\n音樂生成 → Suno、Udio\n程式碼   → GitHub Copilot\n\n底層技術：LLM、GAN、VAE、Diffusion Model' }, { label: '重點', icon: 'lightbulb', content: '生成式 AI 的核心能力是「生成新的、原創的內容」，而不只是分析或分類既有資料。' }] } },
    {
      number: 3,
      title: '鑑別式AI vs 生成式AI 比較',
      engTitle: 'Discriminative AI vs Generative AI',
      back: {
        sections: [
          {
            label: '完整比較',
            icon: 'compare',
            code: '              鑑別式 AI              生成式 AI\n\n學什麼      條件機率 P(y|x)        聯合分佈 P(x,y)\n            「給X，Y是什麼？」    「X和Y長什麼樣？」\n\n做什麼      分類、預測、判斷        生成新內容\n            找出分類邊界            學習資料分佈\n\n輸出        類別標籤或數值          新的資料樣本\n            例：垃圾/正常           例：一張新圖片\n\n代表模型    SVM、邏輯迴歸、        GAN、VAE、\n            決策樹、隨機森林、      擴散模型、LLM\n            CNN（分類用）\n\n應用場景    影像辨識、語音辨識      內容生成、風格轉換\n            風險評估、醫學診斷      數據增強、文本創作\n\n輸入特性    需要標記資料            可用無標記資料\n\n輸出特性    固定（同輸入同輸出）    有變異（同輸入不同輸出）'
          },
          {
            label: '一句話記法',
            icon: 'lightbulb',
            content: '鑑別式 = 裁判（判斷這是什麼）\n生成式 = 選手（創造新東西）\n\n鑑別式看到一幅畫說「這是畢卡索風格」\n生成式看到畢卡索的畫後「畫一幅新的」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '高頻考點整理：\n\nQ:「鑑別式AI的主要目標？」→ 分類或迴歸（不是生成資料）\nQ:「哪個屬於生成式AI模型？」→ GAN（SVM/邏輯迴歸/隨機森林都是鑑別式）\nQ:「生成式AI不包括？」→ 分類醫學影像（那是鑑別式的工作）\nQ:「鑑別式AI學什麼？」→ 條件機率 P(y|x)（不是聯合機率）\n\n注意：貝氏分類器雖然做分類，但它建構的是資料的整體分布 → 屬於生成式模型。'
          }
        ]
      }
    },
    {
      number: 4,
      title: '鑑別式AI + 生成式AI 整合應用',
      engTitle: 'DAI + GAI Integration',
      back: {
        sections: [
          {
            label: '為什麼要整合',
            icon: 'handshake',
            content: '生成式負責「造資料」，鑑別式負責「用資料判斷」。兩者搭配可以解決資料不足、模型泛化力差等問題。'
          },
          {
            label: '三大整合場景',
            icon: 'build',
            code: '1. 數據增強（最常考）\n   生成式 AI 造出更多訓練資料\n   → 鑑別式 AI 用這些資料訓練\n   → 解決「資料稀缺或不平衡」\n   例：GAN 生成稀缺病理影像\n       → CNN 用這些影像訓練辨識腫瘤\n\n2. 模擬場景訓練\n   生成式 AI 模擬各種環境\n   → 鑑別式 AI 在模擬中學習決策\n   例：生成各種天氣/路況的駕駛畫面\n       → 自動駕駛 AI 學習應對策略\n\n3. 內容生成 + 品質審核\n   生成式 AI 產出內容\n   → 鑑別式 AI 檢查品質和合規\n   例：AI 寫新聞稿 → AI 審核是否有錯'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Q:「整合應用的主要目的？」→ 提高診斷準確性和數據多樣性\nQ:「生成式支援鑑別式的案例？」→ 模擬交通場景訓練自動駕駛（不是用CNN分類）\nQ:「數據增強解決什麼問題？」→ 數據稀缺或不平衡\nQ:「解決訓練不穩定？」→ WGAN（改進損失函數）\nQ:「整合的關鍵方向？」→ 開發更高效的整合框架'
          }
        ]
      }
    }
  ]
}
