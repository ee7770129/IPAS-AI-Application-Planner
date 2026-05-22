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
      optionExplanations: { A: 'Edge AI 仍然需要經過模型訓練，只是將訓練好的模型部署到邊緣設備上執行推論。', B: null, C: '邊緣設備的計算資源有限，不適合大規模 AI 計算，大規模計算仍需依賴雲端。', D: '邊緣 AI 雖然減少了資料傳輸，但仍需考慮設備端的資料隱私與安全問題。' }
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
      optionExplanations: { A: '訓練時間屬於技術執行層面的指標，不能直接反映 AI 對業務帶來的商業價值。', B: '模型大小是技術規格，與 AI 能為企業創造多少商業價值沒有直接關係。', C: null, D: '編程語言是開發工具的選擇，不影響 AI 預測結果對業務的實際價值。' }
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
      optionExplanations: { A: '模型訓練成本是可行性評估的重要項目，直接影響專案預算與投資報酬率。', B: null, C: 'AI 系統的維護成本是可行性評估的一環，影響長期營運的可持續性。', D: 'AI 技術的適用性是評估該技術能否解決目標問題的核心考量。' }
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
      optionExplanations: { A: '限制使用範圍只是迴避問題，並未從根本上解決偏見的來源。', B: '增強自學能力可能讓模型從有偏見的資料中學到更多偏見，反而加劇問題。', C: null, D: '使用少量數據訓練更容易導致樣本不具代表性，反而加重偏見問題。' }
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
      optionExplanations: { A: '模型的可擴展性是技術選型的重要考量，確保系統能應對未來的成長需求。', B: '開發團隊的技術熟練度直接影響開發效率與品質，是選型時的關鍵因素。', C: null, D: '訓練數據的品質決定了模型的效果，是技術選型時必須考量的要素。' }
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
      optionExplanations: { A: null, B: '測試與生產環境通常使用相同的演算法，算法差異不是表現落差的常見原因。', C: 'GPU 計算能力影響推論速度，但不會直接導致模型準確度下降。', D: '過擬合處理是訓練階段的問題，且過擬合反而會讓測試表現虛高，不是「未經處理」造成的。' }
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
      optionExplanations: { A: null, B: '減少計算資源消耗屬於效能優化範疇，不是模型監測的主要目的。', C: '提升運行速度是推論優化的目標，模型監測著重的是品質而非速度。', D: '透明度屬於可解釋性（XAI）的範疇，與模型監測的持續追蹤目標不同。' }
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
      optionExplanations: { A: null, B: '減少訓練數據量會降低模型的學習效果，且無法確保公平性。', C: '只使用特定群體的數據會加劇偏見，使模型對其他群體產生不公平的預測。', D: '限制學習能力會降低模型的效能，且與公平性無直接關聯。' }
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
      optionExplanations: { A: '儲存模型數據是資料庫或檔案系統的功能，API 的用途是提供介面而非儲存。', B: null, C: '訓練模型是機器學習框架的工作，API 負責的是系統間的溝通與資料傳遞。', D: 'API 不限制運算能力，其功能是提供標準化的存取介面。' }
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
      optionExplanations: { A: null, B: '限制學習能力會使模型無法適應新的資料變化，降低系統的持續有效性。', C: '不再更新模型會導致資料漂移問題，使模型在環境變化後表現逐漸下降。', D: '減少 AI 在業務中的應用是迴避問題，無法確保系統的持續有效性。' }
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
      optionExplanations: { A: 'MLOps 的重點不在於減少計算資源，而是建立自動化的部署與維運流程。', B: null, C: '減少參數數量是模型壓縮或剪枝的目標，與 MLOps 的維運管理目標不同。', D: '增強模型複雜度是模型設計的考量，MLOps 關注的是從開發到部署的完整生命週期管理。' }
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
      optionExplanations: { A: null, B: '允許 AI 不受監管的自主學習違反了責任使用原則，可能產生不可控的風險。', C: '限制所有商業應用過於極端，責任使用是在合理範圍內規範使用方式，而非全面禁止。', D: '使用開源或非開源模型是技術選擇，與 AI 責任使用原則無直接關聯。' }
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
      optionExplanations: { A: null, B: '數據量多不代表品質好，低品質的大量資料反而可能導致模型學到錯誤的模式。', C: '只考慮精度過於片面，可行性評估還需考慮資料、成本、部署環境等多種因素。', D: '訓練時間是次要因素，資料品質與可用性才是決定 AI 專案能否成功的關鍵。' }
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
      optionExplanations: { A: '倫理規範是更廣泛的概念，公平性是其中一個面向，但核心關注的是資料均衡與結果無偏。', B: null, C: '運行速度屬於效能指標，與公平性的偏見問題無關。', D: '可解釋性是另一個獨立的風險管理面向，與公平性關注的資料均衡問題不同。' }
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
      optionExplanations: { A: '準確度是衡量模型預測正確性的核心指標，屬於部署前必要的評估項目。', B: '模型大小影響部署環境的儲存與記憶體需求，是部署評估的重要考量。', C: '記憶體使用量直接影響模型能否在目標硬體上正常運行，是部署前的必要評估。', D: null }
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
      optionExplanations: { A: '參數量越大反而會增加推論時間，對即時應用來說可能造成延遲問題。', B: null, C: '訓練時間是離線階段的考量，與即時應用運行時的推論速度無關。', D: 'RNN 只是其中一種模型結構，即時應用的選擇應以推論速度為優先，不限於特定架構。' }
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
      optionExplanations: { A: '易於擴展是 API 設計的關鍵原則，確保系統能隨需求成長而擴充功能。', B: '資料格式標準化是 API 設計的重要原則，確保不同系統間能正確交換資料。', C: null, D: '安全性與權限控管是 API 設計的基本要求，防止未授權的存取與資料洩露。' }
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
      optionExplanations: { A: '訓練數據大小是模型開發階段的考量，邊緣部署更關注推論階段的資源限制。', B: null, C: '模型複雜度在邊緣計算中非常重要，過於複雜的模型無法在受限的設備上運行。', D: '只考慮準確度而忽略功耗與資源限制，可能導致模型無法在邊緣設備上實際部署。' }
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
      optionExplanations: { A: '選擇演算法是後續步驟，必須先確認業務需求才能知道需要什麼樣的演算法。', B: '設定評估指標也需要先釐清業務目標，才能定義合適的衡量標準。', C: null, D: '模型微調是開發後期的工作，在規劃初期尚未到達這個階段。' }
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
      optionExplanations: { A: '增加計算效能是硬體或演算法優化的目標，與可解釋性的信任建立目的不同。', B: null, C: '可解釋性的目的是讓人理解決策過程，與模型的安全防禦能力無直接關係。', D: '降低計算成本是效能優化的目標，可解釋性技術有時反而會增加額外的計算開銷。' }
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
      optionExplanations: { A: null, B: '減少訓練次數無法解決數據分佈變化的問題，反而可能讓模型學習不足。', C: '增加參數不能解決資料分佈不一致的根本問題，應從資料源頭著手更新。', D: '讓系統自動調整權重在無監督的情況下可能產生不可預期的結果，且無法根本解決資料漂移。' }
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
      optionExplanations: { A: null, B: '降低訓練成本是效能與預算管理的目標，與公平性評估的偏見檢測無關。', C: '讓 AI 自行決策可能產生不受控的偏見，公平性評估需要人為監督與審查。', D: '減少計算量是效能優化的範疇，與確保模型對不同群體公平無偏的目標不同。' }
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
      optionExplanations: { A: '資料隱私與保護是 AI 導入的核心風險，涉及法規合規與用戶權益。', B: '算法公平性是重要的風險考量，偏見的模型可能導致歧視性決策。', C: null, D: '模型決策透明度是核心風險考量，不透明的決策會降低信任並增加法規風險。' }
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
      optionExplanations: { A: 'RESTful API 確實適合異構數據整合，但不是唯一的選項，其他技術同樣適用。', B: '微服務架構也適合異構數據整合，但不是唯一的選項，應搭配其他技術一起使用。', C: '事件驅動架構同樣適合異構數據整合，但不是唯一的選項，三者皆可使用。', D: null }
    }
]
