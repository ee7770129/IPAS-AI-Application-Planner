/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：nn-dl-part2.js
 * 功能：神經網路與深度學習（第 16-29 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
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
    },
    {
      number: 28,
      title: '災難性遺忘',
      engTitle: 'Catastrophic Forgetting',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'psychology_alt',
            content: '對預訓練模型進行微調（Fine-tuning）時，模型過度適應新資料，導致原本學到的廣泛知識被「覆蓋」掉。就像一個通才被訓練成專才後，反而忘了原本會的東西。'
          },
          {
            label: '發生過程',
            icon: 'build',
            code: '預訓練模型（什麼都懂一點）\n  ↓ 微調（用醫療資料訓練）\n微調後模型\n  ✓ 醫療任務變強了\n  ✗ 但原本會的通用能力變差了\n\n例：\n  GPT 預訓練後能寫詩、寫程式、翻譯\n  ↓ 只用法律文件微調\n  微調後法律任務變強\n  但寫詩和程式碼能力大幅退化\n\n→ 新知識「覆蓋」了舊知識'
          },
          {
            label: '怎麼避免',
            icon: 'shield',
            code: '1. 凍結部分層（Freeze Layers）\n   只微調最後幾層，保留底層通用特徵\n\n2. 彈性權重合併（EWC）\n   對重要的舊權重加懲罰，不讓它改太多\n\n3. 混合訓練資料\n   微調時混入一些原始預訓練資料\n\n4. 低秩適應（LoRA）\n   只訓練少量額外參數，不動原始權重'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「微調後出現災難性遺忘，最可能造成什麼？」\n→ 模型過度適應微調資料，遺忘預訓練的廣泛知識，在原有任務上表現變差。\n\n不是：\n- 「無法收斂」→ 那是訓練不足\n- 「表現隨機」→ 那是沒學到東西\n- 「無法處理長文字」→ 那是架構限制'
          }
        ]
      }
    },
    {
      number: 29,
      title: '剪枝',
      engTitle: 'Pruning',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'content_cut',
            content: '把訓練好的模型中「影響較小或冗餘」的權重參數移除掉，讓模型變小、推理變快，同時盡量不損失準確度。就像修剪樹枝，把不重要的枝葉剪掉。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '原始模型（參數很多，又大又慢）\n  ↓ 評估每個權重的重要性\n  ↓ 移除不重要的權重（設為 0）\n  ↓ 可選：重新微調恢復準確度\n剪枝後模型（更小更快）\n\n例：\n  原始模型：10 億參數，推理 500ms\n  剪枝 50%：5 億參數，推理 280ms\n  準確度只下降 0.3%\n\n常見策略：\n  非結構化剪枝 → 移除個別權重\n  結構化剪枝   → 移除整個神經元/層'
          },
          {
            label: '跟其他壓縮方法比較',
            icon: 'compare',
            code: '剪枝（Pruning）\n  → 移除冗餘權重，模型變小\n\n量化（Quantization）\n  → 降低精度（32位→8位），減少記憶體\n\n知識蒸餾（Knowledge Distillation）\n  → 用大模型教小模型，訓練出精簡版'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「剪枝的核心概念是什麼？」\n→ 移除模型中影響較小或冗餘的權重參數，減少模型大小並提升推理效率。\n\n不是：\n- 「按比例縮小所有權重」→ 那是正則化的效果\n- 「凍結部分權重」→ 那是微調策略\n- 「動態跳過部分 Token」→ 那是稀疏注意力'
          }
        ]
      }
    }
]
