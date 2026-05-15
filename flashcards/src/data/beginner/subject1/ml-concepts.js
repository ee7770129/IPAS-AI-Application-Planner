/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ml-concepts.js
 * 功能：機器學習概念 - 卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'ml-concepts',
  label: '機器學習概念',
  cards: [
    {
      number: 1,
      title: '監督式學習',
      engTitle: 'Supervised Learning',
      back: {
        sections: [
          { label: '是什麼', icon: 'school', content: '用「有標準答案」的資料來訓練模型。每筆資料都有輸入（特徵）和正確輸出（標籤），模型學習兩者的對應關係。' },
          { label: '兩大任務', icon: 'category', code: '分類（Classification）\n  → 預測類別，例：這封信是不是垃圾郵件？\n\n迴歸（Regression）\n  → 預測數值，例：這間房子值多少錢？' },
          { label: '關鍵字', icon: 'key', content: '有標籤（Labeled Data）、有標準答案、學輸入與輸出的對應。' },
          { label: '考試重點', icon: 'school', content: '情境：「擁有已標記的歷史資料」+「自動判斷新資料的類別」→ 監督式學習分類問題。\n\n例：銀行有標好「正常/洗錢」的交易資料 → 訓練分類模型自動辨識新交易。\n\n關鍵判斷：有標籤 → 監督式。沒標籤 → 非監督式。有一點標籤 → 半監督式。' }
        ]
      }
    },
    {
      number: 2,
      title: '非監督式學習',
      engTitle: 'Unsupervised Learning',
      back: {
        sections: [
          { label: '是什麼', icon: 'explore', content: '用「沒有標準答案」的資料來訓練。模型自己去發現資料裡的隱藏結構或分群。' },
          { label: '常見任務', icon: 'category', code: '分群（Clustering）\n  → 自動把相似的資料歸在一起\n  例：客戶分群（高消費 vs 低消費）\n\n降維（Dimensionality Reduction）\n  → 把高維資料壓縮成低維，保留重要資訊\n  例：PCA 主成分分析' },
          { label: '跟監督式的差別', icon: 'compare', code: '監督式   → 有標籤，學「輸入→輸出」\n非監督式 → 無標籤，學「資料的結構」' },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「下列何者不符合非監督式學習的典型特徵？」\n\n正確特徵：自動分群、不需標籤、探索隱含模式。\n不符合的：「學習輸入與既定目標標記的對應關係」→ 那是監督式學習。\n\n記法：非監督式 = 沒有標準答案，自己找規律。有「標記」「標籤」「目標」這些字就是監督式。'
          }
        ]
      }
    },
    {
      number: 3,
      title: '資料分群',
      engTitle: 'Data Clustering',
      back: {
        sections: [
          { label: '是什麼', icon: 'bubble_chart', content: '把相似的資料自動歸成一組，不需要事先給標籤。屬於非監督式學習的典型任務。' },
          { label: '常見方法', icon: 'build', code: 'K-Means    → 指定分 K 群，依距離歸類\n層次聚類   → 由下而上逐步合併\nDBSCAN     → 依密度分群，能抓出離群點' },
          { label: '注意', icon: 'warning', content: '分群是把「相似資料歸在一起」，不是把「類別型特徵轉成數字」。要轉類別型特徵應該用 One-hot 編碼。' }
        ]
      }
    },
    {
      number: 4,
      title: '線性迴歸',
      engTitle: 'Linear Regression',
      back: {
        sections: [
          { label: '是什麼', icon: 'show_chart', content: '找一條直線，盡可能貼合所有資料點，用來預測連續數值。' },
          { label: '怎麼用', icon: 'build', code: 'Y = aX + b\n\nX = 房屋坪數\nY = 預測房價\n\n模型學到 a（斜率）和 b（截距），\n之後給新的坪數就能預測價格' },
          { label: '優缺點', icon: 'balance', tags: [{ type: 'pro', text: '優點：簡單易懂、計算快' }, { type: 'con', text: '缺點：只能抓線性關係，複雜模式學不到' }] },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「稀疏類別特徵 + 數值特徵 + 記憶已知組合 + 泛化未知組合」→ 不是線性迴歸（太簡單，做不到）→ 選寬深模型。\n\n線性迴歸只能處理線性關係，遇到複雜的特徵交互就不行了。'
          }
        ]
      }
    },
    {
      number: 5,
      title: '決策樹',
      engTitle: 'Decision Tree',
      back: {
        sections: [
          { label: '是什麼', icon: 'account_tree', content: '像流程圖一樣，一層一層問問題，根據答案往左或往右走，最後到達葉節點得到結果。' },
          { label: '範例', icon: 'table_chart', code: '要不要出門？\n│\n├─ 下雨？\n│   ├─ 是 → 帶傘出門\n│   └─ 否 → 直接出門\n└─ 溫度 > 35度？\n    ├─ 是 → 待在家\n    └─ 否 → 出門' },
          { label: '優缺點', icon: 'balance', tags: [{ type: 'pro', text: '優點：直覺好懂、可解釋性高' }, { type: 'con', text: '缺點：容易過擬合，對新資料泛化能力較差' }] },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「稀疏類別 + 數值混合特徵 + 需要記憶和泛化」→ 不是決策樹。決策樹可解釋性高但泛化能力有限。\n\n另一個考法：決策樹容易過擬合 → 解法是用隨機森林（多棵樹投票）。'
          }
        ]
      }
    },
    {
      number: 6,
      title: '支援向量機',
      engTitle: 'Support Vector Machine, SVM',
      back: {
        sections: [
          { label: '是什麼', icon: 'linear_scale', content: '找一個「最佳分界線（超平面）」，把兩類資料分開，而且讓分界線離兩邊最近的資料點距離最大。' },
          { label: '核心概念', icon: 'lightbulb', code: '支援向量 → 離分界線最近的那幾個資料點\n間隔（Margin）→ 分界線到支援向量的距離\n\nSVM 的目標：讓間隔最大化' },
          { label: '特點', icon: 'star', content: '在高維空間和小樣本情況下表現好，但資料量很大時訓練速度慢。可以用核函數（Kernel）處理非線性問題。' },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「稀疏類別 + 數值混合 + 記憶已知 + 泛化未知」→ 不是 SVM。SVM 擅長小樣本分類，不擅長同時處理記憶和泛化。\n\n另一個考法：「缺乏異常標註」→ 一般 SVM 需要兩類標籤（監督式），不適合無標籤的異常偵測（除非用 One-Class SVM）。'
          }
        ]
      }
    },
    {
      number: 7,
      title: '寬深模型',
      engTitle: 'Wide and Deep Model',
      back: {
        sections: [
          { label: '是什麼', icon: 'view_stream', content: '結合「寬模型」和「深模型」的混合架構，同時具備記憶力和泛化力。Google 提出，常用於推薦系統。' },
          { label: '兩部分各做什麼', icon: 'build', code: '寬（Wide）部分：\n  線性模型 + 特徵交叉\n  → 記住歷史已出現的特徵組合\n  → 例：「台北+吃到飽」流失率高\n\n深（Deep）部分：\n  深度神經網路\n  → 對未見過的特徵組合做泛化預測\n  → 例：新的「高雄+日租型」也能推測' },
          { label: '優點', icon: 'lightbulb', content: '同時學到「已知規律」（記憶）和「未知組合」（泛化），比單一模型更適合稀疏類別 + 數值型混合特徵的場景。' },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「稀疏類別特徵 + 數值型特徵」+「記憶已知組合」+「泛化未知組合」→ 寬深模型。\n\n寬 = 記憶（特徵交叉，記住歷史組合）\n深 = 泛化（神經網路，推測新組合）\n\n線性迴歸/決策樹/SVM 都只能做其中一件事，寬深模型兩件都做。'
          }
        ]
      }
    },
    {
      number: 8,
      title: '隨機森林',
      engTitle: 'Random Forest',
      back: {
        sections: [
          { label: '是什麼', icon: 'forest', content: '同時建很多棵決策樹，每棵樹各自投票，最後以「多數決」決定結果。屬於集成學習（Ensemble Learning）。' },
          { label: '怎麼做', icon: 'build', code: '1. 從訓練資料隨機抽樣，建 N 棵決策樹\n2. 每棵樹只用一部分特徵（增加多樣性）\n3. 所有樹各自預測，最後投票\n\n分類 → 多數決\n迴歸 → 取平均值' },
          { label: '優缺點', icon: 'balance', tags: [{ type: 'pro', text: '優點：不容易過擬合、能處理高維資料、可評估特徵重要性' }, { type: 'con', text: '缺點：模型較大、訓練時間較長、不如單棵樹好解釋' }] }
        ]
      }
    },
    {
      number: 9,
      title: 'K-近鄰演算法',
      engTitle: 'K-Nearest Neighbors, KNN',
      back: {
        sections: [
          { label: '是什麼', icon: 'group', content: '看新資料的「K 個最近鄰居」都是什麼類別，就把新資料歸到最多鄰居的那一類。' },
          { label: '範例', icon: 'table_chart', code: '設 K = 3，新資料附近最近的 3 個點：\n\n鄰居1：貓\n鄰居2：狗\n鄰居3：貓\n\n→ 2票貓 vs 1票狗 → 預測為「貓」' },
          { label: '特點', icon: 'lightbulb', content: '不需要訓練過程（懶惰學習），直接拿訓練資料比對。K 值太小容易受雜訊影響，太大會模糊邊界。資料量大時預測很慢。' }
        ]
      }
    },
    {
      number: 10,
      title: '貝氏網路',
      engTitle: 'Bayesian Network',
      back: {
        sections: [
          { label: '是什麼', icon: 'hub', content: '用「機率圖模型」來表達變數之間的因果或相依關係。每個節點是一個變數，箭頭代表影響方向。' },
          { label: '核心概念', icon: 'lightbulb', code: '基於貝氏定理：\nP(A|B) = P(B|A) * P(A) / P(B)\n\n「已知 B 發生了，A 發生的機率是多少？」\n\n例：已知病人咳嗽（B），得流感（A）的機率？' },
          { label: '應用', icon: 'medical_services', content: '醫療診斷、風險評估、故障診斷等需要處理「不確定性」和「因果推理」的場景。不適合拿來生成圖像。' }
        ]
      }
    },
    {
      number: 11,
      title: '二分搜尋',
      engTitle: 'Binary Search',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'search',
            content: '在「已排序」的資料中快速找目標值。每次比較中間值，就能砍掉一半的搜尋範圍，所以非常快。'
          },
          {
            label: '怎麼做（實際走一遍）',
            icon: 'build',
            code: '陣列：[3, 8, 14, 19, 21, 27, 33, 45, 52]\n目標：找 27\n\n第1次：中間 = 21 → 27 > 21 → 往右半找\n  剩 [27, 33, 45, 52]\n第2次：中間 = 33 → 27 < 33 → 往左半找\n  剩 [27]\n第3次：中間 = 27 → 找到了！\n\n→ 只比較 3 次就找到'
          },
          {
            label: '效率',
            icon: 'speed',
            content: '時間複雜度 O(log n)。1000 筆資料最多只要比較 10 次，100 萬筆也只要 20 次。\n\n前提：資料必須先排好序。沒排序就不能用二分搜尋。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常給你一個排序陣列和目標值，要你算「最多比較幾次」。方法：每次比中間值，砍一半，數幾輪就是答案。\n\n跟線性搜尋比較：線性搜尋一個一個找 O(n)，二分搜尋砍半找 O(log n)。'
          }
        ]
      }
    },
    {
      number: 12,
      title: '強化學習',
      engTitle: 'Reinforcement Learning, RL',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'sports_esports',
            content: '讓 AI（代理人）在環境中「試錯」，做對了就給獎勵、做錯了就給懲罰，逐漸學會最佳策略。不需要標準答案，靠回饋自己學。'
          },
          {
            label: '核心概念',
            icon: 'build',
            code: '代理人（Agent）→ 做決策的 AI\n環境（Environment）→ AI 所處的世界\n狀態（State）→ 當前的情況\n動作（Action）→ AI 選擇做什麼\n獎勵（Reward）→ 做了之後得到的回饋\n\n流程：觀察狀態 → 選擇動作 → 得到獎勵 → 更新策略 → 重複'
          },
          {
            label: '跟監督式/非監督式的差別',
            icon: 'compare',
            code: '監督式   → 有標準答案，老師直接告訴你對錯\n非監督式 → 沒有答案，自己找規律\n強化學習 → 沒有答案，但有獎懲回饋，自己摸索最佳策略'
          },
          {
            label: '應用',
            icon: 'rocket',
            content: '遊戲 AI（AlphaGo）、機器人控制、自動駕駛、物流車隊調度、推薦系統。適合需要「在動態環境中做連續決策」的場景。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常考核心機制：「調整策略函數以改變行動選擇機率」是強化學習的核心。\n不是「更新訓練資料分布」（那偏向監督式）\n不是「重新分群」（那是非監督式）\n不是「建立正確標籤」（那也是監督式）'
          }
        ]
      }
    },
    {
      number: 13,
      title: '策略函數',
      engTitle: 'Policy Function',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'tune',
            content: '強化學習中，決定「在某個狀態下該採取哪個動作」的函數。它就是 AI 的「決策規則」。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '策略 π(狀態) → 動作的機率分佈\n\n例：物流調度\n狀態：路上塞車 + 貨物緊急\n\n策略函數輸出：\n  走高速公路 → 70%（機率最高，選這個）\n  走平面道路 → 20%\n  等待       → 10%\n\n隨著學習，策略會調整機率，讓好的動作被更常選到'
          },
          {
            label: '為什麼重要',
            icon: 'lightbulb',
            content: '強化學習的目標就是找到「最佳策略函數」，讓累積獎勵最大化。訓練過程就是不斷調整策略函數的參數。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「調整策略函數以改變行動選擇機率」= 強化學習的核心機制。考題會用「更新資料分布」「重新分群」「建立標籤」來混淆，這些都不是強化學習。'
          }
        ]
      }
    },
    {
      number: 14,
      title: '過擬合',
      engTitle: 'Overfitting',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'error',
            content: '模型把訓練資料「背」得太好，連雜訊和噪聲都學進去了，結果在新的、沒見過的資料上表現很差。就像學生只會背考古題，遇到新題目就不會。'
          },
          {
            label: '怎麼判斷',
            icon: 'troubleshoot',
            code: '訓練準確率：98% ← 超高\n測試準確率：72% ← 差很多\n\n差距越大 → 過擬合越嚴重\n\n理想情況：兩者都高且接近\n例：訓練 92% / 測試 90% → 健康'
          },
          {
            label: '怎麼解決',
            icon: 'build',
            code: '1. 資料增強（Data Augmentation）\n   → 旋轉、翻轉、裁切訓練圖片，增加多樣性\n2. 正則化（Regularization）\n   → 限制模型參數不要太大\n3. Dropout\n   → 訓練時隨機關掉一些神經元\n4. 減少模型複雜度\n   → 用簡單一點的模型\n5. 增加訓練資料\n   → 資料越多，越不容易背答案'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常給你「訓練 98% / 測試 72%」這種情境，問你怎麼辦。\n\n正確答案通常是「資料增強」或「正則化」。\n錯誤選項：「增加模型深度」→ 會讓過擬合更嚴重。\n「只保留表現好的資料」→ 等於減少多樣性，更慘。\n「提高訓練速度」→ 跟過擬合無關。'
          }
        ]
      }
    },
    {
      number: 15,
      title: '異常偵測',
      engTitle: 'Anomaly Detection',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'report_problem',
            content: '找出資料中「不正常」的東西。跟分類不同的是，異常偵測通常只有「正常資料」可以學，沒有（或很少）異常資料的標籤。'
          },
          {
            label: '常見方法',
            icon: 'build',
            code: '1. VAE（變分自編碼器）\n   → 學正常資料的分佈\n   → 新資料「還原誤差」太大 = 異常\n\n2. Isolation Forest\n   → 異常點容易被「隔離」（分割次數少）\n\n3. 統計方法\n   → Z-score、IQR 抓離群值\n\n4. One-Class SVM\n   → 只用正常資料畫邊界'
          },
          {
            label: '為什麼不用一般分類？',
            icon: 'help_outline',
            content: '因為異常資料太少（甚至沒有標籤）。一般分類（SVM、決策樹）需要「正常」和「異常」兩類資料來訓練，但現實中異常案例可能極少或無法事先標註。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '關鍵情境：「缺乏異常標註資料」+ 要偵測異常 → VAE 或無監督方法。\n\nSVM/決策樹需要標籤資料（監督式），不適合「缺乏標註」的情境。\nGAN 是生成模型，不是拿來「偵測」異常的。\nVAE 可以只用正常資料訓練，新資料還原不好 = 異常。'
          }
        ]
      }
    },
    {
      number: 16,
      title: '半監督式學習',
      engTitle: 'Semi-supervised Learning',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'school',
            content: '同時利用「少量有標籤」和「大量無標籤」的資料來訓練模型。介於監督式和非監督式之間，是現實中最常見的情況。'
          },
          {
            label: '為什麼需要',
            icon: 'help_outline',
            code: '現實問題：\n  蒐集資料很容易 → 拍大量照片不難\n  標註資料很貴    → 請專家逐張標記病害很花時間\n\n結果：\n  有標籤的：30%（花錢標的）\n  沒標籤的：70%（收集到但沒標的）\n\n全丟掉太浪費 → 半監督式學習讓兩邊都能用'
          },
          {
            label: '怎麼做',
            icon: 'build',
            content: '常見方法：\n1. 先用有標籤的資料訓練初步模型\n2. 用初步模型對無標籤資料做預測（偽標籤）\n3. 把高信心的偽標籤資料加回訓練\n4. 重複，模型越來越好'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「部分資料有標籤 + 大量沒標籤」+「想充分利用所有資料」→ 半監督式學習。\n\n監督式 → 全部有標籤\n非監督式 → 全部沒標籤\n半監督式 → 一部分有、大部分沒有\n強化學習 → 靠獎懲回饋，跟標籤無關'
          }
        ]
      }
    },
    {
      number: 17,
      title: '可解釋AI',
      engTitle: 'Explainable AI, XAI',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'visibility',
            content: '讓 AI 的決策過程「看得懂」的技術。黑盒模型（如深度學習）很準但沒人知道它怎麼想的，XAI 就是要打開這個黑盒。'
          },
          {
            label: '為什麼重要',
            icon: 'gavel',
            content: '法規要求（金融、醫療）、建立使用者信任、除錯找問題、確保公平性。如果模型拒絕貸款申請，客戶有權知道「為什麼」。'
          },
          {
            label: '兩大類',
            icon: 'category',
            code: '內建可解釋（Intrinsic）\n  模型本身就透明\n  例：決策樹、線性迴歸 → 看得到規則\n\n後處理解釋（Post-hoc）\n  模型是黑盒，事後用工具解釋\n  例：LIME、SHAP、顯著性圖\n  → 不改模型，從外部分析'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'LIME 和 SHAP 都屬於「後處理」（post-hoc）解釋。它們不改變模型，而是分析已訓練好的模型。\n\n不要跟「代理模型」搞混：代理模型是用簡單模型「取代」黑盒模型做推論，而 LIME 只是「解釋」黑盒模型。'
          }
        ]
      }
    },
    {
      number: 18,
      title: 'LIME',
      engTitle: 'Local Interpretable Model-agnostic Explanations',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'zoom_in',
            content: '針對「單一預測」做解釋的 XAI 技術。在目標資料點附近產生一堆擾動樣本，用簡單模型擬合局部行為，看哪些特徵最重要。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '1. 選一筆要解釋的資料（例：某人被拒貸）\n2. 在這筆資料附近隨機產生很多「類似」的資料\n3. 把這些資料丟進黑盒模型得到預測\n4. 用簡單模型（如線性迴歸）擬合這些結果\n5. 看簡單模型的係數 → 就知道哪些特徵最重要\n\n→ 用局部的簡單模型解釋黑盒的局部行為'
          },
          {
            label: '三大特點',
            icon: 'lightbulb',
            code: 'Local    → 只解釋單一預測（局部）\nInterpretable → 解釋方式人看得懂\nModel-agnostic → 不管什麼模型都能用（黑盒通用）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'LIME 屬於「後處理模型解釋」（post-hoc），不是「內建可解釋」也不是「代理模型取代推論」。\n\nLIME 是在局部用簡單模型「解釋」黑盒，不是用簡單模型「取代」黑盒。'
          }
        ]
      }
    },
    {
      number: 19,
      title: 'SHAP',
      engTitle: 'SHapley Additive exPlanations',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'pie_chart',
            content: '基於賽局理論的 Shapley Value，計算每個特徵對「單一預測結果」的貢獻度。告訴你這次預測中，每個特徵是「幫忙」還是「扯後腿」。'
          },
          {
            label: '怎麼理解',
            icon: 'build',
            code: '預測結果：某人被拒貸（風險分數 0.85）\n\nSHAP 值分析：\n  年收入低    → +0.30（推高風險）\n  信用紀錄差  → +0.25（推高風險）\n  房產有      → -0.15（降低風險）\n  年齡        → +0.05（略推高風險）\n\n每個特徵的 SHAP 值加總 = 最終預測值\n→ 可以精確說「為什麼這個人被拒貸」'
          },
          {
            label: '跟 LIME 的差別',
            icon: 'compare',
            code: 'LIME → 局部擾動 + 簡單模型擬合（近似值）\nSHAP → 基於數學理論精確計算（有理論保證）\n\n兩者都是 post-hoc、model-agnostic\n但 SHAP 的結果有數學一致性保證'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'SHAP 的核心功能：「在單一預測中，各特徵對最終輸出的貢獻分配」。\n\n不是看「訓練過程的損失收斂」（那是訓練指標）。\n不是「自動篩除特徵」（那是特徵選擇）。\n不是「降低計算複雜度」（那是模型壓縮）。'
          }
        ]
      }
    },
    {
      number: 20,
      title: '反事實解釋',
      engTitle: 'Counterfactual Explanation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'swap_horiz',
            content: '回答「如果某些條件不同，結果會不會改變？」的解釋方法。不改模型，只改輸入，看最小的改變能不能翻轉結果。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: '原始情境：小明被拒貸\n  年收入：40 萬\n  信用分數：550\n  負債比：60%\n\n反事實解釋：\n  「如果你的年收入從 40 萬提升到 55 萬，\n   且負債比從 60% 降到 45%，\n   模型就會核准你的貸款。」\n\n→ 告訴你「最少要改什麼」才能得到不同結果'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '反事實解釋的核心：「模型不變，改變輸入條件，看對決策結果的影響」。\n\n不是分析整體風險分佈（那是統計分析）。\n不是回溯歷史找原因（那是診斷性分析）。\n不是推薦商品（那是推薦系統）。'
          }
        ]
      }
    },
    {
      number: 21,
      title: '學習方法配對總結',
      engTitle: 'ML Type Matching',
      back: {
        sections: [
          {
            label: '怎麼判斷用哪種學習',
            icon: 'account_tree',
            tree: '有沒有標籤？\n│\n├─ 全部有標籤\n│   └─ 監督式學習\n│       ├─ 預測類別 → 分類\n│       └─ 預測數值 → 迴歸\n│\n├─ 部分有標籤\n│   └─ 半監督式學習\n│\n├─ 完全沒標籤\n│   └─ 非監督式學習\n│       ├─ 找相似群組 → 分群\n│       └─ 找趨勢型態 → 模式發現\n│\n└─ 靠獎懲回饋\n    └─ 強化學習'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常故意把情境和學習方法配錯：\n- 「少量標註 + 大量未標註」→ 半監督式（不是監督式）\n- 「有點擊標籤預測偏好」→ 監督式（不是非監督式）\n- 「損失當回饋調整策略」→ 強化學習（不是監督式）\n- 「無標註找趨勢型態」→ 非監督式'
          }
        ]
      }
    },
    {
      number: 22,
      title: 'F1-score',
      engTitle: 'F1-score',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '精確率（Precision）和召回率（Recall）的調和平均數。在類別不平衡時，比 Accuracy 更能反映模型對「少數類別」的辨識能力。'
          },
          {
            label: '先懂這兩個',
            icon: 'build',
            code: '精確率（Precision）\n  模型說「是瑕疵」的裡面，真的是瑕疵的比例\n  → 「說是的準不準」\n\n召回率（Recall）\n  所有真正的瑕疵中，被模型找到的比例\n  → 「漏掉多少」\n\nF1 = 2 * (Precision * Recall) / (Precision + Recall)\n→ 兩者都要好，F1 才會高'
          },
          {
            label: '為什麼不用 Accuracy',
            icon: 'warning',
            code: '瑕疵品只佔 1%：\n\n模型全猜「正常」→ Accuracy = 99% （看起來超準）\n但瑕疵品一個都沒抓到 → Recall = 0%\n→ F1-score 接近 0（真實表現很差）\n\nAccuracy 被多數類別灌水，F1 不會'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「類別不平衡」+「衡量少數類別辨識能力」→ F1-score。\n\nAccuracy 在不平衡時會被灌水，不可靠。\nRMSE 和 R² 是迴歸指標，不適用分類。'
          }
        ]
      }
    },
    {
      number: 23,
      title: '準確率',
      engTitle: 'Accuracy',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '所有預測中，猜對的比例。最直覺的分類指標，但在類別不平衡時會騙人。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: 'Accuracy = 猜對的筆數 / 全部筆數\n\n例：100 筆中猜對 92 筆\nAccuracy = 92%'
          },
          {
            label: '陷阱',
            icon: 'warning',
            content: '當資料嚴重不平衡時，Accuracy 會騙人：\n\n1000 筆資料中只有 10 筆瑕疵\n模型全猜「正常」→ Accuracy = 99%\n但瑕疵一個都沒抓到 → 完全沒用\n\n所以不平衡時要看 F1-score，不要只看 Accuracy。'
          }
        ]
      }
    },
    {
      number: 24,
      title: '均方根誤差',
      engTitle: 'Root Mean Squared Error, RMSE',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '衡量迴歸模型預測值和真實值之間差距的指標。RMSE 越小表示預測越準。單位跟原始資料相同。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: 'RMSE = 根號( 平均( (預測值 - 真實值)² ) )\n\n例：預測房價\n真實：100萬, 150萬, 200萬\n預測：110萬, 145萬, 190萬\n\n→ RMSE 代表「平均偏離多少萬元」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'RMSE 是「迴歸」指標，用來衡量預測數值的誤差。\n不適合用在「分類」問題上（分類用 Accuracy、F1-score）。\n\n題目問「類別不平衡的分類」時，不要選 RMSE。'
          }
        ]
      }
    },
    {
      number: 25,
      title: 'R² 判定係數',
      engTitle: 'R-squared, Coefficient of Determination',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '衡量迴歸模型「解釋了多少資料變異」的指標。R² = 1 表示完美預測，R² = 0 表示模型跟用平均值猜一樣差。'
          },
          {
            label: '怎麼理解',
            icon: 'lightbulb',
            code: 'R² = 0.85\n→ 模型解釋了 85% 的資料變異\n→ 剩下 15% 是模型無法解釋的\n\nR² = 1.0 → 完美（不太可能）\nR² = 0.0 → 跟用平均值猜一樣\nR² < 0   → 比用平均值猜還差（模型有問題）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'R² 是「迴歸」指標，不是分類指標。\n\n類別不平衡的分類問題 → 用 F1-score\n預測連續數值的迴歸問題 → 用 RMSE 或 R²'
          }
        ]
      }
    },
    {
      number: 26,
      title: '模型評估指標總結',
      engTitle: 'Evaluation Metrics',
      back: {
        sections: [
          {
            label: '怎麼選指標',
            icon: 'account_tree',
            tree: '什麼任務？\n│\n├─ 分類問題\n│   ├─ 類別平衡 → Accuracy 就夠\n│   └─ 類別不平衡 → F1-score（看少數類別）\n│\n└─ 迴歸問題\n    ├─ 看誤差大小 → RMSE（單位同原始資料）\n    └─ 看解釋力 → R²（0~1，越高越好）'
          }
        ]
      }
    },
    {
      number: 27,
      title: '自監督式學習',
      engTitle: 'Self-supervised Learning',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'self_improvement',
            content: '利用資料本身自動產生訓練目標，不需要人工標註。模型自己從資料中「出題考自己」。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '常見方式：\n\n文字：把句子遮住一個字，讓模型猜\n  「我喜歡吃 [MASK]」→ 預測「蘋果」\n  （BERT 的做法）\n\n文字：預測下一個字\n  「我喜歡吃」→ 預測「蘋果」\n  （GPT 的做法）\n\n圖片：遮住圖片一部分，讓模型還原\n  （MAE 的做法）\n\n→ 標籤從資料本身產生，不需要人標'
          },
          {
            label: '跟其他學習的差別',
            icon: 'compare',
            code: '監督式     → 人工標註答案\n自監督式   → 資料自己產生答案（不需人標）\n非監督式   → 不需答案，找結構\n半監督式   → 一部分有人標、一部分沒有'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題陷阱：\n- 「自監督式跟監督式一樣需要人工標註」→ 錯！自監督不需要人標。\n- 「半監督式只用未標註資料」→ 錯！半監督兩種都用。\n- 「非監督式需預先定義正確輸出」→ 錯！非監督不需要任何標籤。'
          }
        ]
      }
    },
    {
      number: 28,
      title: '遷移學習',
      engTitle: 'Transfer Learning',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'swap_horiz',
            content: '把在 A 任務學到的知識，搬到 B 任務上用。不用從零開始訓練，就能用少量資料達到好效果。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '1. 拿一個在大量資料上訓練好的模型（預訓練模型）\n   例：ImageNet 上訓練好的 ResNet\n\n2. 把前面幾層「凍結」（保留已學到的通用特徵）\n   邊緣、紋理、形狀 → 這些特徵通用的\n\n3. 只微調最後幾層（適應新任務）\n   用少量新資料訓練\n\n→ 少量資料 + 短時間 = 好效果'
          },
          {
            label: '什麼時候用',
            icon: 'lightbulb',
            content: '新任務的標註資料很少、標註成本很高、但有相關領域的預訓練模型可用。\n\n例：A 公司有成熟的瑕疵檢測模型 → B 公司的類似產品可以用遷移學習，不用重新收集大量標註資料。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「標註樣本極少」+「標註成本高」+「有既有預訓練模型」→ 遷移學習。\n\n不是「增加模型參數」（更多參數需要更多資料）。\n不是「資料增強」（有幫助但不是利用既有模型的優勢）。\n不是「重新大量標註」（題目說預算不夠）。'
          }
        ]
      }
    },
    {
      number: 29,
      title: '結構化預測',
      engTitle: 'Structured Prediction',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'schema',
            content: '模型的輸出不是單一數值或類別，而是一個「有結構」的結果，例如一個序列、一棵樹、一張圖。輸出的各部分之間有相依關係。'
          },
          {
            label: '跟一般預測的差別',
            icon: 'compare',
            code: '一般分類：輸入 → 一個類別\n  例：這封信是不是垃圾郵件？→ 「是」\n\n一般迴歸：輸入 → 一個數值\n  例：這週需求量？→ 「500」\n\n結構化預測：輸入 → 一個結構\n  例：語音轉文字後逐詞標註\n  「我/代詞 喜歡/動詞 吃/動詞 蘋果/名詞」\n  → 每個詞都要標，而且前後標籤有關聯'
          },
          {
            label: '常見任務',
            icon: 'list',
            content: '命名實體辨識（NER）、詞性標註（POS tagging）、語意角色標注、影像分割（每個像素都標類別）。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「逐詞標註」→ 結構化預測。\n「判斷是/否」→ 一般分類。\n「預測一個數值」→ 一般迴歸。\n「判斷客戶流失」→ 一般分類。'
          }
        ]
      }
    },
    {
      number: 30,
      title: '召回率',
      engTitle: 'Recall',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'find_in_page',
            content: '所有「真正的正例」中，被模型成功找到的比例。衡量的是「有沒有漏掉」。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: 'Recall = 找到的正例 / 所有真正的正例\n\n例：100 個癌症病人，模型找到 85 個\nRecall = 85/100 = 85%\n→ 漏掉了 15 個'
          },
          {
            label: '什麼時候最重要',
            icon: 'priority_high',
            content: '「漏掉的代價很大」的時候：\n- 癌症篩檢 → 漏診一個可能致命\n- 詐欺偵測 → 漏掉一筆損失巨大\n- 安全監控 → 漏掉威脅很危險\n\n寧可多誤判幾個正常人，也不能漏掉真正的病人。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「降低漏診風險」「盡量找出所有可能的癌症患者」→ 召回率（Recall）。\n\n精準率看的是「說是的準不準」→ 不同目的。\nF1-score 是兩者的平衡。\nROC-AUC 是整體表現，不是專注在「漏掉多少」。'
          }
        ]
      }
    },
    {
      number: 31,
      title: '精準率',
      engTitle: 'Precision',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'gps_fixed',
            content: '模型預測為「正例」的那些裡面，真的是正例的比例。衡量的是「說是的準不準」。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: 'Precision = 真的是正例 / 模型說是正例的總數\n\n例：模型標記 50 封為垃圾郵件\n其中 45 封真的是垃圾，5 封是正常的\nPrecision = 45/50 = 90%'
          },
          {
            label: '什麼時候最重要',
            icon: 'priority_high',
            content: '「誤判的代價很大」的時候：\n- 垃圾郵件 → 正常信被標成垃圾很困擾\n- 刑事司法 → 冤枉無辜的人代價極大\n\n寧可漏掉幾封垃圾信，也不能把重要信件誤刪。'
          },
          {
            label: '跟召回率的取捨',
            icon: 'compare',
            code: '精準率高 → 說是的很準，但可能漏很多\n召回率高 → 很少漏掉，但可能誤判很多\n\n通常兩者互相矛盾（一個高另一個就低）\nF1-score 就是取兩者的平衡'
          }
        ]
      }
    },
    {
      number: 32,
      title: 'ROC-AUC',
      engTitle: 'ROC Curve / AUC',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'ssid_chart',
            content: 'ROC 曲線畫的是「不同門檻下，真陽性率 vs 假陽性率」的關係。AUC 是這條曲線底下的面積，越大表示模型整體分辨能力越好。'
          },
          {
            label: '怎麼理解',
            icon: 'lightbulb',
            code: 'AUC = 1.0 → 完美分辨（不可能達到）\nAUC = 0.5 → 跟隨機猜一樣差\nAUC < 0.5 → 比隨機猜還差（模型有問題）\n\n一般來說：\nAUC > 0.9 → 優秀\nAUC > 0.8 → 良好\nAUC > 0.7 → 可接受'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'ROC-AUC 看的是模型「整體分辨能力」，不是專注在某一個面向。\n\n想知道「漏掉多少」→ 看召回率\n想知道「說是的準不準」→ 看精準率\n想知道「整體好不好」→ 看 ROC-AUC\n想在不平衡下評估 → 看 F1-score'
          }
        ]
      }
    },
    {
      number: 33,
      title: '迴歸分析',
      engTitle: 'Regression Analysis',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'trending_up',
            content: '統計學中用來分析「變數之間關係」的方法。給定一組自變數（X），預測應變數（Y）的值。是監督式學習中「預測數值」的核心技術。'
          },
          {
            label: '常見類型',
            icon: 'list',
            code: '簡單線性迴歸\n  一個 X 預測一個 Y\n  Y = aX + b\n  例：用坪數預測房價\n\n多元線性迴歸\n  多個 X 預測一個 Y\n  Y = a1*X1 + a2*X2 + ... + b\n  例：用坪數+樓層+屋齡預測房價\n\n多項式迴歸\n  用曲線擬合，處理非線性關係\n  Y = aX² + bX + c\n\n邏輯迴歸（Logistic Regression）\n  名字有「迴歸」但其實是做分類\n  輸出的是「機率」（0~1）'
          },
          {
            label: '容易搞混',
            icon: 'warning',
            content: '迴歸分析是一大類方法的統稱，線性迴歸只是其中最基本的一種。\n\n另一個陷阱：邏輯迴歸（Logistic Regression）雖然名字有「迴歸」，但它是分類演算法，不是迴歸演算法。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '迴歸分析在課本中被列為 AI 技術底層的基礎演算法之一，與分類演算法、決策樹、基因演算法並列。\n\n情境判斷：\n- 「預測房價/銷量/溫度等連續數值」→ 迴歸問題\n- 「判斷是否為垃圾郵件」→ 分類問題\n\n記法：迴歸 = 預測數值，分類 = 預測類別。'
          }
        ]
      }
    },
    {
      number: 34,
      title: '邏輯迴歸',
      engTitle: 'Logistic Regression',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'toggle_on',
            content: '名字有「迴歸」但其實是分類演算法。它用 Sigmoid 函數把線性迴歸的輸出壓成 0 到 1 之間的「機率值」，再用門檻（通常 0.5）決定類別。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '線性迴歸：Y = aX + b → 輸出任意數值\n\n邏輯迴歸：\n  1. 先算線性分數 z = aX + b\n  2. 丟進 Sigmoid 函數 → 壓成 0~1 的機率\n  3. 機率 > 0.5 → 預測為「是」\n     機率 < 0.5 → 預測為「否」\n\n範例：\n  輸入：年收入、信用分數、負債比\n  輸出：核貸機率 = 0.82 → 預測「核准」'
          },
          {
            label: '容易搞混',
            icon: 'warning',
            content: '邏輯迴歸 ≠ 迴歸。它是「分類」演算法。\n\n名字裡的「迴歸」是因為它用了線性迴歸的公式當中間步驟，但最終輸出是類別（是/否），不是數值。\n\n原版只能做二元分類（兩類），要做多類別需要擴展（如 One-vs-Rest）。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題最愛考的陷阱：「邏輯迴歸是迴歸演算法」→ 錯！它是分類演算法。\n\n優點：簡單、快速、輸出有機率意義（能說「有 82% 的機率是垃圾郵件」）。\n\n缺點：只能處理線性可分的問題，複雜的非線性關係學不到。\n\nSigmoid 函數把任意數值壓到 0~1，是邏輯迴歸的核心。'
          }
        ]
      }
    },
    {
      number: 35,
      title: '線性搜尋',
      engTitle: 'Linear Search / Sequential Search',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'search',
            content: '最直覺的搜尋方法：從第一個元素開始，一個一個往後比對，找到目標就停，找不到就回報失敗。不需要資料排序。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '陣列：[27, 3, 14, 8, 21, 33, 45, 19, 52]\n目標：找 21\n\n第1次：27 ≠ 21 → 繼續\n第2次：3  ≠ 21 → 繼續\n第3次：14 ≠ 21 → 繼續\n第4次：8  ≠ 21 → 繼續\n第5次：21 = 21 → 找到了！\n\n→ 比較了 5 次才找到\n（如果用二分搜尋，排序後 3 次就找到）'
          },
          {
            label: '跟二分搜尋比較',
            icon: 'compare',
            code: '              線性搜尋        二分搜尋\n前提          不需排序        必須先排序\n搜尋方式      一個一個找      每次砍半\n時間複雜度    O(n)           O(log n)\n\n1000筆資料：\n  線性 → 最多 1000 次\n  二分 → 最多 10 次\n\n差距隨資料量增大而急劇擴大'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '線性搜尋的特點：簡單但慢，時間複雜度 O(n)。\n\n唯一優勢：不需要資料先排序。如果資料量小或只搜一次，用線性搜尋也沒差。\n\n考題常跟二分搜尋配對出現，問「哪個效率高」或「哪個不需要排序」。'
          }
        ]
      }
    },
    {
      number: 36,
      title: '深度優先搜尋',
      engTitle: 'Depth-First Search, DFS',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'arrow_downward',
            content: '在樹狀或圖形結構中搜尋的方法。策略是「先往深處鑽到底，走不下去再回頭」。就像走迷宮時一條路走到底，碰壁才退回來換另一條路。'
          },
          {
            label: '怎麼走',
            icon: 'build',
            code: '       A\n      / \\\n     B   C\n    / \\   \\\n   D   E   F\n\nDFS 走法（從 A 開始）：\nA → B → D（到底了，回頭）\n       → E（到底了，回頭到A）\n  → C → F（到底了，結束）\n\n走訪順序：A, B, D, E, C, F\n\n特點：先把一條路走到底，再換下一條'
          },
          {
            label: '跟 BFS 的差別',
            icon: 'compare',
            code: 'DFS → 一條路走到底再回頭（深度優先）\nBFS → 一層一層往外擴散（廣度優先）\n\n用 DFS：找「是否存在路徑」「迷宮求解」\n用 BFS：找「最短路徑」「最少步數」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'DFS 的關鍵字：「沿著一條路徑儘可能深地搜尋」「回溯」。\n\n使用堆疊（Stack）或遞迴實作。\n\n適用場景：圖的連通性檢查、拓撲排序、迷宮求解。'
          }
        ]
      }
    },
    {
      number: 37,
      title: '廣度優先搜尋',
      engTitle: 'Breadth-First Search, BFS',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'unfold_more',
            content: '在樹狀或圖形結構中搜尋的方法。策略是「一層一層往外擴散」。就像把石頭丟進水裡，波紋一圈一圈往外擴。'
          },
          {
            label: '怎麼走',
            icon: 'build',
            code: '       A\n      / \\\n     B   C\n    / \\   \\\n   D   E   F\n\nBFS 走法（從 A 開始）：\n第1層：A\n第2層：B, C\n第3層：D, E, F\n\n走訪順序：A, B, C, D, E, F\n\n特點：同一層的全部走完，才往下一層'
          },
          {
            label: '為什麼能找最短路徑',
            icon: 'lightbulb',
            content: 'BFS 一層一層擴散，第一次碰到目標時，走的步數一定是最少的。所以 BFS 天生適合找「最短路徑」或「最少步數」。\n\nDFS 不行，因為它可能先走了一條很長的路才找到目標。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'BFS 的關鍵字：「首先訪問所有相鄰節點」「一層一層擴散」。\n\n使用佇列（Queue）實作。\n\nDFS vs BFS 比較：\n- DFS 用 Stack，先深後廣\n- BFS 用 Queue，先廣後深\n- 找最短路徑 → BFS\n- 找是否存在路徑 → DFS 或 BFS 都行'
          }
        ]
      }
    },
    {
      number: 38,
      title: '集成學習方法',
      engTitle: 'Ensemble Methods',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'groups',
            content: '結合多個模型的預測結果，得到比單一模型更準確、更穩定的結果。核心思想：「三個臭皮匠勝過一個諸葛亮」。'
          },
          {
            label: '三大方法',
            icon: 'format_list_numbered',
            code: 'Bagging（裝袋法）\n  多個模型各自獨立訓練，最後投票/平均\n  代表：隨機森林（Random Forest）\n  效果：降低變異，減少過擬合\n\nBoosting（提升法）\n  模型串聯，每個新模型專注修正前一個的錯誤\n  代表：GBM、XGBoost、LightGBM\n  效果：降低偏差，提升準確度\n\nStacking（堆疊法）\n  多個不同模型的預測結果，再用一個模型整合\n  像是「多位專家意見交給主管做最終決定」'
          },
          {
            label: '為什麼有效',
            icon: 'lightbulb',
            content: '單一模型可能在某些區域犯錯，但不同模型犯錯的地方通常不一樣。把它們的結果合在一起，錯誤會被「抵消」掉，整體表現就更好。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '隨機森林 = Bagging + 決策樹（已有卡片）。\nXGBoost = Boosting + 決策樹（Kaggle 競賽常勝軍）。\n\n集成學習屬於「預測性分析」常用的方法。\n\n考題常考：「結合多個模型提高預測準確性」→ 集成學習。'
          }
        ]
      }
    },
    {
      number: 39,
      title: '正則化',
      engTitle: 'Regularization',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'tune',
            content: '在模型訓練時加一個「懲罰項」，限制模型的參數不要太大或太複雜。目的是防止過擬合，讓模型更簡單、更能泛化到新資料。'
          },
          {
            label: '兩種常見方式',
            icon: 'build',
            code: 'L1 正則化（LASSO）\n  懲罰：參數的絕對值總和\n  效果：會把不重要的參數直接壓成 0\n  → 自動做「特徵選擇」\n  → 適合特徵很多但大部分沒用的情況\n\nL2 正則化（Ridge）\n  懲罰：參數的平方總和\n  效果：把所有參數都縮小，但不會變成 0\n  → 所有特徵都保留，但影響力都縮小\n  → 適合特徵都有點用的情況\n\n記法：L1 砍特徵，L2 縮特徵'
          },
          {
            label: '生活比喻',
            icon: 'lightbulb',
            content: '想像模型是一個學生：\n- 沒有正則化 → 學生死背考古題，連錯字都背（過擬合）\n- 有正則化 → 限制學生只能寫重點筆記（參數不能太多太大）\n→ 筆記精簡，遇到新題目反而考得更好（泛化好）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「下列哪一項通常用來降低過擬合？」→ 增加正則化項。\n\n錯誤選項：\n- 「增加模型複雜度」→ 讓過擬合更嚴重\n- 「增加學習率」→ 跟過擬合沒直接關係\n- 「增加訓練數據量」→ 有幫助但不是正則化\n\n正則化 = 在損失函數中加入懲罰項，讓模型變簡單。'
          }
        ]
      }
    },
    {
      number: 40,
      title: 'K-Means 聚類',
      engTitle: 'K-Means Clustering',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'bubble_chart',
            content: '把資料分成 K 個群組的演算法。K 是你事先指定的群數。每個群組有一個「中心點」，資料離哪個中心近就歸到哪群。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '1. 隨機選 K 個點當初始中心\n2. 每筆資料歸到最近的中心\n3. 重新算每群的平均值當新中心\n4. 重複 2~3 步，直到中心不再變動\n\n例：K=3，客戶消費分群\n\n  ○○○ 群1（低消費）中心=500元\n  ●●● 群2（中消費）中心=3000元\n  ★★★ 群3（高消費）中心=15000元'
          },
          {
            label: '限制',
            icon: 'warning',
            code: '1. K 要事先指定（不知道分幾群就很困難）\n2. 只適合球形群集（非球形分不好）\n3. 容易受離群值影響（極端值拉偏中心）\n4. 不同的初始中心 → 可能得到不同結果\n5. 不能處理類別型資料（只能算數值距離）\n6. 不適合密度變化大的資料'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '高頻考點：\n\nQ:「K 代表什麼？」→ 所需劃分的群組數量（不是特徵數、不是樣本數、不是迭代次數）。\n\nQ:「K-Means 何者不正確？」→ 「可以處理類別型資料」是錯的。K-Means 基於距離計算，只能處理數值型。\n\nQ:「何者不是 K-Means 特點？」→ 「原理複雜」是錯的。K-Means 原理相對簡單。'
          }
        ]
      }
    },
    {
      number: 41,
      title: 'Q-Learning',
      engTitle: 'Q-Learning / Deep Q-Learning',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'psychology',
            content: '強化學習中最經典的演算法。AI 學習每個「狀態+動作」組合的長期價值（Q 值），最終選擇 Q 值最高的動作。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: 'Q 表（Q-Table）：\n\n         往左    往右    往上    往下\n狀態A    10      25      5       15\n狀態B    30      8       20      12\n\nAI 在狀態A → 選「往右」（Q值25最高）\nAI 在狀態B → 選「往左」（Q值30最高）\n\n流程：\n觀察狀態 → 查Q表選動作 → 得到獎勵\n→ 更新Q值 → 重複\n\n隨著經驗累積，Q值越來越準確'
          },
          {
            label: 'Deep Q-Learning',
            icon: 'memory',
            code: '問題：狀態太多時，Q表存不下\n  例：圍棋有 10^170 種狀態\n\n解法：用神經網路取代Q表\n  輸入：當前狀態\n  輸出：每個動作的Q值\n\n關鍵技術：\n  經驗回放（Experience Replay）\n    → 把經驗存起來，隨機抽取來訓練\n    → 打破經驗的時間相關性\n  目標網路（Target Network）\n    → 用兩個網路穩定學習過程'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Q-Learning 屬於強化學習，核心是「透過試錯學習找到最佳決策策略」。\n\n應用：AlphaGo（結合深度學習+強化學習）、Atari 遊戲、機器人控制。\n\n跟監督式學習的差別：監督式需要標準答案，Q-Learning 靠獎勵自己摸索。'
          }
        ]
      }
    },
    {
      number: 42,
      title: '梯度下降法',
      engTitle: 'Gradient Descent',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'trending_down',
            content: '模型訓練時「調整參數」的核心方法。就像在山上蒙著眼睛找最低點，每一步都往最陡的下坡方向走，直到走到谷底。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '1. 隨機初始化模型參數\n2. 用損失函數算「現在有多差」\n3. 算梯度（斜率）→ 找出「哪個方向下降最快」\n4. 往那個方向調整參數（走一步）\n5. 重複 2~4，直到損失不再下降\n\n             ╲\n              ╲\n               ╲___\n                   ╲___╱  ← 找到最低點！\n\n步伐大小 = 學習率（Learning Rate）\n太大 → 跳過谷底\n太小 → 走太慢，訓練很久'
          },
          {
            label: '三種變體',
            icon: 'list',
            code: 'BGD（批次梯度下降）\n  用全部資料算梯度 → 準確但慢\n\nSGD（隨機梯度下降）\n  每次只用一筆資料 → 快但不穩定\n\nAdam（最常用）\n  自適應學習率，結合動量\n  → 又快又穩，目前最主流的優化器'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '梯度下降是模型訓練的核心優化方法，目的是「最小化損失函數」。\n\n學習率太大 → 發散（跳過最佳解）\n學習率太小 → 收斂太慢\n\nAdam 是目前最廣泛使用的優化器，因為它能自適應調整學習率。'
          }
        ]
      }
    },
    {
      number: 43,
      title: 'Early Stopping',
      engTitle: 'Early Stopping / 早停法',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'stop_circle',
            content: '訓練模型時，當驗證集的表現開始變差（損失開始上升），就「提前停止訓練」。這是防止過擬合最簡單直覺的方法。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '訓練過程中的損失變化：\n\n損失\n│\n│ ╲         驗證集損失\n│  ╲      ╱─── ← 開始上升！在這裡停！\n│   ╲___╱\n│    ╲\n│     ╲_________  訓練集損失（持續下降）\n│\n└──────────────────── 訓練輪數\n\n訓練集損失一直降 → 模型越來越會「背答案」\n驗證集損失先降後升 → 開始過擬合了\n→ 在驗證集損失最低的那一刻停止'
          },
          {
            label: '跟其他防過擬合方法比較',
            icon: 'compare',
            code: 'Early Stopping → 直接停止訓練\n正則化         → 加懲罰項限制參數\n資料增強       → 增加訓練資料多樣性\nDropout        → 隨機關掉部分神經元\n\nEarly Stopping 最簡單，不需要修改模型架構\n通常會跟其他方法搭配使用'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Early Stopping 是防止過擬合的策略之一。\n\n觸發條件：「模型在驗證集上的表現開始下降時」。\n\n注意：不是「訓練集表現下降時停止」（訓練集通常一直在變好），是看驗證集。'
          }
        ]
      }
    },
    {
      number: 44,
      title: '偏差-變異權衡',
      engTitle: 'Bias-Variance Tradeoff',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'balance',
            content: '模型的誤差來自兩個來源：偏差（Bias）和變異（Variance）。兩者是翹翹板關係 -- 減少一個通常會增加另一個。找到平衡點，才能讓模型表現最好。'
          },
          {
            label: '偏差 vs 變異',
            icon: 'compare',
            code: '偏差（Bias）= 模型太簡單\n  → 學不到資料的規律（欠擬合）\n  → 訓練和測試都表現差\n  → 像用直線硬擬合曲線資料\n\n變異（Variance）= 模型太複雜\n  → 把雜訊都學進去了（過擬合）\n  → 訓練很好但測試很差\n  → 像用超彎曲的線完美通過每個點\n\n        欠擬合          剛好          過擬合\n         ／              ～            ∿∿∿\n        ／             ～  ～         ∿  ∿  ∿\n       ．．          ．～    ～．    ∿．  ．∿\n     ．    ．      ．          ．  ∿        ∿\n   高偏差低變異    低偏差低變異    低偏差高變異\n   （太簡單）     （剛剛好）     （太複雜）'
          },
          {
            label: '怎麼找平衡',
            icon: 'tune',
            code: '偏差太高（欠擬合）→ 增加模型複雜度\n  用更多特徵、更深的網路\n\n變異太高（過擬合）→ 降低模型複雜度\n  正則化、Early Stopping、資料增強\n\n目標：找到偏差和變異都不太高的甜蜜點'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「Bias-Variance Tradeoff 主要解決什麼問題？」\n→ 如何在偏差與變異之間取得平衡，避免過擬合或欠擬合。\n\n不是：\n- 資料不足 → 那是資料蒐集問題\n- 測試資料重複 → 那是資料分割問題\n- 類別不平衡 → 那是用 SMOTE/F1-score 處理'
          }
        ]
      }
    },
    {
      number: 45,
      title: '貝氏分類器',
      engTitle: 'Naive Bayes Classifier',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'mail',
            content: '基於貝氏定理的分類演算法。「Naive」（天真）是因為它假設所有特徵互相獨立（雖然現實中通常不是，但效果意外地好）。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '核心公式（貝氏定理）：\nP(類別|特徵) = P(特徵|類別) * P(類別) / P(特徵)\n\n範例：垃圾郵件分類\n\n收到一封信包含「免費」「中獎」這兩個詞\n\nP(垃圾|免費,中獎)\n  = P(免費|垃圾) * P(中獎|垃圾) * P(垃圾)\n    / P(免費,中獎)\n\n如果 P(垃圾|...) > P(正常|...)\n→ 判定為垃圾郵件'
          },
          {
            label: '它是生成式模型',
            icon: 'warning',
            content: '雖然貝氏分類器做的是「分類」，但它屬於生成式模型。\n\n為什麼？因為它學的是「資料的整體分佈 P(x,y)」，而不是直接學分類邊界 P(y|x)。\n\n鑑別式模型 → 直接學 P(y|x)（邏輯迴歸、SVM）\n生成式模型 → 先學 P(x,y)，再用貝氏定理推 P(y|x)（Naive Bayes）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「貝氏分類器最適合歸類於哪一類？」\n→ 透過建構資料的整體分佈，並利用條件關係進行推斷和分類的模型。\n\n不是(A)「直接學習邊界」→ 那是鑑別式（SVM、邏輯迴歸）\n不是(C)「自動分群」→ 那是非監督式（K-Means）\n不是(D)「試錯學習」→ 那是強化學習\n\n常見應用：垃圾郵件過濾、文本分類、情感分析。'
          }
        ]
      }
    }
  ]
}
