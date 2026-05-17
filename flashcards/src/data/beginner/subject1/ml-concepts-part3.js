/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ml-concepts-part3.js
 * 功能：機器學習概念（第 31-45 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default [
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
