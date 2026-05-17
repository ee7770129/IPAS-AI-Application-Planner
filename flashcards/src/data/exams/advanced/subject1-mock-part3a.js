/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part3a.js
 * 功能：模擬題 科目一（第 95-118 題）
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
    }
]
