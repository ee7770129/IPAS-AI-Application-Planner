/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：review.js
 * 功能：基礎複習（初級概念+中級進階考法）- 中級卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'review',
  label: '基礎複習（含進階考法）',
  cards: [
    {
      number: 1,
      title: '監督式 vs 非監督式 vs 強化學習',
      engTitle: 'ML Learning Types - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            code: '監督式   → 有標籤，學「輸入→輸出」\n非監督式 → 無標籤，學「資料結構」\n半監督式 → 部分有標籤+大量無標籤\n自監督式 → 資料自己產生訓練目標（不需人標）\n強化學習 → 靠獎懲回饋自己摸索最佳策略'
          },
          {
            label: '中級進階考法',
            icon: 'school',
            content: '中級常考「情境配對」：\n- 有完整標註 → 監督式（BERT Classifier）\n- 部分標註+大量未標註 → 半監督式\n- 無標註找趨勢 → 非監督式（K-Means, DBSCAN）\n- 動態環境決策 → 強化學習\n\n進階陷阱：\n- 「損失當回饋調整策略」→ 強化學習（不是監督式）\n- 「自監督跟監督一樣需人標」→ 錯！自監督不需人標\n- 「非監督需定義正確輸出類別」→ 錯！'
          }
        ]
      }
    },
    {
      number: 2,
      title: 'SVM 支援向量機',
      engTitle: 'Support Vector Machine - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            content: '找最佳分界線（超平面），讓分界線離兩邊最近的資料點（支援向量）距離最大化。'
          },
          {
            label: '中級進階',
            icon: 'trending_up',
            code: '核函數（Kernel）選擇：\n  線性核 → 資料本身可線性分割\n  RBF 核 → 非線性資料（最常用）\n  多項式核 → 特定非線性模式\n\nSVM + PCA 搭配：\n  高維資料 → PCA 降維 → SVM 分類\n  → 降低訓練時間+減少過擬合\n  → 但 PCA 不能讓 SVM 自動處理非線性'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「多重共線性」→ 不選 SVM（選 LASSO/Ridge/PCA）\n- 「缺乏異常標註」→ 一般 SVM 不適合（除非 One-Class SVM）\n- 「記憶+泛化稀疏特徵」→ 不選 SVM（選寬深模型）\n- PCA 降維後接 SVM → 降低時間+減少過擬合（正確）'
          }
        ]
      }
    },
    {
      number: 3,
      title: '決策樹 vs 隨機森林',
      engTitle: 'Decision Tree vs Random Forest - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            code: '決策樹：一棵樹，像流程圖逐步分支\n  優：可解釋、直覺\n  缺：容易過擬合\n\n隨機森林：很多棵決策樹投票\n  優：不易過擬合、穩定\n  缺：不如單棵樹好解釋'
          },
          {
            label: '中級進階',
            icon: 'trending_up',
            code: '集成學習家族：\n  Bagging → 隨機森林（多棵樹各自訓練+投票）\n  Boosting → XGBoost/LightGBM（樹串聯，後面修前面的錯）\n\n決策樹不受多重共線性影響\n  → 但共線性題目通常問的是迴歸模型改善\n  → 答案通常是 LASSO/Ridge/PCA'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「只能預測不能生成」→ 隨機森林/邏輯迴歸都是\n- 「同時預測+生成虛擬樣本」→ 要用 VAE/GAN\n- 「影像分類」→ 用 CNN 而不是隨機森林'
          }
        ]
      }
    },
    {
      number: 4,
      title: '線性迴歸與正則化',
      engTitle: 'Linear Regression & Regularization - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            content: '線性迴歸：Y = aX + b，找一條直線貼合資料，預測連續數值。簡單但只能抓線性關係。'
          },
          {
            label: '中級進階：正則化',
            icon: 'trending_up',
            code: '多重共線性問題：\n  多個特徵高度相關 → 係數不穩定\n\n解法：加正則化\n  Ridge（L2）：係數變小但不為零\n    → 保留所有特徵，壓制共線性\n  LASSO（L1）：係數可以為零\n    → 自動做特徵選擇\n  Elastic Net：L1 + L2 結合'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「特徵高度相關+係數不穩定」→ LASSO/Ridge/PCA\n- 「不含正則化的線性迴歸」→ 無法解決共線性\n- 中級常搭配 PCA：先降維消除共線性再跑迴歸'
          }
        ]
      }
    },
    {
      number: 5,
      title: 'CNN vs RNN vs Transformer',
      engTitle: 'Neural Network Architectures - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            code: 'CNN → 圖片（空間特徵，卷積提取局部模式）\nRNN → 序列（時間特徵，但有梯度消失）\nLSTM → RNN 改良（閘門機制解決長期記憶）\nTransformer → 注意力機制（平行處理，最強）'
          },
          {
            label: '中級進階：怎麼選',
            icon: 'trending_up',
            code: '影像辨識/物件偵測 → CNN\n時間序列預測 → LSTM 或 Transformer\n文本分類/NLP → Transformer（BERT/GPT）\n影像+文字多模態 → CLIP/多模態Transformer\n\n倉庫監視器辨識缺貨 → CNN（影像）\n客服對話判斷升級 → Transformer（文字序列）\n包裹時間序列預測 → LSTM（時間序列）\nGPS 軌跡預測路線 → LSTM/Transformer（序列）'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '考題常給情境讓你選架構：\n看「資料類型」決定：\n- 圖片 → CNN\n- 文字序列 → Transformer/BERT\n- 時間序列 → LSTM\n- 圖片+文字 → 多模態\n\nCNN 不適合序列任務，RNN 不適合圖片任務。'
          }
        ]
      }
    },
    {
      number: 6,
      title: '過擬合與解決方案',
      engTitle: 'Overfitting Solutions - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            content: '訓練準確率很高但測試準確率很低 = 過擬合。模型「背答案」而不是「學規律」。'
          },
          {
            label: '中級進階：完整解法清單',
            icon: 'trending_up',
            code: '從資料下手：\n  資料增強 → 旋轉翻轉裁切\n  反向翻譯 → NLP 文字增強\n  增加訓練資料\n\n從模型下手：\n  Dropout → 隨機關閉神經元\n  L1/L2 正則化 → 限制參數大小\n  減少模型複雜度\n  Batch Normalization\n\n從訓練下手：\n  Early Stopping → 驗證損失上升就停\n  交叉驗證 → 穩定評估\n  學習率衰減'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「調超參數避免過擬合」→ 交叉驗證選最穩定設定\n- 「低資源語言過擬合」→ 反向翻譯（不新增真實語料）\n- 「增加模型深度/參數」→ 過擬合更嚴重（常見錯誤選項）\n- Early Stopping 防「訓練」過擬合\n- 交叉驗證防「調參」過擬合'
          }
        ]
      }
    },
    {
      number: 7,
      title: 'F1 / Precision / Recall',
      engTitle: 'Classification Metrics - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            code: 'Precision → 模型說「是」的裡面，真的是的比例（準不準）\nRecall    → 所有真的「是」中，被模型找到的比例（漏不漏）\nF1        → 兩者的調和平均（兼顧）\nAccuracy  → 全部猜對的比例（不平衡時會騙人）'
          },
          {
            label: '中級進階：情境選擇',
            icon: 'trending_up',
            code: '想找出所有癌症患者（不能漏）→ Recall\n想確保標記的垃圾郵件都是真的 → Precision\n想兼顧兩者 → F1\n類別不平衡 → F1（不要用 Accuracy）\n\n整體模型分辨能力 → ROC-AUC\n迴歸問題 → RMSE / R²（不能用 F1）'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '「同時兼顧 Precision 和 Recall」→ F1\n「降低漏診風險」→ Recall\n\n中級陷阱：RMSE/MSE 是迴歸指標，分類題不能選。\n「低資源情境比較資料效率」→ 用 F1 在不同標註比例下比較。'
          }
        ]
      }
    },
    {
      number: 8,
      title: 'PCA 主成分分析',
      engTitle: 'PCA - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            content: '把多個相關特徵壓縮成少數獨立的主成分，保留最多的資訊變異。是最常用的降維方法。'
          },
          {
            label: '中級進階',
            icon: 'trending_up',
            code: '用途：\n  1. 解決多重共線性\n  2. 降維加速訓練\n  3. 減少過擬合\n  4. 視覺化（降到 2D/3D）\n\n搭配 SVM：\n  1024 維 → PCA 降到 100 維 → SVM 分類\n  → 訓練快 + 過擬合少\n  → 但不保證準確率一定提升\n  → PCA 不能讓 SVM 處理非線性（要用核函數）'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「PCA 保留主成分必然提升準確率」→ 錯\n- 「原始高維一定更好」→ 錯（維度災難）\n- 「PCA 讓 SVM 處理非線性」→ 錯（PCA 是線性降維）\n- 「降維後降低訓練時間+減少過擬合」→ 正確'
          }
        ]
      }
    },
    {
      number: 9,
      title: '交叉驗證',
      engTitle: 'Cross-validation - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            content: '把資料分 K 份，每份輪流當測試集，跑 K 次取平均。結果比單次分割更穩定可信。'
          },
          {
            label: '中級進階：Nested CV',
            icon: 'trending_up',
            code: '問題：在 K-Fold 上直接調參+評估\n  → 測試摺間接參與參數選擇\n  → 評估結果過度樂觀（資料洩漏）\n\n解法：Nested CV（雙層交叉驗證）\n  外層 CV → 評估泛化效能（不碰調參）\n  內層 CV → 調超參數（只在訓練摺內）\n  → 評估資料完全沒參與調參'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「調超參數避免過擬合」→ 交叉驗證選最穩定設定\n- 「直接在 K-Fold 上調參並評估」→ 過度樂觀偏差+洩漏\n- 「系統化測試超參數組合」→ 網格搜尋（搭配 CV 使用）'
          }
        ]
      }
    },
    {
      number: 10,
      title: '資料增強',
      engTitle: 'Data Augmentation - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            content: '對現有訓練資料做變形（旋轉、翻轉、裁切等）產生更多樣本，增加多樣性，減少過擬合。'
          },
          {
            label: '中級進階',
            icon: 'trending_up',
            code: '影像增強：旋轉、翻轉、裁切、縮放、亮度調整\nNLP 增強：反向翻譯、同義詞替換、隨機插入/刪除\n\n失敗的常見原因：\n  增強後特徵分佈跟原始資料不一致\n  → 語意變了，模型學到錯誤模式\n  → 解法：檢查並調整增強策略維持語意一致性\n\n不當增強比沒增強更糟'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「增強後效能下降」→ 特徵分佈不一致\n- 「低資源語言過擬合」→ 反向翻譯（NLP 專用增強）\n- 「不新增真實語料」→ 反向翻譯/資料增強（不是增加模型大小）'
          }
        ]
      }
    },
    {
      number: 11,
      title: 'One-hot / 標準化 / 正規化',
      engTitle: 'Feature Engineering Pipeline - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            code: 'One-hot 編碼 → 類別轉 0/1 向量\n標準化 → 平均值=0, 標準差=1\n正規化 → 壓到 [0,1] 範圍'
          },
          {
            label: '中級進階：混合特徵工程流程',
            icon: 'trending_up',
            code: '最佳流程（連續+類別混合）：\n\n連續特徵：\n  → 標準化（Standardization）\n  → 或對數轉換（偏態資料）\n\n類別特徵：\n  → 目標編碼（Target Encoding）\n  → 或 One-hot（類別數少時）\n\n交互特徵：\n  → 組合兩個特徵產生新特徵\n\n完整流程：標準化 + 目標編碼 + 交互特徵'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「連續+類別混合資料，最佳特徵工程」→ 標準化+目標編碼+交互特徵\n- 「Label Encoding 直接合併」→ 不好（引入假的順序）\n- 「全部離散化」→ 不好（損失連續資訊）\n- 「只保留連續特徵」→ 不好（浪費資訊）'
          }
        ]
      }
    },
    {
      number: 12,
      title: 'Softmax / Sigmoid / ReLU / Max-Pooling',
      engTitle: 'Activation & Pooling Functions - Advanced',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            code: 'Softmax  → 多類別分類輸出層（機率分佈，加總=1）\nSigmoid  → 二元分類輸出層（0~1 機率）\nReLU     → 隱藏層激活（正數保留，負數歸零）\n線性函數 → 迴歸輸出層（不變形）'
          },
          {
            label: '中級進階：跟 Max-Pooling 比較',
            icon: 'trending_up',
            code: 'Softmax：\n  保留所有輸入資訊，轉成機率比例\n  不丟任何東西，只改變表示方式\n  用在分類輸出層\n\nMax-Pooling：\n  只保留區域最大值，丟掉其他\n  是降維操作，用在 CNN 中間層\n  不做機率轉換\n\n兩者完全不同：\n  一個是「比例化」，一個是「篩選」'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '正確：「Softmax 保留所有輸入以比例表示，Max-Pooling 只保留區域最大值」。\n\n錯誤選項陷阱：\n- 「兩者都壓縮為最大值」→ Softmax 不壓縮\n- 「Max-Pooling 做機率轉換」→ 反了\n- 「Softmax 用於降維」→ 反了'
          }
        ]
      }
    },
    {
      number: 13,
      title: 'GAN / VAE 進階應用',
      engTitle: 'GAN & VAE Advanced Applications',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            code: 'GAN → 生成器 vs 判別器對抗，生成逼真資料\nVAE → 編碼器壓縮+解碼器還原，學機率分佈'
          },
          {
            label: '中級進階：多種應用場景',
            icon: 'trending_up',
            code: '圖像生成 → GAN/VAE/Diffusion\n異常偵測 → VAE（還原誤差大=異常）\n分佈偏移監控 → VAE（潛在空間分佈變化）\n預測+生成虛擬樣本 → VAE/GAN\n\nGAN 常見問題：\n  模式崩潰 → WGAN 解決\n  訓練不穩定 → 梯度懲罰/Spectral Norm'
          },
          {
            label: '中級考法',
            icon: 'school',
            content: '- 「鑑別式模型上線後分佈偏移」→ VAE 監控潛在空間\n- 「同時預測+生成虛擬樣本」→ VAE/GAN\n- 「GAN 模式崩潰」→ WGAN（Wasserstein 距離）\n- 「高品質穩定圖像生成」→ Diffusion > GAN > VAE'
          }
        ]
      }
    }
  ]
}
