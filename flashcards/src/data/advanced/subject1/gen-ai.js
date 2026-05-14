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
    }
  ]
}
