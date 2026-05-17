/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part3.js
 * 功能：模擬題 科目一（第 95-141 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 95,
      question: 'Edge AI（邊緣 AI）相較於雲端 AI 的主要優勢是？',
      options: [
        { label: 'A', text: '不需要 AI 模型訓練' },
        { label: 'B', text: '可以降低數據傳輸延遲，提高即時性' },
        { label: 'C', text: '適合大規模 AI 計算' },
        { label: 'D', text: '不需要考慮數據隱私問題' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '邊緣AI將計算任務放在設備端，減少數據傳輸延遲，提升即時性和隱私保護。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 96,
      question: '在 AI 項目中，為了評估 AI 的商業價值，應關注哪些關鍵指標？',
      options: [
        { label: 'A', text: '訓練時間' },
        { label: 'B', text: 'AI 模型大小' },
        { label: 'C', text: 'AI 預測的準確率與業務影響' },
        { label: 'D', text: 'AI 使用的編程語言' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: 'AI的商業價值主要通過預測準確率和對業務的實際影響來評估，與訓練時間或程式語言無直接關聯。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 97,
      question: 'AI 項目的可行性評估中，不包含以下哪一項？',
      options: [
        { label: 'A', text: 'AI 模型訓練成本' },
        { label: 'B', text: '競爭對手的商業策略' },
        { label: 'C', text: 'AI 系統的維護成本' },
        { label: 'D', text: 'AI 技術的適用性' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '競爭對手的商業策略屬於外部因素，與AI項目可行性評估的技術和成本因素無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 98,
      question: '在 AI 風險管理中，什麼策略可以降低 AI 偏見（Bias）對企業決策的影響？',
      options: [
        { label: 'A', text: '限制 AI 模型的使用範圍' },
        { label: 'B', text: '增強 AI 模型的自學能力' },
        { label: 'C', text: '定期審查與更新數據集' },
        { label: 'D', text: '只使用少量的數據進行訓練' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '定期審查和更新數據集有助於確保數據的多樣性和代表性，從而降低偏見風險。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 99,
      question: 'AI 導入過程中的關鍵步驟之一是技術選型，以下哪一項不是技術選型時的主要考量？',
      options: [
        { label: 'A', text: '模型的可擴展性' },
        { label: 'B', text: '開發團隊的技術熟練度' },
        { label: 'C', text: '企業的市場行銷策略' },
        { label: 'D', text: '訓練數據的品質' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '市場行銷策略屬於業務層面，與技術選型的技術因素無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 100,
      question: '在 AI 模型的部署過程中，若發現 AI 模型在真實環境中的表現低於測試結果，最可能的原因是？',
      options: [
        { label: 'A', text: '測試環境與生產環境的數據分佈不同' },
        { label: 'B', text: '測試環境使用的 AI 算法較生產環境更先進' },
        { label: 'C', text: '測試環境的 GPU 計算能力較生產環境更強' },
        { label: 'D', text: '測試環境的 AI 模型未經過過擬合處理' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '數據分佈差異是導致模型真實環境表現下降的常見原因，需確保訓練數據與實際數據一致。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 101,
      question: 'AI 模型監測（AI Model Monitoring）的主要目的是？',
      options: [
        { label: 'A', text: '確保模型的準確性與穩定性' },
        { label: 'B', text: '減少 AI 的計算資源消耗' },
        { label: 'C', text: '增強 AI 的運行速度' },
        { label: 'D', text: '使 AI 系統更加透明' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '模型監測旨在持續追蹤模型的準確性和穩定性，確保其在動態環境中的表現。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 102,
      question: '在 AI 系統部署中，以下哪一種方法可用來確保 AI 模型的公平性？',
      options: [
        { label: 'A', text: '使用可解釋性技術（Explainable AI）來分析決策過程' },
        { label: 'B', text: '減少 AI 模型的訓練數據量' },
        { label: 'C', text: '只使用特定群體的數據進行訓練' },
        { label: 'D', text: '限制 AI 的學習能力' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '可解釋性技術有助於分析模型決策過程，識別和減少潛在偏見，提升公平性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 103,
      question: '在 AI 技術與系統整合的過程中，API 的主要用途是？',
      options: [
        { label: 'A', text: '儲存 AI 模型數據' },
        { label: 'B', text: '提供標準化的介面，讓不同系統能夠交互' },
        { label: 'C', text: '訓練 AI 模型' },
        { label: 'D', text: '限制 AI 模型的運算能力' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'API提供標準化介面，促進AI系統與其他系統的數據交互和整合。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 104,
      question: '企業導入 AI 模型後，應該如何確保 AI 系統的持續有效性？',
      options: [
        { label: 'A', text: '定期更新數據集與模型' },
        { label: 'B', text: '限制 AI 模型的學習能力' },
        { label: 'C', text: '只使用一次訓練好的模型，不再更新' },
        { label: 'D', text: '減少 AI 在業務決策中的應用' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '定期更新數據集和模型可確保AI系統適應變化，維持高效預測能力。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 105,
      question: '在 AI 產品開發中，「MLOps」的主要目標是？',
      options: [
        { label: 'A', text: '減少 AI 訓練的計算資源需求' },
        { label: 'B', text: '確保 AI 模型的部署與維運可持續性' },
        { label: 'C', text: '減少 AI 模型的參數數量' },
        { label: 'D', text: '增強 AI 模型的複雜度' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'MLOps專注於模型的部署、監控和持續更新，確保AI系統的可持續運營。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 106,
      question: '在 AI 法規與倫理規範中，以下哪一點最符合 AI 責任使用原則？',
      options: [
        { label: 'A', text: '確保 AI 決策的透明度與可解釋性' },
        { label: 'B', text: '允許 AI 自主學習，不受人類監管' },
        { label: 'C', text: '限制 AI 在所有商業領域的應用' },
        { label: 'D', text: '只使用開源 AI 模型' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '透明度和可解釋性是負責任AI的核心，確保決策可被理解和信任。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 107,
      question: '進行 AI 技術可行性評估時，最重要的考量因素是？',
      options: [
        { label: 'A', text: '資料可用性與品質' },
        { label: 'B', text: '訓練數據越多越好' },
        { label: 'C', text: '只需考慮演算法的精度' },
        { label: 'D', text: '訓練時間長短' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '資料的可用性和品質直接影響AI模型的訓練效果和應用可行性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 108,
      question: 'AI 風險管理中，「公平性」(Fairness) 主要關注？',
      options: [
        { label: 'A', text: 'AI 模型是否遵循倫理規範' },
        { label: 'B', text: '訓練數據是否均衡' },
        { label: 'C', text: '模型的運行速度' },
        { label: 'D', text: 'AI 模型的可解釋性' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '公平性關注訓練數據的均衡性，確保模型對不同群體的預測無偏見。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 109,
      question: 'AI 部署前的評估指標通常不包含？',
      options: [
        { label: 'A', text: '準確度 (Accuracy)' },
        { label: 'B', text: '模型大小 (Model Size)' },
        { label: 'C', text: '記憶體使用量 (Memory Usage)' },
        { label: 'D', text: 'UI 介面設計' }
      ],
      answer: 'D',
      chapter: '4.3 AI 風險管理',
      explanation: 'UI介面設計屬於應用層面，與AI模型性能評估無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 110,
      question: '在選擇 AI 模型時，對於即時應用 (Real-time Application)，最佳的考量因素是？',
      options: [
        { label: 'A', text: '模型參數量越大越好' },
        { label: 'B', text: '推論速度 (Inference Speed)' },
        { label: 'C', text: '訓練時間長短' },
        { label: 'D', text: '是否使用 RNN 結構' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '即時應用需快速響應，推論速度是關鍵考量因素。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 111,
      question: 'AI 系統整合時，API 設計的關鍵原則不包含？',
      options: [
        { label: 'A', text: '易於擴展' },
        { label: 'B', text: '資料格式標準化' },
        { label: 'C', text: '只支援單一資料類型' },
        { label: 'D', text: '安全性與權限控管' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: 'API設計應支持多種資料類型，以實現靈活的系統整合。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 112,
      question: '在邊緣計算 (Edge Computing) 的 AI 部署中，最重要的考量因素是？',
      options: [
        { label: 'A', text: '訓練數據大小' },
        { label: 'B', text: '低功耗與計算資源限制' },
        { label: 'C', text: '模型複雜度不重要' },
        { label: 'D', text: '只需考慮準確度' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '邊緣計算受限於設備的功耗和計算資源，需優化模型以適應這些限制。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 113,
      question: '在 AI 導入規劃階段，最需要確認的第一步是？',
      options: [
        { label: 'A', text: '選擇最佳 AI 演算法' },
        { label: 'B', text: '設定模型評估指標' },
        { label: 'C', text: '確認 AI 導入的業務需求與目標' },
        { label: 'D', text: '進行模型微調' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '確認業務需求與目標是AI導入的首要步驟，確保技術方案與企業目標一致。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 114,
      question: '在 AI 風險評估時，「可解釋性」(Explainability) 的主要目的包括？',
      options: [
        { label: 'A', text: '增加模型的計算效能' },
        { label: 'B', text: '提高使用者的信任度' },
        { label: 'C', text: '讓模型更難以被攻擊' },
        { label: 'D', text: '降低模型的計算成本' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '可解釋性通過揭示模型決策過程，增強用戶對AI的信任，特別是在高風險應用中。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 115,
      question: '若一個 AI 系統部署後出現「數據漂移」(Data Drift) 現象，最適當的應對方式是？',
      options: [
        { label: 'A', text: '重新蒐集並更新訓練數據' },
        { label: 'B', text: '減少 AI 模型的訓練次數' },
        { label: 'C', text: '增加更多的模型參數' },
        { label: 'D', text: '讓系統自動調整權重' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '數據漂移指訓練數據與實際數據分佈不一致，需重新收集和更新訓練數據以適應新環境。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 116,
      question: '在 AI 模型的監管要求中，「公平性評估」的核心目標是？',
      options: [
        { label: 'A', text: '確保不同群體的結果不偏頗' },
        { label: 'B', text: '降低模型的訓練成本' },
        { label: 'C', text: '讓 AI 自行進行決策' },
        { label: 'D', text: '減少 AI 模型的計算量' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '公平性評估旨在確保模型對不同群體的預測無偏見，符合倫理和法規要求。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 117,
      question: 'AI 技術導入企業流程時，以下哪一項不是主要考量的風險？',
      options: [
        { label: 'A', text: '資料隱私與保護' },
        { label: 'B', text: '算法公平性' },
        { label: 'C', text: '訓練時間越長越好' },
        { label: 'D', text: '模型決策透明度' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '訓練時間長短是技術執行層面的考量，而非主要風險；數據隱私、公平性和透明度是核心風險。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 118,
      question: '在 AI 技術與系統整合時，以下哪個技術最適合進行異構數據整合？',
      options: [
        { label: 'A', text: 'RESTful API' },
        { label: 'B', text: '微服務架構 (Microservices)' },
        { label: 'C', text: '事件驅動架構 (Event-driven Architecture)' },
        { label: 'D', text: '以上皆是' }
      ],
      answer: 'D',
      chapter: '4.3 AI 風險管理',
      explanation: 'RESTful API、微服務和事件驅動架構均適用於異構數據整合，提供靈活性和標準化介面。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 119,
      question: '在邊緣運算環境下，AI 模型的部署需要特別考慮以下哪個因素？',
      options: [
        { label: 'A', text: '記憶體與計算資源限制' },
        { label: 'B', text: '訓練數據的標註方式' },
        { label: 'C', text: 'AI 模型是否為深度學習' },
        { label: 'D', text: '網路頻寬的影響不大' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '邊緣運算受限於設備的記憶體和計算資源，需優化模型以適應低功耗環境。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 120,
      question: '企業選擇 AI 技術供應商時，最應該優先考量哪個因素？',
      options: [
        { label: 'A', text: 'AI 供應商是否有公開的模型參數' },
        { label: 'B', text: '供應商提供的 AI 服務是否符合企業需求' },
        { label: 'C', text: 'AI 供應商的技術團隊規模' },
        { label: 'D', text: 'AI 供應商的市場行銷策略' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '選擇供應商時，首要考量是其AI服務是否符合企業的具體業務需求。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 121,
      question: '在 AI 模型的可擴展性考量中，以下哪種技術最能提升系統的彈性？',
      options: [
        { label: 'A', text: '使用單機運行 AI 模型' },
        { label: 'B', text: '採用容器化 (Containerization) 與 Kubernetes' },
        { label: 'C', text: '降低模型的計算量' },
        { label: 'D', text: '只使用本地 GPU 訓練模型' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '容器化和Kubernetes提供靈活的部署和管理，提升AI系統的可擴展性和彈性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 122,
      question: '在 AI 應用系統的 CI/CD (持續整合/持續部署) 過程中，以下哪項屬於 MLOps (機器學習運營) 的核心目標？',
      options: [
        { label: 'A', text: '只關注 AI 模型的訓練效率' },
        { label: 'B', text: '確保 AI 模型能夠快速迭代與更新' },
        { label: 'C', text: '只專注於 AI 模型的部署，不考慮監控' },
        { label: 'D', text: '讓 AI 模型自行學習，不需要監管' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'MLOps的核心是實現模型的快速迭代、部署和監控，確保持續更新和穩定性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 123,
      question: '在 AI 系統的雲端部署策略中，選擇混合雲架構的主要優勢是？',
      options: [
        { label: 'A', text: '完全不需要考慮資料安全性' },
        { label: 'B', text: '兼顧內部私有數據的安全與雲端擴展性' },
        { label: 'C', text: '減少所有運算成本' },
        { label: 'D', text: '確保所有 AI 模型都可以離線運行' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '混合雲架構結合私有雲和公有雲，保護敏感數據同時提供擴展性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 124,
      question: '在 AI 模型監控 (Model Monitoring) 中，「概念漂移」(Concept Drift) 的主要影響是？',
      options: [
        { label: 'A', text: '訓練時間變長' },
        { label: 'B', text: '模型性能下降，無法準確預測新數據' },
        { label: 'C', text: 'AI 模型的參數會自動更新' },
        { label: 'D', text: '模型的準確度保持不變' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '概念漂移指數據背後的模式變化，導致模型性能下降，需重新訓練或更新。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 125,
      question: 'AI 應用程式的 API 設計時，若需要提高 AI 推論請求的處理效能，最佳的策略是？',
      options: [
        { label: 'A', text: '增加 API 的請求頻率' },
        { label: 'B', text: '使用批次請求 (Batch Inference)' },
        { label: 'C', text: '降低 AI 模型的運算能力' },
        { label: 'D', text: '只允許同步請求' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '批次請求可一次處理多個輸入，減少API調用次數，提升推論效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 126,
      question: 'AI 相關法規中，「個人資料保護法」(GDPR) 強調 AI 模型應？',
      options: [
        { label: 'A', text: '讓所有數據對公眾開放' },
        { label: 'B', text: '允許個人要求刪除與 AI 相關的個資' },
        { label: 'C', text: '限制 AI 在醫療領域的應用' },
        { label: 'D', text: '確保 AI 可以完全自動化決策' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'GDPR強調個人數據權利，包括要求刪除與AI相關的個人資訊，保護隱私。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 127,
      question: '若 AI 系統在招聘決策中出現偏見 (Bias)，最可能的原因是？',
      options: [
        { label: 'A', text: '訓練數據不夠多' },
        { label: 'B', text: 'AI 模型參數太少' },
        { label: 'C', text: '訓練數據中存在歷史偏見' },
        { label: 'D', text: '使用錯誤的 AI 框架' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '歷史偏見存在於訓練數據中，會被AI模型學習並放大，導致招聘決策不公。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 128,
      question: 'AI 企業若要遵守 AI 倫理規範，應優先考量？',
      options: [
        { label: 'A', text: 'AI 模型的商業價值' },
        { label: 'B', text: 'AI 的決策是否公平、透明' },
        { label: 'C', text: '訓練 AI 時的計算資源' },
        { label: 'D', text: '降低 AI 模型的成本' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '公平性和透明性是AI倫理的核心，確保決策可被信任並符合社會規範。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 129,
      question: '企業導入 AI 時，若希望提高決策的透明度，最適合的方法是？',
      options: [
        { label: 'A', text: '使用可解釋性 AI (Explainable AI, XAI) 技術' },
        { label: 'B', text: '完全依賴 AI 進行決策' },
        { label: 'C', text: '降低 AI 模型的複雜度，不考慮性能' },
        { label: 'D', text: '隱藏 AI 模型的運作邏輯，以確保技術競爭力' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '可解釋性AI技術（如SHAP、LIME）能揭示模型決策過程，提升透明度和信任。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 130,
      question: '在企業評估是否導入AI應用時，需要分析現有的？',
      options: [
        { label: 'A', text: '員工社交網絡' },
        { label: 'B', text: '供應商合作關係' },
        { label: 'C', text: '數據和技術基礎' },
        { label: 'D', text: '競爭對手的AI策略' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '數據和技術基礎是評估AI導入可行性的核心，直接影響項目成功率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 131,
      question: '在企業評估導入AI應用的員工技能和培訓需求時，下列哪一項屬於考量？',
      options: [
        { label: 'A', text: '現有的硬體設施是否足夠' },
        { label: 'B', text: '數據是否完整、一致和準確' },
        { label: 'C', text: '員工是否具備基本的AI知識' },
        { label: 'D', text: '導入AI的預期效益分析' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '員工的AI知識水平直接影響導入的順利程度，需評估並提供培訓。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 132,
      question: '在評估AI方案導入的優先順序時，若DIP工站架設攝像頭評估導入難易程度為3分，人工動作影像標註為4分，則制定方案優先順序時應主要考量？',
      options: [
        { label: 'A', text: '各部門評估導入帶來的好處總和' },
        { label: 'B', text: '綜合評估導入難易程度與帶來的好處' },
        { label: 'C', text: '僅考量導入難易程度低的項目' },
        { label: 'D', text: '僅考量導入可能帶來好處最大的項目' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '優先順序需平衡導入難易度和預期效益，確保資源分配合理。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 133,
      question: '針對企業導入AI的設計階段，其主要目的為何？',
      options: [
        { label: 'A', text: '持續發揮導入AI的價值' },
        { label: 'B', text: '確保AI導入既有流程後人員能適應變動' },
        { label: 'C', text: '確認AI應用需求規格' },
        { label: 'D', text: '監控AI模型效能並評估重新訓練頻率' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '設計階段專注於明確AI應用需求和規格，為後續開發奠定基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 134,
      question: '在AI導入的實施/營運階段，確保模型能長期適應動態的業務環境並保持高效預測能力的主要步驟是？',
      options: [
        { label: 'A', text: '闡明導入AI必要性、提供員工所需AI知識與技能培訓資源' },
        { label: 'B', text: '將AI應用從單點擴展到各部門和各層級' },
        { label: 'C', text: '監控AI模型效能、評估重新訓練頻率與閾值' },
        { label: 'D', text: '解決大規模應用AI衍生的技術、文化、制度等層面問題' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '監控模型效能並定期重新訓練是確保AI適應動態環境的關鍵步驟。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 135,
      question: '負責任AI的核心原則旨在？',
      options: [
        { label: 'A', text: '加速AI技術的發展與應用' },
        { label: 'B', text: '提高AI系統的運算效能' },
        { label: 'C', text: '防止AI系統引發社會不公、歧視、隱私侵害和其他潛在的負面影響' },
        { label: 'D', text: '確保AI系統的商業價值最大化' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '負責任AI專注於避免社會不公、歧視和隱私侵害，確保技術應用符合倫理。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 136,
      question: '在評估AI系統的公平性時，「精確率的差異」是指？',
      options: [
        { label: 'A', text: '模型預測錯誤的比例在不同子群體之間存在差異' },
        { label: 'B', text: '模型預測值與實際值之間的差距在不同子群體中存在差異' },
        { label: 'C', text: '模型能夠正確預測正類樣本的比例在不同子群體中存在差異' },
        { label: 'D', text: '模型預測正確的比例在不同子群體之間存在差異' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '精確率差異指模型對正類樣本的預測正確率在不同群體間的差異，反映公平性問題。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 137,
      question: '在機器學習生命週期中，對模型註冊事件進行通知和提醒的主要目的是？',
      options: [
        { label: 'A', text: '監控應用程式的操作問題' },
        { label: 'B', text: '探索訓練和推理之間模型輸入的差異' },
        { label: 'C', text: '確保相關人員及時獲悉模型的重要階段並做出反應' },
        { label: 'D', text: '提供機器學習基礎設施的監控和警報' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '模型註冊事件通知確保相關人員了解模型訓練、部署等關鍵階段，促進協作。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 138,
      question: '「負責任AI儀表板」的主要功能是？',
      options: [
        { label: 'A', text: '自動化機器學習模型的訓練和部署' },
        { label: 'B', text: '提供雲端運算資源以加速AI開發' },
        { label: 'C', text: '提供單一介面，協助有效率地進行負責任AI的實務工作' },
        { label: 'D', text: '監控AI系統的硬體資源使用情況' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '負責任AI儀表板提供統一介面，監控公平性、可解釋性等，確保倫理合規。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 139,
      question: '反事實分析的主要目的是？',
      options: [
        { label: 'A', text: '評估模型在不同情境下的整體效能' },
        { label: 'B', text: '生成與當前情況略有不同的假設場景，以探索可能改變結果的特徵' },
        { label: 'C', text: '對數據進行小幅度的變動，以觀察這些變動對模型預測的影響' },
        { label: 'D', text: '提供具有相反或不同模型預測的最接近資料點' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '反事實分析通過模擬假設場景，探索特徵變化對結果的影響，提升模型解釋性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 140,
      question: '在貸款審批被拒的反事實分析案例中，通過將客戶A的年收入從50,000美元模擬增加到60,000美元，觀察貸款結果的目的是為了進行？',
      options: [
        { label: 'A', text: '創建假設場景' },
        { label: 'B', text: '敏感度分析' },
        { label: 'C', text: '識別偏見' },
        { label: 'D', text: '調整模型' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '模擬收入變化屬於創建假設場景，探索不同條件下貸款結果的變化。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 141,
      question: '微擾技術的主要目的是？',
      options: [
        { label: 'A', text: '生成與當前情況略有不同的假設場景' },
        { label: 'B', text: '提供具有相反模型預測的最接近資料點' },
        { label: 'C', text: '對數據進行小幅度的變動，以觀察這些變動對模型預測的影響' },
        { label: 'D', text: '分析特徵微擾如何影響模型預測' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '微擾技術通過小幅度改變數據，觀察對模型預測的影響，評估模型穩定性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    }
]
