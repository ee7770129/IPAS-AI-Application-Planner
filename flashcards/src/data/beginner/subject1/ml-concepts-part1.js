/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ml-concepts-part1.js
 * 功能：機器學習概念（第 1-15 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default [
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
    }
  ]
