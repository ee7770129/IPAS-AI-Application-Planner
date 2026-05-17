/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ml-concepts-part2.js
 * 功能：機器學習概念（第 16-30 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default [
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
    }
  ]
