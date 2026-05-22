/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：deployment.js
 * 功能：AI 技術系統集成與部署 - 中級卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'deployment',
  label: 'AI 系統部署與運維',
  cards: [
    {
      number: 1,
      title: 'Kubernetes',
      engTitle: 'Kubernetes (K8s)',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'cloud',
            content: '容器編排平台，自動管理容器化應用的部署、擴展、負載平衡和故障恢復。Google 開源的，是目前雲端部署的業界標準。'
          },
          {
            label: '在 AI 中的角色',
            icon: 'build',
            code: 'AI 模型打包成容器（Docker）\n  ↓\nKubernetes 管理這些容器：\n  - 部署：把模型服務部署到多台機器\n  - 擴展：流量大時自動增加副本\n  - 縮容：流量小時自動縮減節省資源\n  - 故障恢復：容器掛掉自動重啟\n  - 滾動更新：新版本上線不停機'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Kubernetes 的核心功能：「管理與協調模型服務的部署、擴展與運行環境」。\n\n不是「管理訓練流程與參數」（那是 MLOps/實驗追蹤工具）。\n不是「資料儲存與版本控管」（那是 Model Registry / DVC）。\n不是「GPU 加速運算」（那是 CUDA / TensorRT）。'
          }
        ]
      }
    },
    {
      number: 2,
      title: 'MLOps',
      engTitle: 'Machine Learning Operations',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'engineering',
            content: '把 DevOps 的理念應用到機器學習上。涵蓋 ML 模型的開發、訓練、部署、監控、維護的整個生命週期管理。'
          },
          {
            label: '核心流程',
            icon: 'build',
            code: '資料管理 → 特徵工程 → 模型訓練\n    ↓           ↓          ↓\n版本控管 → 實驗追蹤 → 模型評估\n    ↓           ↓          ↓\n模型註冊 → 部署上線 → 監控維護\n    ↓\n偵測漂移 → 重新訓練 → 更新部署'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'MLOps 是一個「流程框架」，不是單一工具。它整合了資料版本控管、實驗追蹤、模型註冊、部署自動化、效能監控等環節。'
          }
        ]
      }
    },
    {
      number: 3,
      title: 'Model Registry',
      engTitle: 'Model Registry / 模型註冊中心',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'inventory_2',
            content: '集中管理所有模型版本的「倉庫」。記錄每個模型的版本、訓練參數、評估指標、部署狀態。像是模型的「戶口名簿」。'
          },
          {
            label: '管什麼',
            icon: 'list',
            code: '模型版本：v1.0, v1.1, v2.0...\n訓練紀錄：用了什麼資料、什麼超參數\n評估指標：Accuracy, F1, AUC...\n部署狀態：開發中 / 測試中 / 上線中 / 已退役\n\n常見工具：MLflow Model Registry, \n          Weights & Biases, SageMaker'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Model Registry 用於：「集中管理模型版本、訓練紀錄與部署狀態」。\n\n不是「設定運算資源」（那是基礎設施管理）。\n不是「建立特徵版本」（那是 Feature Store）。\n不是「追蹤上線後漂移」（那是模型監控 / Model Monitoring）。'
          }
        ]
      }
    },
    {
      number: 4,
      title: '漸進式部署',
      engTitle: 'Phased Rollout',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'trending_up',
            content: '不要一次全面上線，而是先在小範圍試用，確認沒問題再逐步擴大。降低風險、收集回饋、控制影響範圍。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '階段 1：單一科別/單位先試用\n  例：放射科先用 AI 輔助判讀\n  → 收集使用回饋、確認安全性\n\n階段 2：擴展到相關科別\n  例：擴展到其他影像相關科別\n  → 驗證跨場景適用性\n\n階段 3：全面部署\n  確認無重大問題 → 全院上線'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「降低臨床衝擊」+「風險可控」+「回饋可收斂」→ 從單一專科開始逐步擴展。\n\n不是「先部署急診」（高風險場景不適合當試點）。\n不是「夜班才啟用」（限制使用時段不是漸進式部署）。\n不是「全院同步體驗」（那就不是漸進式了）。'
          }
        ]
      }
    },
    {
      number: 5,
      title: 'CI 持續整合',
      engTitle: 'Continuous Integration',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'integration_instructions',
            content: '每次程式碼提交就自動觸發建置、測試和分析。儘早發現問題，避免到最後才發現一堆衝突。'
          },
          {
            label: '核心實踐',
            icon: 'build',
            code: '每次 Commit → 自動觸發：\n  1. 建置（Build）\n  2. 單元測試（Unit Test）\n  3. 靜態程式碼分析（Lint）\n\n→ 幾分鐘內就知道有沒有問題\n→ 不是等到每天固定時間才做'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'CI 的核心：「每次提交自動觸發建置、測試和分析」。\n\n不是「每日固定時間手動合併」（不夠即時）。\n不是「訓練完成後才回顧」（太晚了）。\n不是「批次釋出到測試環境」（那是 CD 持續部署的範疇）。'
          }
        ]
      }
    },
    {
      number: 6,
      title: '不可否認性',
      engTitle: 'Non-repudiation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'verified',
            content: '確保每筆操作或交易都有「不可抵賴」的證據，事後沒人能說「這不是我做的」。是資訊安全的核心原則之一。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: 'AI 推論紀錄的不可否認性：\n\n1. 記錄每筆推論的輸入和輸出\n2. 計算加密雜湊值（Hash）\n   → 內容一改 Hash 就變\n3. 簽署數位簽章\n   → 證明是誰、什麼時間產生的\n\n→ 不可竄改 + 可追溯 + 可稽核'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「金融監管」+「不可否認性」+「法務追蹤與稽核」→ 加密雜湊值 + 數位簽章。\n\n不是「降低推論延遲」（那是效能優化）。\n不是「增加備援」（那是可用性）。\n不是「負載平衡」（那是效能分散）。'
          }
        ]
      }
    },
    {
      number: 7,
      title: '水平擴展與 Auto Scaling',
      engTitle: 'Horizontal Scaling & Auto Scaling',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'unfold_more',
            content: '水平擴展 = 加更多機器（副本）來分擔流量。Auto Scaling = 系統自動根據流量增減機器數量。'
          },
          {
            label: '跟垂直擴展的差別',
            icon: 'compare',
            code: '垂直擴展（Scale Up）：\n  換更強的機器（更多 CPU、更大記憶體）\n  → 有物理上限，單點故障風險\n\n水平擴展（Scale Out）：\n  加更多機器，每台處理一部分流量\n  → 理論上無上限，容錯性好\n  → 搭配 Auto Scaling 自動伸縮'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「10,000 RPS」+「高可用性」+「流量峰值」→ 容器化 + 水平擴展 + Auto Scaling。\n\n不是「單台垂直擴展」（有上限、單點故障）。\n不是「限制併發數」（是迴避問題不是解決）。\n不是「增加批次大小」（跟即時回應需求矛盾）。'
          }
        ]
      }
    },
    {
      number: 8,
      title: 'PSI 指數',
      engTitle: 'Population Stability Index',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'monitoring',
            content: '衡量兩個時間點之間，資料分佈是否有「顯著變化」的指標。常用來監控模型上線後的輸入特徵是否漂移。'
          },
          {
            label: '怎麼判斷',
            icon: 'calculate',
            code: 'PSI < 0.1  → 分佈穩定，沒問題\nPSI 0.1~0.2 → 輕微變化，需觀察\nPSI > 0.2  → 顯著漂移，要處理\n\n計算方式：\n  把特徵分成多個 bin\n  比較「訓練時」vs「上線後」每個 bin 的比例\n  加總差異 → PSI 值'
          },
          {
            label: '為什麼能預警',
            icon: 'lightbulb',
            content: 'PSI 監控的是「輸入特徵」的分佈，不需要等模型預測出錯才知道。特徵分佈變了 → 模型效能遲早會跟著變差。是最有「預測效力」的監控指標。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「提早發現模型效能下滑風險」→ PSI（輸入特徵分佈變化）。\n\n不是「CPU/記憶體」（那是系統效能，不是模型效能）。\n不是「置信度分佈」（有幫助但是模型輸出端的，不如輸入端早）。\n不是「API 回應時間」（那是延遲監控，不是模型品質）。'
          }
        ]
      }
    },
    {
      number: 9,
      title: 'AI 導入評估框架',
      engTitle: 'AI Adoption Assessment Framework',
      back: {
        sections: [
          {
            label: '四大評估面向',
            icon: 'checklist',
            code: '1. 業務需求評估\n   重複性高的流程？流程瓶頸？\n   有沒有可提升的 KPI？\n   → 確認「需不需要 AI」\n\n2. 技術可行性評估\n   資料品質夠不夠？\n   IT 基礎設施是否支援？\n   適合哪種學習方式（監督/非監督/生成式）？\n   → 確認「做不做得到」\n\n3. 成本效益評估\n   ROI = (回報-成本)/成本 x 100%\n   NPV = 未來現金流折現 - 初期投資\n   TCO = 總擁有成本（硬體+人力+維運）\n   → 確認「值不值得投入」\n\n4. 風險與合規評估\n   個資法/GDPR 合規？\n   模型偏見風險？\n   組織文化阻力？\n   → 確認「風險可不可控」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '常考情境：\n- 「商業價值評估的考量」→ 預期效益與回報（ROI）\n- 「確保組織具備執行能力」→ 組織成熟度（數位成熟度+人才+跨部門協作）\n- 「判斷是否導入 AI」→ 四面向綜合評估\n\nROI 和 NPV 的差異：\n- ROI = 簡單回報率\n- NPV = 考慮時間價值的長期評估'
          }
        ]
      }
    },
    {
      number: 10,
      title: 'POC 概念驗證',
      engTitle: 'Proof of Concept',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'science',
            content: 'POC（概念驗證）是在正式大規模導入前，用最小範圍驗證 AI 方案是否可行的測試階段。\n\n目的：用最小成本和風險，確認技術方案是否能解決問題。'
          },
          {
            label: 'POC 設計原則',
            icon: 'build',
            code: '範圍要求：\n  小範圍、風險可控\n  具代表性的業務流程\n  資料和 IT 資源已就緒\n\n評估指標：\n  量化：準確率、效率提升、錯誤率\n  質性：使用者回饋、接受度\n\n結果判斷：\n  技術適配性 → 能否與現有系統整合\n  效益驗證 → 有沒有明確的價值\n  組織接受度 → 使用者願不願意用\n  瓶頸辨識 → 有沒有重大風險'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'POC 的核心精神：「先小範圍試行，驗證可行再擴展」。\n\n與漸進式部署的關係：\nPOC = 導入前的驗證（還在評估階段）\n漸進式部署 = 確定要導入後的逐步上線策略\n\n常考：快速迭代（每次 1-2 週）、最小可行產品（MVP）概念。'
          }
        ]
      }
    },
    {
      number: 11,
      title: '風險矩陣與風險等級',
      engTitle: 'Risk Matrix & Risk Level',
      back: {
        sections: [
          {
            label: '風險矩陣',
            icon: 'grid_on',
            content: '風險矩陣是將「發生可能性」和「影響程度」交叉評估的視覺化工具，幫助判斷哪些風險要優先處理。\n\n常見格式：3x3 或 5x5 矩陣。\n\n高可能 + 高影響 = 最高優先處理\n低可能 + 低影響 = 可接受風險'
          },
          {
            label: 'AI 常見風險類型',
            icon: 'warning',
            code: '技術層風險：\n  資料品質（缺失、偏頗、不一致）\n  模型穩定性（過擬合、概念漂移）\n  黑箱問題（缺乏可解釋性）\n\n法規層風險：\n  個資法 / GDPR 合規\n  產業專用法規（HIPAA 醫療、金融監管）\n\n倫理層風險：\n  歷史偏見 → 數據本身帶有偏見\n  標註偏見 → 標註者個人觀點影響\n  演算法偏見 → 模型放大既有偏見\n\n組織層風險：\n  變革阻力、人才短缺、部門壁壘'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '偏見三種類型要分清楚：\n- 歷史偏見：資料反映社會既有偏見\n- 標註偏見：標註者主觀造成的偏差\n- 演算法偏見：模型結構或訓練方式造成\n\n風險管理計畫包含：\n風險清單 → 對應措施 → 責任人 → 監控機制'
          }
        ]
      }
    },
    {
      number: 12,
      title: 'XAI 可解釋性',
      engTitle: 'Explainable AI',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'visibility',
            content: '可解釋性人工智慧(XAI)是指讓 AI 模型的決策過程對人類可理解、可追溯、可審查。\n\n為什麼重要：深度學習模型是「黑箱」，無法解釋為什麼做出某個預測。在醫療、金融、司法等高風險領域，決策需要能被解釋和問責。'
          },
          {
            label: '常見方法',
            icon: 'build',
            code: 'LIME（局部可解釋）\n  對單一預測結果產生解釋\n  用簡單模型近似局部決策\n\nSHAP（特徵重要性）\n  基於博弈論計算每個特徵的貢獻度\n  可解釋全局和局部\n\n注意力視覺化\n  Transformer 的注意力權重可視化\n  看模型「關注」了哪些位置'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '常考情境：\n- 「缺乏可解釋性」→ 黑箱風險\n- 「法律要求可審查性」→ 需要 XAI\n- 「不可否認性」→ 加密雜湊+數位簽章（不是 XAI）\n\n可解釋性高的模型：決策樹、線性迴歸\n可解釋性低的模型：深度神經網路、集成模型'
          }
        ]
      }
    },
    {
      number: 13,
      title: 'A/B 測試',
      engTitle: 'A/B Testing',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'science',
            content: '同時部署兩個版本（A 版和 B 版），隨機把使用者分成兩組，各用一個版本，比較哪個版本的效果更好。是最嚴謹的線上實驗方法。'
          },
          {
            label: '在 AI 中怎麼用',
            icon: 'build',
            code: '場景：上線新的推薦模型\n\nA 組（對照組）→ 用舊模型\nB 組（實驗組）→ 用新模型\n\n隨機分配 50%/50% 的流量\n持續觀察 1-2 週\n\n比較指標：\n  點擊率、轉換率、停留時間\n  用統計檢定判斷差異是否顯著'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「驗證新模型是否比舊模型好」→ A/B 測試。\n「隨機分組 + 對照組 + 統計檢定」→ A/B 測試的核心。\n\n與 POC 的差別：\n- POC = 導入前驗證可行性\n- A/B 測試 = 上線後驗證效果\n\n注意：測試期間要足夠長，避免「新奇效應」。'
          }
        ]
      }
    },
    {
      number: 14,
      title: 'Canary 部署',
      engTitle: 'Canary Deployment',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'pest_control',
            content: '先把新版本部署到一小部分流量（如 5%），觀察是否正常，沒問題再逐步擴大到全部流量。名稱來自「礦坑裡的金絲雀」-- 先讓少量使用者試水溫。'
          },
          {
            label: '跟其他部署的差別',
            icon: 'compare',
            code: 'Canary 部署：\n  5% → 20% → 50% → 100% 逐步擴大\n  新舊版本同時運行\n  → 風險最低，但部署時間最長\n\n藍綠部署（Blue-Green）：\n  兩套完整環境（藍=舊、綠=新）\n  一次性切換全部流量\n  → 切換快，但需要雙倍資源\n\n滾動更新（Rolling Update）：\n  逐台機器更新\n  → Kubernetes 預設方式'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「最小化上線風險 + 逐步擴大」→ Canary 部署。\n「一次性切換 + 快速回滾」→ 藍綠部署。\n\nCanary vs A/B 測試：\n- Canary = 新版本的安全上線策略\n- A/B 測試 = 比較兩個版本的效果\n（可以搭配使用）'
          }
        ]
      }
    },
    {
      number: 15,
      title: '模型壓縮技術',
      engTitle: 'Model Compression',
      supplementary: true,
      back: {
        sections: [
          {
            label: '三大壓縮方法',
            icon: 'compress',
            code: '剪枝（Pruning）：\n  移除不重要的神經元或連接\n  → 模型變小、推論變快\n  → 結構化剪枝 vs 非結構化剪枝\n\n量化（Quantization）：\n  降低參數精度（FP32 → INT8）\n  → 模型大小減少 4 倍\n  → 推論速度提升 2-4 倍\n  → 精度損失很小\n\n知識蒸餾（Knowledge Distillation）：\n  大模型（Teacher）教小模型（Student）\n  → 小模型學大模型的「軟標籤」\n  → 小模型效果接近大模型\n  → DistilBERT = BERT 蒸餾版（小 40%、快 60%）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「邊緣裝置部署」→ 模型壓縮（量化 + 剪枝）。\n「用小模型達到大模型效果」→ 知識蒸餾。\n「降低推論延遲」→ 量化最直接有效。\n\n三者可以組合使用：先蒸餾 → 再剪枝 → 最後量化。'
          }
        ]
      }
    },
    {
      number: 16,
      title: 'Feature Store 特徵庫',
      engTitle: 'Feature Store',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'inventory_2',
            content: '集中管理和儲存機器學習特徵的平台。讓不同團隊、不同模型可以共用同一套已計算好的特徵，避免重複計算和特徵不一致。'
          },
          {
            label: '解決什麼問題',
            icon: 'build',
            code: '沒有 Feature Store：\n  團隊 A 自己算特徵 → 存在自己的資料庫\n  團隊 B 也算同樣的特徵 → 邏輯不同\n  → 重複工作 + 特徵不一致\n\n有 Feature Store：\n  統一計算 + 統一儲存 + 統一版本管理\n  → 訓練和推論用同一套特徵\n  → 避免 Train-Serve Skew\n\n常見工具：Feast、Tecton、SageMaker Feature Store'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「特徵重用 + 訓練/推論一致性」→ Feature Store。\n\n不是 Model Registry（那是管模型版本）。\n不是 Data Lake（那是管原始資料）。\n\nMLOps 生態中的角色：\nData Lake → Feature Store → Model Training → Model Registry → Deployment'
          }
        ]
      }
    },
    {
      number: 17,
      title: '藍綠部署',
      engTitle: 'Blue-Green Deployment',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'swap_horiz',
            content: '維護兩套完全相同的生產環境：藍色（目前運行的舊版本）和綠色（準備上線的新版本）。新版本準備好後，一次性把流量從藍色切換到綠色。'
          },
          {
            label: '優缺點',
            icon: 'compare',
            code: '優點：\n  切換瞬間完成（改負載平衡器指向）\n  回滾超快（切回藍色就好）\n  零停機時間\n\n缺點：\n  需要雙倍的基礎設施資源\n  兩套環境的同步維護成本高\n  一次性全量切換，風險比 Canary 大'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '部署策略比較：\n- 藍綠 → 雙環境 + 一次切換 + 快速回滾\n- Canary → 漸進式流量切換 + 風險最低\n- 滾動更新 → 逐台更新 + 不需額外資源\n\n「需要快速回滾能力」→ 藍綠部署。\n「需要最低風險上線」→ Canary 部署。'
          }
        ]
      }
    }
  ]
}
