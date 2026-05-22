/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part2b.js
 * 功能：模擬題 科目一（第 72-94 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 72,
      question: '量子運算 (Quantum Computing) 對 AI 的潛在影響是？',
      options: [
        { label: 'A', text: 'AI 訓練速度顯著提升' },
        { label: 'B', text: 'AI 模型將無需數據訓練' },
        { label: 'C', text: 'AI 無法與量子運算結合' },
        { label: 'D', text: 'AI 只能應用於圖像識別' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '量子運算可加速複雜計算，提升AI訓練速度，特別是在大規模數據處理中。',
      optionExplanations: { A: null, B: 'AI 模型仍需數據訓練，量子運算只是加速計算過程，並非消除數據需求。', C: '量子運算與 AI 結合是目前重要的研究方向，兩者並非無法結合。', D: 'AI 的應用範圍廣泛，量子運算可加速各種 AI 任務，不限於圖像識別。' }
    },
    {
      id: 73,
      question: 'AI 在自動化程式碼生成 (如 GitHub Copilot) 的應用，最可能的挑戰是？',
      options: [
        { label: 'A', text: '確保生成程式碼的安全性' },
        { label: 'B', text: 'AI 產生的程式碼無法被執行' },
        { label: 'C', text: 'AI 只能產生 Python 程式碼' },
        { label: 'D', text: '無法應用於軟體開發' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '自動化程式碼生成需確保生成代碼的安全性和正確性，避免引入漏洞。',
      optionExplanations: { A: null, B: 'AI 產生的程式碼是可以被執行的，只是可能存在安全性或正確性問題。', C: 'GitHub Copilot 等工具支援多種程式語言，並非只能產生 Python。', D: 'AI 程式碼生成已廣泛應用於軟體開發中，如自動補全、程式碼建議等。' }
    },
    {
      id: 74,
      question: 'AI 在智慧城市 (Smart City) 應用中的主要挑戰不包括？',
      options: [
        { label: 'A', text: '交通管理與即時數據處理的需求' },
        { label: 'B', text: 'AI 演算法的能源消耗問題' },
        { label: 'C', text: '增強 AI 在社會治理中的決策權限' },
        { label: 'D', text: '數據隱私與資安問題' }
      ],
      answer: 'C',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '智慧城市的AI挑戰包括即時處理、能耗和隱私問題，社會治理決策權限非技術挑戰。',
      optionExplanations: { A: '交通管理需即時處理大量感測器數據，確實是智慧城市的技術挑戰之一。', B: 'AI 演算法的高能源消耗是智慧城市規模化部署時需面對的實際問題。', C: null, D: '城市中大量個人數據的蒐集與使用，資料隱私與資安確實是重大挑戰。' }
    },
    {
      id: 75,
      question: 'AI 在教育領域的應用主要目標是？',
      options: [
        { label: 'A', text: '完全取代人類教師' },
        { label: 'B', text: '對學生需求提供個人化學習體驗' },
        { label: 'C', text: '限制 AI 在學術研究的應用' },
        { label: 'D', text: '讓學生被動學習 AI 技術' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'AI在教育中通過分析學生數據提供個人化學習，提升學習效果而非取代教師。',
      optionExplanations: { A: 'AI 在教育中是輔助角色，無法完全取代教師的情感互動與引導功能。', B: null, C: 'AI 在學術研究中有廣泛應用，教育領域的目標並非限制其應用。', D: 'AI 教育的目標是讓學生主動學習，而非被動接受，強調互動與個人化。' }
    },
    {
      id: 76,
      question: 'AI 在自動駕駛領域的發展瓶頸主要是？',
      options: [
        { label: 'A', text: 'AI 演算法的計算速度' },
        { label: 'B', text: '環境變數的複雜性與未預測事件的應對能力' },
        { label: 'C', text: '只能應用於高速公路，無法用於城市道路' },
        { label: 'D', text: 'AI 模型無法學習駕駛行為' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '自動駕駛需處理複雜環境和突發事件，環境變數和應對能力是主要瓶頸。',
      optionExplanations: { A: '計算速度已有顯著提升，目前主要瓶頸在於環境理解與突發事件應對。', B: null, C: '自動駕駛技術可應用於城市道路，只是城市環境更複雜，並非無法使用。', D: 'AI 模型已能學習駕駛行為，問題在於複雜情境的泛化能力不足。' }
    },
    {
      id: 77,
      question: 'AI 在醫療影像分析的應用中，最重要的數據需求是？',
      options: [
        { label: 'A', text: '擁有大量標註清楚的高品質醫療影像數據' },
        { label: 'B', text: '快速的數據處理速度' },
        { label: 'C', text: '標準化的醫療報告格式' },
        { label: 'D', text: '公開的醫療影像數據庫' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '醫療影像分析需高品質、標註清楚的數據，確保模型的準確性和可靠性。',
      optionExplanations: { A: null, B: '處理速度是硬體考量，醫療影像最關鍵的是數據品質與標註準確性。', C: '報告格式標準化有助於流程，但非影像分析模型訓練的最重要數據需求。', D: '公開數據庫有幫助但非最重要，醫療影像需經專業標註才能有效訓練模型。' }
    },
    {
      id: 78,
      question: '根據傳統產業公司的構想評估表，為了依專利佈局分析技術發展趨勢，導入AI的主要必要性為何？',
      options: [
        { label: 'A', text: '減少資深同仁離開造成的整體經驗流失' },
        { label: 'B', text: '縮短開發試誤期及資源浪費' },
        { label: 'C', text: '降低人員留任率' },
        { label: 'D', text: '需先匯入全球各地專利資料，透過預發展技術的關鍵字來檢索相關專利熱度及投入的可行性' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'AI通過分析全球專利數據和關鍵字，評估技術趨勢，降低試誤成本。',
      optionExplanations: { A: '減少經驗流失是知識管理的目標，與專利佈局分析技術趨勢的需求不直接相關。', B: '縮短試誤期是導入 AI 的效益之一，但非針對專利佈局分析的主要必要性。', C: '降低人員留任率是負面結果，不應是導入 AI 的目標。', D: null }
    },
    {
      id: 79,
      question: '在評估員工培訓計劃是否能提高生產力的原因推斷案例中，作為控制變量收集的員工背景信息不包含？',
      options: [
        { label: 'A', text: '年齡' },
        { label: 'B', text: '性別' },
        { label: 'C', text: '培訓課程參與時長' },
        { label: 'D', text: '教育水平' }
      ],
      answer: 'C',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '培訓課程參與時長是因變量或結果變量，非控制變量；年齡、性別和教育水平是背景控制變量。',
      optionExplanations: { A: '年齡是員工背景資訊，屬於需要控制的混淆變量，以排除其對結果的影響。', B: '性別是員工背景資訊，屬於控制變量，用於確保分析結果的公正性。', C: null, D: '教育水平是員工背景資訊，屬於控制變量，可能影響生產力表現。' }
    },
    {
      id: 80,
      question: '在自動駕駛車輛的行人識別系統中，通過反事實分析發現模型對光照條件的變化反應過於劇烈，下列哪個調整措施不是針對此問題的可能解決方案？',
      options: [
        { label: 'A', text: '增加訓練數據的多樣性' },
        { label: 'B', text: '調整模型的特徵權重' },
        { label: 'C', text: '引入輔助特徵' },
        { label: 'D', text: '優化模型部署的硬體配置' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '硬體配置優化與光照條件敏感性無直接關係，數據多樣性和特徵調整更有效。',
      optionExplanations: { A: '增加不同光照條件的訓練數據，可讓模型學習更穩健的特徵，是有效的解決方案。', B: '調整特徵權重可降低模型對光照特徵的過度依賴，是針對性的改善方法。', C: '引入如紅外線等輔助特徵，可減少對可見光的依賴，提升辨識穩定性。', D: null }
    },
    {
      id: 81,
      question: '在醫療領域，知識挖掘不被應用於？',
      options: [
        { label: 'A', text: '病歷分析' },
        { label: 'B', text: '基因研究' },
        { label: 'C', text: '藥物研發' },
        { label: 'D', text: '醫療影像的增強處理' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '醫療影像增強屬於電腦視覺，知識挖掘主要用於病歷、基因和藥物研發的數據分析。',
      optionExplanations: { A: '病歷分析是知識挖掘的典型應用，可從大量病歷中發現疾病模式與治療規律。', B: '基因研究透過知識挖掘分析基因序列數據，發現基因與疾病的關聯。', C: '藥物研發利用知識挖掘探索化合物與療效的關係，加速新藥發現。', D: null }
    },
    {
      id: 82,
      question: '在AI應用於客戶服務時，聊天機器人（Chatbot）的主要優勢是？',
      options: [
        { label: 'A', text: '完全取代人類客服' },
        { label: 'B', text: '提供24/7即時回應並降低人力成本' },
        { label: 'C', text: '無需任何數據訓練' },
        { label: 'D', text: '僅能處理簡單的查詢' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '聊天機器人提供全天候服務，降低人力成本，同時保留複雜問題給人類客服。',
      optionExplanations: { A: '聊天機器人無法完全取代人類客服，複雜或情感性問題仍需人工處理。', B: null, C: '聊天機器人需要大量對話數據進行訓練，才能提供準確的回應。', D: '現代聊天機器人已能處理複雜查詢，並非僅限於簡單問題。' }
    },
    {
      id: 83,
      question: 'AI 導入評估時，主要關注以下哪個因素？',
      options: [
        { label: 'A', text: '企業財務狀況' },
        { label: 'B', text: 'AI 模型的計算成本、數據可用性、技術適配性' },
        { label: 'C', text: '競爭對手的 AI 技術應用狀況' },
        { label: 'D', text: '員工的薪資結構' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'AI導入評估需考慮計算成本、數據可用性和技術適配性，這些直接影響項目的可行性和效果。',
      optionExplanations: { A: '財務狀況是企業整體考量，但 AI 導入評估更關注技術面的可行性因素。', B: null, C: '競爭對手的狀況可作為參考，但非 AI 導入評估的核心技術因素。', D: '薪資結構屬於人力資源管理範疇，與 AI 技術導入評估無直接關聯。' }
    },
    {
      id: 84,
      question: 'AI 風險管理主要考量以下哪個風險？',
      options: [
        { label: 'A', text: '硬體設備損壞風險' },
        { label: 'B', text: 'AI 產生偏見與數據隱私風險' },
        { label: 'C', text: '企業品牌風險' },
        { label: 'D', text: '法律合規風險' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'AI風險管理中，偏見和數據隱私是主要風險，可能導致不公平決策或違反法規。',
      optionExplanations: { A: '硬體損壞屬於一般 IT 風險，並非 AI 風險管理特有的考量重點。', B: null, C: '品牌風險是企業整體風險管理的範疇，非 AI 風險管理的主要考量。', D: '法律合規是廣義風險，AI 風險管理更聚焦於偏見與隱私等 AI 特有問題。' }
    },
    {
      id: 85,
      question: 'AI 導入規劃時，以下哪個步驟最先進行？',
      options: [
        { label: 'A', text: '選擇 AI 平台' },
        { label: 'B', text: '確定應用場景與需求分析' },
        { label: 'C', text: '設計 AI 模型' },
        { label: 'D', text: '訓練數據' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '確定應用場景和需求分析是AI導入的首要步驟，確保後續工作與業務目標一致。',
      optionExplanations: { A: '選擇 AI 平台需在明確需求後才進行，否則無法選擇最適合的平台。', B: null, C: '設計模型需要先確定應用場景與需求，才知道要解決什麼問題。', D: '訓練數據的準備需在需求分析和模型設計之後，屬於較後期的步驟。' }
    },
    {
      id: 86,
      question: 'AI 導入評估報告中，哪個指標最能反映模型的準確度？',
      options: [
        { label: 'A', text: '訓練時間' },
        { label: 'B', text: '模型權重大小' },
        { label: 'C', text: '混淆矩陣（Confusion Matrix）' },
        { label: 'D', text: 'GPU 計算能力' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '混淆矩陣提供真陽性、假陽性等指標，直接反映模型的預測準確度。',
      optionExplanations: { A: '訓練時間反映的是計算效率，與模型預測準確度沒有直接關係。', B: '模型權重大小反映模型複雜度，不能直接衡量預測準確度。', C: null, D: 'GPU 計算能力是硬體規格，影響訓練速度但不反映模型準確度。' }
    },
    {
      id: 87,
      question: '在 AI 模型部署時，選擇邊緣運算的主要優勢是？',
      options: [
        { label: 'A', text: '降低雲端運算成本並提高即時性' },
        { label: 'B', text: '提供無限的存儲空間' },
        { label: 'C', text: '能夠減少對 AI 模型的需求' },
        { label: 'D', text: '保證 100% 無延遲' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '邊緣運算將計算移到設備端，降低雲端成本並提升即時性，適合低延遲場景。',
      optionExplanations: { A: null, B: '邊緣設備的儲存空間有限，無法提供無限儲存，這是雲端的優勢。', C: '邊緣運算是部署方式的選擇，不會減少對 AI 模型本身的需求。', D: '邊緣運算能降低延遲但無法保證 100% 無延遲，仍受硬體與網路影響。' }
    },
    {
      id: 88,
      question: 'AI 項目導入時，影響可行性的主要因素不包括？',
      options: [
        { label: 'A', text: '技術成熟度' },
        { label: 'B', text: '訓練數據的可用性' },
        { label: 'C', text: '企業組織結構' },
        { label: 'D', text: '模型的推理時間' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '企業組織結構對AI項目可行性的直接影響較小，技術成熟度和數據可用性更關鍵。',
      optionExplanations: { A: '技術成熟度直接影響 AI 方案能否落地，是可行性評估的重要因素。', B: '訓練數據的品質與數量是 AI 專案成功的關鍵，直接影響模型效果。', C: null, D: '推理時間影響部署後的使用者體驗與系統效能，是可行性的考量因素。' }
    },
    {
      id: 89,
      question: 'AI 風險管理過程中，應如何降低 AI 偏見的風險？',
      options: [
        { label: 'A', text: '使用更多 GPU 訓練模型' },
        { label: 'B', text: '增加數據來源的多樣性' },
        { label: 'C', text: '使用較小的數據集' },
        { label: 'D', text: '讓 AI 自動選擇訓練數據' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '增加數據來源多樣性可減少偏見，確保模型學習到更全面的特徵。',
      optionExplanations: { A: '增加 GPU 只能加速訓練，無法解決數據本身存在的偏見問題。', B: null, C: '使用較小的數據集反而可能加劇偏見，因為樣本不夠多樣化。', D: '讓 AI 自動選擇數據可能強化既有偏見，需要人為介入確保數據平衡。' }
    },
    {
      id: 90,
      question: 'AI 導入規劃時，哪個步驟應最晚進行？',
      options: [
        { label: 'A', text: '需求分析' },
        { label: 'B', text: 'AI 模型測試與驗證' },
        { label: 'C', text: '風險評估' },
        { label: 'D', text: 'AI 模型部署' }
      ],
      answer: 'D',
      chapter: '4.3 AI 風險管理',
      explanation: '模型部署是AI導入的最後階段，需在需求分析、測試和風險評估完成後進行。',
      optionExplanations: { A: '需求分析是 AI 導入的第一步，必須最先進行以確定目標方向。', B: '模型測試與驗證在部署之前進行，確保模型品質符合要求。', C: '風險評估在部署前進行，識別潛在問題並制定應對策略。', D: null }
    },
    {
      id: 91,
      question: '以下哪種方法可以用來評估 AI 系統的可解釋性？',
      options: [
        { label: 'A', text: '混淆矩陣' },
        { label: 'B', text: 'LIME（Local Interpretable Model-Agnostic Explanations）' },
        { label: 'C', text: 'Adam 優化器' },
        { label: 'D', text: '梯度下降法' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'LIME是一種可解釋性技術，通過局部線性近似解釋模型預測，提升透明度。',
      optionExplanations: { A: '混淆矩陣用於評估模型的預測準確度，並非用來解釋模型的決策邏輯。', B: null, C: 'Adam 是優化器，用於加速模型訓練的收斂過程，與可解釋性無關。', D: '梯度下降法是模型訓練的最佳化方法，不是評估可解釋性的工具。' }
    },
    {
      id: 92,
      question: 'AI 模型在企業應用中的最大挑戰之一是？',
      options: [
        { label: 'A', text: '訓練時間過短' },
        { label: 'B', text: 'AI 決策過於透明' },
        { label: 'C', text: '缺乏可解釋性與合規性問題' },
        { label: 'D', text: '計算能力過剩' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '缺乏可解釋性和合規性是AI應用的主要挑戰，可能影響信任度和法律合規。',
      optionExplanations: { A: '訓練時間過短通常不是問題，實務上更常面臨訓練時間過長的挑戰。', B: 'AI 決策缺乏透明度才是挑戰，過於透明反而是理想狀態。', C: null, D: '計算能力不足才是常見挑戰，計算能力過剩通常不會構成問題。' }
    },
    {
      id: 93,
      question: '企業導入 AI 技術時，最適合用於實驗性部署的環境是？',
      options: [
        { label: 'A', text: '生產環境' },
        { label: 'B', text: '雲端測試環境' },
        { label: 'C', text: '本地筆記型電腦' },
        { label: 'D', text: '社交媒體平台' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '雲端測試環境提供可控的測試條件，適合實驗性部署，減少對生產環境的影響。',
      optionExplanations: { A: '生產環境用於正式運行，不適合實驗性部署，可能影響現有業務。', B: null, C: '本地筆電的計算資源有限，且缺乏可擴展性，不適合 AI 實驗部署。', D: '社交媒體平台不是部署環境，與 AI 模型的實驗性部署無關。' }
    },
    {
      id: 94,
      question: 'AI 模型的部署策略中，使用「A/B 測試」的主要目的為何？',
      options: [
        { label: 'A', text: '測試不同 AI 模型的表現' },
        { label: 'B', text: '讓 AI 自動選擇最佳模型' },
        { label: 'C', text: '降低 AI 訓練成本' },
        { label: 'D', text: '縮短開發週期' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: 'A/B測試用於比較不同模型或配置的表現，幫助選擇最佳方案。',
      optionExplanations: { A: null, B: 'A/B 測試需要人為設定比較方案，AI 不會自動選擇最佳模型。', C: 'A/B 測試的目的是比較模型表現，與降低訓練成本無直接關係。', D: 'A/B 測試是部署階段的驗證方法，不會縮短開發週期。' }
    }
]
