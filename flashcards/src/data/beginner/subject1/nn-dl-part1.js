/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：nn-dl-part1.js
 * 功能：神經網路與深度學習（第 1-15 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    { number: 1, title: 'Softmax 函數', engTitle: 'Softmax Function', back: { sections: [{ label: '是什麼', icon: 'pie_chart', content: '把一組數值轉換成「機率分佈」，所有輸出加總 = 1。用在多類別分類的輸出層。' }, { label: '範例', icon: 'table_chart', code: '模型原始輸出：[2.0, 1.0, 0.1]\n\nSoftmax 轉換後：\n動作片：0.66 (66%)\n喜劇片：0.24 (24%)\n恐怖片：0.10 (10%)\n\n加總 = 1.0 → 可以當成機率來用' }, { label: '什麼時候用', icon: 'lightbulb', content: '多類別分類（3 類以上）的輸出層。例如：預測影片類型、辨識手寫數字（0-9）。' }] } },
    { number: 2, title: 'Sigmoid 函數', engTitle: 'Sigmoid Function', back: { sections: [{ label: '是什麼', icon: 'ssid_chart', content: '把任意數值壓縮到 0 和 1 之間，輸出可以解釋為「機率」。形狀像 S 曲線。' }, { label: '範例', icon: 'calculate', code: '輸入 → 輸出\n-10  → 0.00005  (接近 0)\n  0  → 0.5      (正中間)\n +10 → 0.99995  (接近 1)' }, { label: '什麼時候用', icon: 'lightbulb', content: '二元分類（只有兩類）的輸出層。例如：這封信是不是垃圾郵件？（是/否）\n\n跟 Softmax 差別：Sigmoid 用在「二選一」，Softmax 用在「多選一」。' }] } },
    { number: 3, title: 'ReLU 函數', engTitle: 'Rectified Linear Unit', back: { sections: [{ label: '是什麼', icon: 'trending_up', content: '最常用的「隱藏層」激活函數。規則很簡單：正數保留原值，負數變成 0。' }, { label: '怎麼算', icon: 'calculate', code: 'ReLU(x) = max(0, x)\n\n輸入 → 輸出\n -5  →  0\n  0  →  0\n  3  →  3\n 10  → 10' }, { label: '為什麼常用', icon: 'lightbulb', content: '計算超快（只是比大小），而且能緩解深層網路的梯度消失問題。是隱藏層的預設選擇。\n\n注意：ReLU 用在隱藏層，不是輸出層。輸出層用 Softmax 或 Sigmoid。' }] } },
    { number: 4, title: '線性函數', engTitle: 'Linear Function', back: { sections: [{ label: '是什麼', icon: 'show_chart', content: '最簡單的函數：輸出 = 輸入（或乘一個常數）。不做任何非線性轉換。' }, { label: '公式', icon: 'calculate', code: 'f(x) = x  或  f(x) = ax + b\n\n輸入多少就輸出多少，沒有彎曲' }, { label: '用在哪', icon: 'lightbulb', content: '迴歸問題的輸出層（預測連續數值，如房價）。\n\n不適合當隱藏層的激活函數，因為多層線性函數疊起來還是線性，等於白疊。' }] } },
    { number: 5, title: '激活函數總結', engTitle: 'Activation Functions', back: { sections: [{ label: '怎麼選', icon: 'account_tree', tree: '要用哪個激活函數？\n│\n├─ 隱藏層\n│   └─ ReLU（預設首選）\n│\n└─ 輸出層（看任務類型）\n    ├─ 二元分類 → Sigmoid（輸出 0~1 機率）\n    ├─ 多類別分類 → Softmax（輸出機率分佈）\n    └─ 迴歸問題 → 線性函數（輸出連續數值）' }] } },
    { number: 6, title: 'VAE 隱變量自編碼器', engTitle: 'Variational Autoencoder', back: { sections: [{ label: '是什麼', icon: 'auto_awesome', content: '一種能「學習資料特徵」並「生成新樣本」的生成式模型。先把資料壓縮成「隱變量」，再從隱變量還原出新的資料。' }, { label: '怎麼運作', icon: 'build', code: '編碼器（Encoder）\n  原始圖片 → 壓縮成隱變量（潛在空間的一個點）\n\n解碼器（Decoder）\n  隱變量 → 還原/生成新圖片\n\n關鍵：隱變量不是固定值，而是一個「機率分佈」\n→ 從分佈中取樣就能生成有變化但風格一致的新圖' }, { label: '跟 GAN 的差別', icon: 'compare', code: 'VAE → 學資料的機率分佈，生成較平滑但可能模糊\nGAN → 兩個網路對抗，生成較銳利但訓練不穩定' }, { label: '應用', icon: 'brush', content: '圖像生成、風格轉換、產品概念圖、資料增強。特別適合需要「風格一致但有變化」的場景。' }, { label: '考試重點：異常偵測', icon: 'school', content: 'VAE 除了生成圖像，還能用來做異常偵測：\n\n1. 只用「正常資料」訓練 VAE\n2. 輸入新資料讓 VAE 嘗試還原\n3. 還原誤差很大 → 代表這筆資料「不正常」\n\n考題情境：「缺乏異常標註」+ 偵測異常 → 選 VAE。' }] } },
    { number: 7, title: '生成對抗網路', engTitle: 'Generative Adversarial Network, GAN', back: { sections: [{ label: '是什麼', icon: 'sports_mma', content: '兩個神經網路互相對抗：一個負責「造假」，一個負責「抓假」，在對抗中雙方都變強。' }, { label: '怎麼運作', icon: 'build', code: '生成器（Generator）\n  隨機雜訊 → 生成假圖片\n  目標：騙過判別器\n\n判別器（Discriminator）\n  輸入圖片 → 判斷真假\n  目標：正確分辨真偽\n\n兩者不斷對抗 → 生成器越來越會造假\n→ 最終生成的圖片逼真到判別器分不出來' }, { label: '應用', icon: 'image', content: '圖像生成（如人臉生成）、圖片修復、風格轉換、超解析度。\n\n注意：GAN 擅長生成圖像，但 ChatGPT 這類文字生成工具用的不是 GAN，而是 LLM。' }] } },
    { number: 8, title: '大型語言模型', engTitle: 'Large Language Model, LLM', back: { sections: [{ label: '是什麼', icon: 'chat', content: '用超大量文字資料訓練出來的深度學習模型，能理解和生成自然語言。ChatGPT、Gemini、Claude 都是 LLM。' }, { label: '怎麼運作', icon: 'build', code: '核心技術：Transformer 架構\n\n訓練方式：\n1. 預訓練：讀大量文本，學會「下一個字最可能是什麼」\n2. 微調：用特定任務資料調整，讓回答更好\n3. RLHF：人類回饋強化學習，讓回答更符合人類期待\n\n參數量越大 → 能力通常越強（但也越貴）' }, { label: '能做什麼', icon: 'list', content: '文字生成、翻譯、摘要、問答、程式碼撰寫、推理。\n\n重點：LLM 是「文字」生成模型，不是圖像生成模型（圖像用 GAN、VAE、Diffusion 等）。' }] } },
    { number: 9, title: '圖卷積網路', engTitle: 'Graph Convolutional Network, GCN', back: { sections: [{ label: '是什麼', icon: 'share', content: '把 CNN 的概念應用到「圖結構」資料上。圖（Graph）是由節點和邊組成的網路，例如社群網路、分子結構。' }, { label: '跟 CNN 的差別', icon: 'compare', code: 'CNN → 處理規則排列的資料（圖片像素、格子狀）\nGCN → 處理不規則的圖結構（社群關係、分子鍵結）\n\n圖片是特殊的圖（像素排成格子），\n但社群網路、交通路網不是格子，要用 GCN' }, { label: '應用', icon: 'hub', content: '社群網路分析、推薦系統、藥物分子性質預測、交通流量預測。\n\n不適合拿來做對話式 AI（那是 LLM 的領域）。' }] } },
    {
      number: 10,
      title: '擴散模型',
      engTitle: 'Diffusion Model',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'blur_on',
            content: '目前最先進的圖像生成技術。先把圖片一步步加雜訊變成純噪聲（前向過程），再訓練模型學會「把噪聲一步步還原成圖片」（反向過程）。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '前向過程（加噪）：\n  清晰圖片 → 加一點雜訊 → 再加 → ... → 純噪聲\n\n反向過程（去噪）：\n  純噪聲 → 去一點雜訊 → 再去 → ... → 清晰圖片\n\n模型學的是「每一步怎麼去噪」\n生成時：從隨機噪聲開始，一步步去噪 → 得到全新圖片'
          },
          {
            label: '跟 GAN 和 VAE 的比較',
            icon: 'compare',
            code: 'GAN  → 對抗學習，速度快但訓練不穩定\nVAE  → 機率分佈，穩定但可能模糊\n擴散 → 逐步去噪，品質最高、最穩定\n       但生成速度較慢（需要多步去噪）\n\n目前主流：Stable Diffusion、DALL-E 3、Midjourney'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「高品質圖像生成」+「穩定性」+「多樣性控制」→ 擴散模型。\n\nGAN 雖然也能生成圖像，但訓練不穩定（模式崩塌）。擴散模型在穩定性和品質上都優於 GAN，是目前的主流。\n\nSVM 和決策樹是分類模型，不能生成圖像。'
          }
        ]
      }
    },
    {
      number: 11,
      title: 'RLHF',
      engTitle: 'Reinforcement Learning from Human Feedback',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'thumb_up',
            content: '用「人類的偏好回饋」來微調大型語言模型，讓模型的回答更符合人類期待。ChatGPT 之所以好用，RLHF 功不可沒。'
          },
          {
            label: '三個步驟',
            icon: 'build',
            code: '步驟 1：收集人類偏好資料\n  模型產生多個回答 → 人類標註「哪個比較好」\n\n步驟 2：訓練獎勵模型（Reward Model）\n  學會「人類覺得什麼樣的回答是好的」\n  → 自動幫回答打分數\n\n步驟 3：用強化學習（PPO）微調語言模型\n  依據獎勵模型的分數，調整生成策略\n  → 讓模型產生更多「高分回答」'
          },
          {
            label: '什麼不屬於 RLHF',
            icon: 'block',
            content: '「以未標註語料進行長週期表示學習訓練」不是 RLHF，那是預訓練階段（Pre-training）。\n\nRLHF 發生在模型已經有基礎能力之後，用來微調回覆品質和對齊人類偏好。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'RLHF 三大活動：\n1. 人工建立偏好資料（比較不同回答）\n2. 訓練獎勵模型（學人類偏好）\n3. 強化學習調整策略（PPO 優化）\n\n不屬於 RLHF 的：未標註語料的預訓練 → 那是更早的階段。'
          }
        ]
      }
    },
    {
      number: 12,
      title: '顯著性圖',
      engTitle: 'Saliency Map',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'visibility',
            content: '一種視覺化工具，用顏色標示出輸入資料中「哪些部分」對模型預測結果影響最大。常用在影像模型上。'
          },
          {
            label: '怎麼看',
            icon: 'image',
            code: '原始圖片：一張貓的照片\n\n顯著性圖：\n  亮色（紅/黃）→ 對預測「貓」影響最大的區域\n                 通常是貓的耳朵、眼睛、鬍鬚\n  暗色（藍/黑）→ 對預測影響很小的背景區域\n\n→ 可以確認模型是不是「看對地方」做判斷'
          },
          {
            label: '用途',
            icon: 'bug_report',
            content: '驗證模型行為是否合理。如果模型說「這是貓」，但顯著性圖顯示模型看的是背景而不是貓，表示模型可能學錯了。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '顯著性圖的核心功能：「標示輸入資料中對單一預測結果影響較大的區域」。\n\n不是看整體準確度（那是評估指標）。\n不是比較模型架構（那是模型選擇）。\n不是看穩定性（那是敏感度分析）。'
          }
        ]
      }
    },
    {
      number: 13,
      title: '影像分類',
      engTitle: 'Image Classification',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'photo_library',
            content: '給模型一張圖，模型回答「這整張圖是什麼」。只給一個類別標籤，不告訴你東西在圖片的哪裡。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: '輸入：一張照片\n輸出：「貓」（整張圖的類別）\n\n只回答「是什麼」，不回答「在哪裡」\n\n應用：垃圾郵件判斷、X光片正常/異常、\n      產品良品/瑕疵判斷'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「判斷影像中是否有煙霧」→ 影像分類（是/否）。\n但如果要「標示煙霧的位置」→ 那是物件偵測或影像分割。'
          }
        ]
      }
    },
    {
      number: 14,
      title: '物件偵測',
      engTitle: 'Object Detection',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'crop_free',
            content: '不只辨識圖片裡「有什麼」，還要找出「在哪裡」，用方框（Bounding Box）把每個物件框出來。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: '輸入：一張街景照片\n輸出：\n  [人] ← 框住行人\n  [車] ← 框住汽車\n  [狗] ← 框住路邊的狗\n\n每個物件都有：類別 + 位置方框\n\n常見模型：YOLO、Faster R-CNN'
          },
          {
            label: '跟影像分類的差別',
            icon: 'compare',
            code: '影像分類 → 整張圖一個標籤（「這是什麼」）\n物件偵測 → 每個物件一個框 + 標籤（「在哪 + 是什麼」）'
          }
        ]
      }
    },
    {
      number: 15,
      title: '影像分割',
      engTitle: 'Image Segmentation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'gradient',
            content: '把圖片的每一個像素都標上類別，精確勾勒出物件的輪廓和範圍。比物件偵測更精細。'
          },
          {
            label: '兩種類型',
            icon: 'build',
            code: '語意分割（Semantic Segmentation）\n  → 每個像素一個類別\n  → 同類別的不同物件不區分\n  → 例：所有「人」的像素都標同色\n\n實例分割（Instance Segmentation）\n  → 同類別的不同物件也區分\n  → 例：人A 綠色、人B 藍色'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '關鍵情境：「精確標示像素區域」「標示位置和範圍」→ 影像分割。\n\n只需要「框住位置」→ 物件偵測。\n只需要「有沒有」→ 影像分類。'
          }
        ]
      }
    },
]
