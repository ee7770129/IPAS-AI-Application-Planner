/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：nn-dl.js
 * 功能：神經網路與深度學習 - 卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'nn-dl',
  label: '神經網路與深度學習',
  cards: [
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
    {
      number: 16,
      title: '電腦視覺技術總結',
      engTitle: 'Computer Vision Tasks',
      back: {
        sections: [
          {
            label: '怎麼選',
            icon: 'account_tree',
            tree: '圖片裡有什麼？\n│\n├─ 只需知道「整張圖是什麼」\n│   └─ 影像分類（一個標籤）\n│\n├─ 要知道「物件在哪裡」\n│   └─ 物件偵測（方框 + 標籤）\n│\n└─ 要知道「精確的像素範圍」\n    └─ 影像分割（每個像素都標記）\n\n精細度：分類 < 偵測 < 分割'
          }
        ]
      }
    },
    {
      number: 17,
      title: 'CNN 卷積神經網路',
      engTitle: 'Convolutional Neural Network',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'grid_view',
            content: '專門處理「網格狀資料」（如圖片）的深度學習模型。用卷積核在圖片上滑動，自動提取邊緣、紋理、形狀等特徵。'
          },
          {
            label: '核心結構',
            icon: 'build',
            code: '卷積層（Conv）→ 提取局部特徵（邊緣、紋理）\n池化層（Pool）→ 縮小尺寸，防止過擬合\n全連接層（FC）→ 最後做分類或迴歸\n\n淺層學邊緣 → 中層學紋理 → 深層學物件形狀'
          },
          {
            label: '應用',
            icon: 'image',
            content: '影像分類、物件偵測、影像分割、人臉辨識、醫學影像分析。只要跟「圖片」相關的 AI 任務，幾乎都用 CNN。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'CNN 擅長「空間特徵」（圖片），不擅長「時間序列」（文字、語音序列）。時間序列要用 RNN/LSTM。\n\n「利用卷積層捕捉局部特徵」是 CNN 的特點描述，但如果題目問的是「長期記憶問題」，CNN 解決不了。'
          }
        ]
      }
    },
    {
      number: 18,
      title: 'RNN 循環神經網路',
      engTitle: 'Recurrent Neural Network',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'loop',
            content: '專門處理「序列資料」的神經網路。有一個「記憶機制」，能把前面的資訊傳給後面，理解上下文。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '一般神經網路：每筆資料獨立處理\nRNN：有「隱藏狀態」在時間步之間傳遞\n\n「我 / 喜歡 / 吃 / 蘋果」\n  ↓      ↓     ↓     ↓\n  h1 →  h2 →  h3 →  h4\n\n每一步都能「記住」前面的內容'
          },
          {
            label: '致命弱點',
            icon: 'warning',
            content: '梯度消失問題：序列太長時，最前面的資訊會在傳遞過程中逐漸「淡忘」。例如一篇長文章的開頭內容，到最後幾乎記不住。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '題目出現「RNN 難以保留較早期的重要資訊」→ 答案選 LSTM。\nLSTM 就是為了解決 RNN 的長期記憶問題而設計的。'
          }
        ]
      }
    },
    {
      number: 19,
      title: 'LSTM',
      engTitle: 'Long Short-Term Memory',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'memory',
            content: 'RNN 的改良版，加了「記憶閘門」機制，能決定哪些資訊要記住、哪些要忘記，解決了 RNN 的長期記憶問題。'
          },
          {
            label: '三個閘門',
            icon: 'build',
            code: '遺忘閘（Forget Gate）\n  → 決定要「丟掉」多少舊記憶\n\n輸入閘（Input Gate）\n  → 決定要「記住」多少新資訊\n\n輸出閘（Output Gate）\n  → 決定要「輸出」多少當前記憶\n\n→ 重要的長期資訊可以一直保留\n→ 不重要的會被遺忘閘清除'
          },
          {
            label: '應用',
            icon: 'timeline',
            content: '時間序列預測（股價、天氣、到站時間）、機器翻譯、語音辨識、文本生成。任何需要「記住長距離上下文」的任務。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「路況變化複雜」+「需考慮歷史資料」+「RNN 難以保留早期資訊」→ LSTM。\n\nCNN 處理圖片，不處理時間序列。\n自編碼器做壓縮重建，不是序列預測。\n增加全連接層的層數不能解決長期記憶問題。'
          }
        ]
      }
    },
    {
      number: 20,
      title: '自編碼器',
      engTitle: 'Autoencoder, AE',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'compress',
            content: '把資料「壓縮」再「還原」的神經網路。目標是讓還原出來的結果盡量跟原始資料一樣。中間壓縮的部分就是資料的「精華」。'
          },
          {
            label: '結構',
            icon: 'build',
            code: '編碼器（Encoder）：原始資料 → 壓縮表示（潛在空間）\n解碼器（Decoder）：壓縮表示 → 還原資料\n\n原始（100維）→ 壓縮（10維）→ 還原（100維）\n\n中間那 10 維就是資料最重要的特徵'
          },
          {
            label: '跟 VAE 的差別',
            icon: 'compare',
            code: 'AE  → 壓縮是固定的點（確定值）\nVAE → 壓縮是機率分佈（可取樣生成新資料）\n\nAE 主要用來降維、去噪\nVAE 可以用來生成新資料'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '自編碼器的用途是「壓縮再重建」，不是做序列預測。題目問「時間序列長期記憶」時不要選自編碼器。'
          }
        ]
      }
    },
    {
      number: 21,
      title: '全連接神經網路',
      engTitle: 'Fully Connected Neural Network, FCNN',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'hub',
            content: '最基本的神經網路架構。每一層的每個神經元都和下一層的所有神經元相連，沒有特殊結構。也叫多層感知器（MLP）。'
          },
          {
            label: '結構',
            icon: 'build',
            code: '輸入層 → 隱藏層1 → 隱藏層2 → ... → 輸出層\n\n每個箭頭都代表一個連接（權重）\n層數越多 = 越「深」'
          },
          {
            label: '限制',
            icon: 'warning',
            content: '沒有針對特定資料類型優化：\n- 圖片 → 用 CNN 更好（利用空間結構）\n- 序列 → 用 RNN/LSTM 更好（利用時間順序）\n- 圖結構 → 用 GCN 更好\n\n單純增加隱藏層數量不能解決 RNN 的長期記憶問題。'
          }
        ]
      }
    },
    {
      number: 22,
      title: '自然語言處理',
      engTitle: 'Natural Language Processing, NLP',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'translate',
            content: '讓電腦「理解」和「生成」人類語言的 AI 技術。包括文字和語言的理解、分析、翻譯、生成等。'
          },
          {
            label: '常見任務',
            icon: 'list',
            code: '文本分類   → 垃圾郵件判斷、情緒分析\n機器翻譯   → 中文 ↔ 英文\n文本摘要   → 長文變短摘要\n問答系統   → ChatGPT、客服機器人\n命名實體辨識 → 找出人名、地名、日期\n文本生成   → 寫文章、寫程式碼'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '判斷蘋果成熟度 → 電腦視覺（看圖片），不是 NLP。\nNLP 處理的是「文字和語言」，不是圖片。\n\nLLM（大型語言模型）就是 NLP 領域最強的技術。'
          }
        ]
      }
    },
    {
      number: 23,
      title: '語音辨識',
      engTitle: 'Speech Recognition',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'mic',
            content: '把人說的話（語音訊號）轉換成文字。是語音助理、字幕生成、語音輸入法的核心技術。'
          },
          {
            label: '常見應用',
            icon: 'list',
            code: 'Siri / Google Assistant / Alexa → 語音助理\nYouTube 自動字幕 → 語音轉文字\n語音輸入法 → 說話變打字\n會議記錄 → 自動聽寫'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '語音辨識 = 「聲音 → 文字」\n不要跟以下搞混：\n- NLP = 「文字 → 理解/生成」\n- 電腦視覺 = 「圖片 → 理解」\n- 語音合成 = 「文字 → 聲音」（反過來）'
          }
        ]
      }
    },
    {
      number: 24,
      title: 'Transformer 注意力機制',
      engTitle: 'Transformer / Attention Mechanism',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'center_focus_strong',
            content: '一種讓模型「專注」在輸入中最重要部分的機制。Transformer 架構就是完全靠注意力機制運作，不再需要 RNN 的順序處理。'
          },
          {
            label: '核心概念',
            icon: 'build',
            code: '自注意力（Self-Attention）：\n  對輸入的每個位置，計算它跟其他所有位置的「關聯程度」\n\n例：「那隻貓追著牠的尾巴跑」\n  → 「牠」跟「貓」的注意力權重最高\n  → 模型知道「牠」指的是「貓」\n\n優點：可以平行計算（不像 RNN 要一步一步來）\n→ 訓練速度快很多'
          },
          {
            label: '為什麼重要',
            icon: 'star',
            content: 'Transformer 是 GPT、BERT、LLM 的底層架構。現在幾乎所有最強的 AI 模型都基於 Transformer。'
          }
        ]
      }
    },
    {
      number: 25,
      title: 'Flash Attention',
      engTitle: 'Flash Attention',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'flash_on',
            content: '一種優化 Transformer 注意力計算的技術。透過改變計算順序和資料存取方式，大幅減少記憶體用量並加快速度。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '原本的注意力計算：\n  一次算完整個注意力矩陣 → 超大、超吃記憶體\n  中間結果全存在 GPU 記憶體 → 容易爆\n\nFlash Attention：\n  把計算分成小塊（tiling）\n  一塊一塊算，不存完整中間結果\n  → 記憶體用量大減\n  → 速度反而更快（減少記憶體來回搬運）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Flash Attention 的核心效益：「調整計算與資料處理方式，減少中間結果儲存需求，改善速度與資源效率」。\n\n不是「忽略小權重」（那是稀疏注意力 Sparse Attention）。\n不是「增加平行度」（注意力頭數不變）。\n不是「暫存在快取」（是減少存取，不是多存）。'
          }
        ]
      }
    },
    {
      number: 26,
      title: 'RAG 檢索增強生成',
      engTitle: 'Retrieval-Augmented Generation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'manage_search',
            content: '讓 LLM 先「查資料」再回答的技術。把外部知識庫（文件、法規、資料庫）跟語言模型結合，回答時引用最新、最準確的內容。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '1. 使用者問問題\n2. 系統先去知識庫「檢索」相關文件\n3. 把檢索到的文件 + 問題一起丟給 LLM\n4. LLM 根據這些文件生成回答\n\n→ 回答有「根據」，不是純靠模型記憶\n→ 知識庫更新 = 回答跟著更新'
          },
          {
            label: '常見問題與解法',
            icon: 'warning',
            code: '問題：知識庫更新時要重建完整索引 → 系統停機\n解法：增量更新索引 → 只更新有異動的部分\n\n問題：引用到舊版內容\n解法：索引管理加版本控制，確保檢索到最新版'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「法規更新」+「需重建索引導致停機」+「引用舊版」\n→ 導入增量更新的索引管理方式\n\n不是「增加推論資源」（那解決的是速度不是更新）。\n不是「調整輸出限制」（那是防幻覺不是防過時）。\n不是「固定問答表」（失去 RAG 的彈性）。'
          }
        ]
      }
    },
    {
      number: 27,
      title: '梯度消失',
      engTitle: 'Vanishing Gradient Problem',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'trending_down',
            content: '深層神經網路訓練時，梯度（告訴模型怎麼調整的訊號）在反向傳播過程中越來越小，最後趨近於零。導致前面幾層幾乎學不到東西。'
          },
          {
            label: '為什麼會發生',
            icon: 'help_outline',
            code: '反向傳播時梯度要逐層往回乘：\n\n層10 → 層9 → 層8 → ... → 層1\n  ×0.3  ×0.3  ×0.3      ×0.3\n\n0.3 的 10 次方 = 0.000006\n→ 到第 1 層時梯度幾乎為零\n→ 參數幾乎不更新 = 學不到東西'
          },
          {
            label: '解決方法',
            icon: 'build',
            code: '1. 改用 ReLU 激活函數\n   → 正數梯度 = 1，不會越乘越小\n2. 殘差連接（ResNet 的 Skip Connection）\n   → 梯度可以「跳過」中間層直接傳到前面\n3. LSTM 的閘門機制\n   → 控制梯度流動，防止消失\n4. 批次正規化（Batch Normalization）\n   → 穩定每層的輸入分佈'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「訓練誤差長時間未下降」+「參數更新幅度極小」+「學習停滯」→ 梯度消失。\n\n解法：「調整啟動函數（激活函數）」→ 例如從 Sigmoid 換成 ReLU。\n\n不是「延長訓練時間」（梯度為零再怎麼練都沒用）。\n不是「增加資料量」（問題在梯度不在資料）。\n不是「簡化模型」（那是解決過擬合的）。'
          }
        ]
      }
    }
  ]
}
