/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：gen-ai.js
 * 功能：生成式AI技術與應用 - 中級卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'gen-ai',
  label: '生成式AI技術與應用',
  cards: [
    {
      number: 1,
      title: '模式崩潰',
      engTitle: 'Mode Collapse',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'error',
            content: 'GAN 訓練時的常見問題。生成器「偷懶」只學會生成少數幾種樣本，就能騙過判別器，導致生成結果多樣性極低。'
          },
          {
            label: '長什麼樣',
            icon: 'image',
            code: '正常的 GAN：生成各種不同的人臉\n  圓臉、長臉、男、女、老、少...\n\n模式崩潰的 GAN：\n  生成的全都長差不多\n  可能只會生成一種「平均臉」\n  → 判別器覺得很真，但多樣性為零'
          },
          {
            label: '解決方法',
            icon: 'build',
            code: '1. WGAN（Wasserstein GAN）\n   用 Wasserstein 距離替代原始損失函數\n   → 提供更穩定的梯度訊號\n   → 最常被提到的解法\n\n2. Spectral Normalization\n   → 限制判別器的 Lipschitz 常數\n\n3. 多尺度判別器\n   → 不同解析度各一個判別器\n\n4. Mini-batch Discrimination\n   → 讓判別器看一批樣本的多樣性'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「GAN 出現模式崩潰，最常用的解法？」\n→ 「採用 Wasserstein 距離（WGAN 損失）替代原始 GAN 損失」\n\n不是「梯度懲罰」（GP 是 WGAN-GP 的一部分，但核心是 Wasserstein 距離）。\n不是「潛在向量加擾動」（治標不治本）。\n不是「多尺度判別器」（有幫助但不是最常被提到的解法）。'
          }
        ]
      }
    },
    {
      number: 2,
      title: 'Stable Diffusion 生成品質',
      engTitle: 'Stable Diffusion Quality Tuning',
      back: {
        sections: [
          {
            label: '問題情境',
            icon: 'blur_on',
            content: '生成 4K 級產品圖時出現顆粒化、模糊、細節不足。需要在生成階段調整參數提升品質。'
          },
          {
            label: '關鍵參數',
            icon: 'tune',
            code: '取樣步數（Sampling Steps）：\n  步數越多 → 去噪越徹底 → 細節越好\n  但太多會過度平滑\n\n取樣器（Sampler）：\n  DPM++ 2M Karras → 品質穩定\n  Euler a → 速度快\n  選高品質取樣器能明顯改善\n\nCFG（Classifier-Free Guidance）：\n  控制「多忠實於 prompt」\n  太高 → 過飽和、不自然\n  太低 → 偏離描述'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「提升畫面清晰度與細節」→ 增加取樣步數 + 選高品質取樣器。\n\n不是「降低步數」（細節會更差）。\n不是「提高 CFG」（CFG 高是更忠實 prompt，不是更清晰）。\n不是「低解析度輸入」（會更模糊）。'
          }
        ]
      }
    },
    {
      number: 3,
      title: 'VAE/GAN/Diffusion 比較',
      engTitle: 'Generative Model Comparison',
      back: {
        sections: [
          {
            label: '三者根本差異',
            icon: 'compare',
            code: 'VAE（變分自編碼器）：\n  顯式潛在變數建模\n  → 學整體語意結構\n  → 穩定但解析度有限（偏模糊）\n\nGAN（生成對抗網路）：\n  對抗損失學分佈映射\n  → 生成品質高、銳利\n  → 但訓練不穩定（模式崩潰）\n\nDiffusion（擴散模型）：\n  條件化噪聲反推\n  → 高保真 + 穩定 + 多樣性\n  → 但生成速度較慢'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「三者在潛在空間對齊與生成策略上的根本差異？」\n\n正確：VAE 顯式建模穩定但模糊 / GAN 對抗高品質但不穩 / Diffusion 去噪高保真且穩定。\n\n錯誤：\n- 「VAE 和 Diffusion 都靠對抗訓練」→ 不是\n- 「都用馬爾可夫鏈」→ 只有 Diffusion 用\n- 「共用同一潛在空間」→ 架構完全不同'
          }
        ]
      }
    },
    {
      number: 4,
      title: 'VAE/GAN 用於預測+生成',
      engTitle: 'VAE/GAN for Prediction & Generation',
      back: {
        sections: [
          {
            label: '應用情境',
            icon: 'science',
            content: '需要同時做兩件事：預測（顧客會不會流失）和生成（模擬不同策略下的虛擬樣本做 A/B 測試）。只有生成式模型能兼顧。'
          },
          {
            label: '為什麼選 VAE/GAN',
            icon: 'build',
            code: '隨機森林/邏輯迴歸：\n  → 只能預測，不能生成虛擬樣本\n\n強化學習：\n  → 能做策略優化，但不能生成多樣化樣本\n\nVAE/GAN：\n  → 學習資料分佈 → 能生成虛擬樣本\n  → 調整潛在變數 → 模擬不同策略的結果\n  → 同時滿足「預測」和「生成」需求'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「預測流失」+「模擬不同策略」+「生成虛擬樣本做 A/B 測試」→ VAE 或 GAN。\n\n關鍵字：「同時兼顧預測與資料生成」→ 只有生成式模型做得到。傳統分類/迴歸模型只能預測不能生成。'
          }
        ]
      }
    },
    {
      number: 5,
      title: '生成式AI vs 鑑別式AI',
      engTitle: 'Generative AI vs Discriminative AI',
      back: {
        sections: [
          {
            label: '核心差異',
            icon: 'compare',
            code: '生成式AI（Generative）\n  目標：生成新的資料樣本\n  學什麼：學資料分佈 P(X)\n  輸出：新的內容（文字、圖像、語音）\n  代表：GPT、VAE、GAN、Diffusion\n\n鑑別式AI（Discriminative）\n  目標：分類、辨識或預測\n  學什麼：學決策邊界 P(Y|X)\n  輸出：類別標籤或預測值\n  代表：SVM、決策樹、隨機森林、Logistic'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '生成式 = 創造新內容（文章、圖片、語音）\n鑑別式 = 分類或預測（垃圾郵件判斷、疾病預測）\n\n常考情境：\n- 「生成行銷文案/圖像」→ 生成式\n- 「判斷是否詐騙」→ 鑑別式\n- 「同時預測+生成虛擬樣本」→ VAE/GAN（生成式）'
          }
        ]
      }
    },
    {
      number: 6,
      title: '生成式AI 演進五階段',
      engTitle: 'Generative AI Evolution',
      back: {
        sections: [
          {
            label: '五大階段',
            icon: 'timeline',
            code: '1. 初期（2013-2015）VAE/RNN\n   編碼器-解碼器架構\n   生成模糊、訓練困難\n\n2. GAN 時代（2014-2020）\n   對抗訓練，高寫實性\n   代表：DCGAN、StyleGAN、CycleGAN\n   限制：訓練不穩定（模式崩潰）\n\n3. Transformer 崛起（2017 起）\n   自注意力機制，高效語境建模\n   代表：BERT、GPT、T5\n\n4. 擴散與多模態（2020 起）\n   逐步去噪，高品質多模態\n   代表：Stable Diffusion、DALL-E\n\n5. 巨型模型與 Agent 化（2023 起）\n   千億參數 + 工具整合 + 自主代理\n   代表：GPT-4、Gemini'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'GAN 變體要分清楚：\n- DCGAN = 深度卷積 GAN\n- CycleGAN = 風格轉換（油畫↔照片）\n- StyleGAN = 高品質人臉生成\n\nAI 四個演進階段（黃仁勳 CES 2025）：\n感知AI → 生成式AI → 代理式AI → 物理AI'
          }
        ]
      }
    },
    {
      number: 7,
      title: 'Deepfake / RLHF',
      engTitle: 'Deep Fake & RLHF',
      back: {
        sections: [
          {
            label: 'Deepfake 深偽技術',
            icon: 'face_retouching_off',
            content: '結合影像生成和語音合成技術，製作出以假亂真的偽造影片或語音。已成為詐騙和假訊息散播的工具。\n\n風險：偽造政治人物講話、偽造身份進行詐騙、破壞個人名譽。\n\n防禦：生成內容偵測技術、數位浮水印、法律規範。'
          },
          {
            label: 'RLHF',
            icon: 'feedback',
            content: 'RLHF（Reinforcement Learning with Human Feedback）= 基於人類回饋的強化學習。\n\n用途：讓生成式模型的輸出更符合人類期望，減少有害、偏見或不準確的內容。\n\n流程：模型生成多個回覆 → 人類評分排序 → 用排序訓練獎勵模型 → 強化學習微調生成模型。\n\nChatGPT 就是用 RLHF 微調 GPT 模型的產物。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Deepfake 屬於生成式AI 的「濫用風險」。\nRLHF 屬於「模型對齊」(Alignment) 技術。\n\n常考：\n- 「確保生成內容安全」→ RLHF + 紅隊測試\n- 「偽造影片/語音」→ Deepfake\n- 「著作權侵權預防」→ 訓練資料授權驗證（不是 Deepfake 問題）'
          }
        ]
      }
    },
    {
      number: 8,
      title: 'BLEU / ROUGE',
      engTitle: 'Text Generation Evaluation Metrics',
      back: {
        sections: [
          {
            label: '兩大文本評估指標',
            icon: 'assessment',
            code: 'BLEU（機器翻譯常用）\n  衡量：生成文本與參考文本的 n-gram 重疊度\n  核心：精確率導向（生成的有多少是對的）\n  分數：0-1，越高越相似\n  適用：機器翻譯、文本生成\n\nROUGE（摘要常用）\n  衡量：生成摘要覆蓋了多少參考內容\n  核心：召回率導向（參考的有多少被生成出來）\n  變體：\n    ROUGE-N = n-gram 重疊\n    ROUGE-L = 最長公共子序列\n  適用：自動摘要、問答系統'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'BLEU = 精確率導向（生成文本品質）\nROUGE = 召回率導向（內容覆蓋程度）\n\n兩者共同限制：只看詞彙重疊，不理解語意。\n對話和創意寫作通常需要人工評估（流暢性+準確性）。\n\n三種評估方式：BLEU（自動）、ROUGE（自動）、人工評估（主觀但最全面）。'
          }
        ]
      }
    }
  ]
}
