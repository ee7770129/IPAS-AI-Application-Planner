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
    },
    {
      number: 3,
      title: '多模態融合方式',
      engTitle: 'Multimodal Fusion Methods',
      back: {
        sections: [
          {
            label: '兩種主要融合方式',
            icon: 'merge_type',
            code: '早期融合（Early Fusion）\n  在「資料層級」就把不同模態合併\n  例：把影像像素和文字向量串接成一個大向量\n  優：模態間互動從一開始就發生\n  缺：資料格式差異大，難對齊\n\n晚期融合（Late Fusion）\n  各模態用各自的模型處理\n  在「特徵層級」或「決策層級」才合併\n  例：CNN 處理影像、BERT 處理文字\n      各自輸出特徵後再整合\n  優：各模態獨立優化\n  缺：早期模態互動不足'
          },
          {
            label: '感測融合 Sensor Fusion',
            icon: 'sensors',
            content: '多模態AI 不只是文字+影像，還包含感測器資料（雷達、超音波、GPS、加速度計等）。\n\n關鍵技術：資料同步 + 特徵對齊，將異質資料整合至統一模型。\n\n應用：\n- 自動駕駛：攝影機 + 雷達 + LiDAR\n- 智慧醫療：醫學影像 + 生命徵象\n- 智慧城市：監視影像 + 空氣品質感測器'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '多模態AI 的核心：同時處理並整合不同感知類型的資料。\n\n常考配對：\n- 「影片自動生成字幕」→ 多模態（語音+文字+影像）\n- 「自駕車環境感知」→ 感測融合（攝影機+雷達+LiDAR）\n- 「圖文匹配/搜尋」→ CLIP（對比學習跨模態對齊）\n\n多模態 vs 單模態：多模態能處理更複雜的真實世界情境。'
          }
        ]
      }
    },
    {
      number: 4,
      title: 'VQA 視覺問答',
      engTitle: 'Visual Question Answering',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'question_answer',
            content: '給模型一張圖片和一個自然語言問題，模型要根據圖片內容回答。是典型的多模態任務，同時需要「看懂圖」和「理解問題」。\n\n例：圖片是一個公園 + 問題「有幾個人在跑步？」→ 模型回答「3」。'
          },
          {
            label: '技術架構',
            icon: 'build',
            code: '影像編碼器（CNN / ViT）\n  → 提取圖片特徵\n\n文字編碼器（BERT / LSTM）\n  → 理解問題語意\n\n融合模組（Attention / Cross-attention）\n  → 讓文字「關注」圖片的相關區域\n\n答案生成\n  → 分類（從候選答案中選）\n  → 或生成式（直接生成文字答案）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「圖片+自然語言問題→回答」→ VQA。\n\nVQA 是多模態 AI 的經典應用，需要影像理解 + 語言理解 + 推理能力。\n\n與 Image Captioning 的差別：\n- VQA = 針對特定問題回答\n- Captioning = 自動描述整張圖片'
          }
        ]
      }
    },
    {
      number: 5,
      title: 'Image Captioning 影像描述',
      engTitle: 'Image Captioning',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'image',
            content: '讓模型自動為一張圖片生成一段自然語言描述。例如：看到一張海灘照片，模型輸出「一個女孩在沙灘上放風箏」。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '經典方法：Encoder-Decoder\n  CNN（編碼器）→ 提取圖片特徵向量\n  RNN/LSTM（解碼器）→ 逐字生成描述\n\n現代方法：\n  ViT + Transformer Decoder\n  或 BLIP / BLIP-2 等專用多模態模型\n\n評估指標：\n  BLEU → 精確率導向（生成詞有多少對）\n  CIDEr → 共識導向（跟多個人工描述的共識度）\n  METEOR → 同時考慮同義詞'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「自動為圖片生成文字描述」→ Image Captioning。\n\n屬於多模態任務（影像→文字）。\n\n跟 OCR 的差別：\n- OCR = 辨識圖片中的「文字」\n- Captioning = 描述圖片中的「場景」'
          }
        ]
      }
    },
    {
      number: 6,
      title: 'DALL-E / 文生圖技術',
      engTitle: 'Text-to-Image Generation',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'brush',
            content: '輸入一段文字描述，AI 自動生成對應的圖片。代表技術包括 DALL-E（OpenAI）、Stable Diffusion（Stability AI）、Midjourney。'
          },
          {
            label: '技術原理',
            icon: 'build',
            code: 'DALL-E 2/3：\n  文字 → CLIP 文字編碼器 → 語意向量\n  → Diffusion 模型從噪音逐步去噪生成圖片\n  → 文字引導去噪方向\n\nStable Diffusion：\n  在「潛在空間」做去噪（不是像素空間）\n  → 計算成本大幅降低\n  → 開源，可本地運行\n\nMidjourney：\n  商業化產品，強調藝術風格\n  → 偏向美學呈現'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '文生圖 = 多模態生成式 AI 的核心應用。\n\n技術基礎：CLIP（文圖對齊） + Diffusion（圖像生成）。\n\n風險：Deepfake、著作權、有害內容生成。\n\n「在潛在空間做去噪」→ Stable Diffusion（比像素空間快）。'
          }
        ]
      }
    },
    {
      number: 7,
      title: '跨模態檢索',
      engTitle: 'Cross-modal Retrieval',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'search',
            content: '用一種模態的資料去搜尋另一種模態的結果。例如：用文字搜圖片（以文搜圖）、用圖片搜文字（以圖搜文）、用哼歌搜歌曲。'
          },
          {
            label: '技術原理',
            icon: 'build',
            code: '核心：共同嵌入空間\n  文字和圖片映射到同一個向量空間\n  → 語意相近的文字和圖片，向量距離近\n\n代表模型：CLIP\n  對比學習訓練：\n    配對的圖文 → 向量拉近\n    不配對的圖文 → 向量推遠\n\n檢索流程：\n  查詢文字 → 編碼成向量\n  → 在圖片向量庫中找最近的\n  → 回傳最相似的圖片'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「以文搜圖 / 以圖搜文」→ 跨模態檢索。\n核心技術 → 共同嵌入空間 + 對比學習。\n\n與 RAG 的關係：RAG 檢索的是文字文件，跨模態檢索可以檢索圖片、影片等多種模態。'
          }
        ]
      }
    }
  ]
}
