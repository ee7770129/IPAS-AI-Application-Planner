/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：multimodal.js
 * 功能：多模態人工智慧應用 - 中級卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'multimodal',
  label: '多模態人工智慧應用',
  cards: [
    {
      number: 1,
      title: '多模態缺失處理',
      engTitle: 'Missing Modality Handling',
      back: {
        sections: [
          {
            label: '問題情境',
            icon: 'broken_image',
            content: '多模態 AI 同時需要影像、文字、語音等多種輸入。但現實中常遇到某種模態缺失（例如有影像但沒文字描述），模型效能會大幅下降。'
          },
          {
            label: '常見解法',
            icon: 'build',
            code: '1. 零向量填充（最簡單但效果差）\n   缺失的模態用全 0 填\n   → 簡單但會引入不自然的訊號\n\n2. 生成模型補全（如 GAN）\n   用生成模型「猜」出缺失的模態\n   → 有幫助但生成品質不一定好\n\n3. 模態缺失感知模型（最佳）\n   訓練時隨機遮掉某些模態\n   讓模型學會「即使缺少某種輸入也能做判斷」\n   → 模型本身就具備抗缺失能力\n\n4. 丟棄缺失樣本（最浪費）\n   直接不用缺失資料 → 浪費大量資料'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「最有效維持模型效能」的策略：訓練具備模態缺失感知能力的模型。\n\n零向量填充太粗糙。\n生成模型補全有風險。\n丟棄樣本太浪費。'
          }
        ]
      }
    },
    {
      number: 2,
      title: 'CLIP 跨模態對齊不足',
      engTitle: 'CLIP Cross-modal Misalignment',
      back: {
        sections: [
          {
            label: '問題情境',
            icon: 'broken_image',
            content: '生成式 AI 工具（如 Stable Diffusion）生成的圖片中，品牌標誌顏色有誤差、人物手部姿勢不自然。主要原因是文字編碼器和影像編碼器的語意嵌入空間沒有充分對齊。'
          },
          {
            label: '為什麼會這樣',
            icon: 'warning',
            code: 'CLIP 的文字編碼器理解：\n  「品牌飲料」→ 大致知道是飲料\n  但「品牌標誌的精確顏色」→ 語意太細緻\n\nCLIP 的影像編碼器：\n  能生成逼真場景\n  但精確的品牌色、手指數量 → 嵌入空間沒對齊到這麼細\n\n→ 文字和影像在「細節」層面的語意映射不夠精確\n→ 生成結果整體對但細節錯'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「品牌顏色誤差」+「手部姿勢不自然」→ CLIP 文字/影像編碼器在語意嵌入空間未充分對齊。\n\n不是「去噪過程梯度漂移」（去噪是像素級問題，不是語意級）。\n不是「位置編碼超出上下文」（prompt 沒那麼長）。\n不是「沒用對比學習」（CLIP 本身就是對比學習，問題是對齊不夠「精細」）。'
          }
        ]
      }
    }
  ]
}
