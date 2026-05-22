/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part3b.js
 * 功能：模擬題 科目一（第 119-141 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
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
      optionExplanations: { A: null, B: '訓練數據的標註方式屬於模型開發階段的考量，與邊緣部署的硬體限制無直接關聯。', C: '邊緣部署的挑戰在於硬體資源限制，不論是否為深度學習模型都需考量資源約束。', D: '邊緣運算常因網路不穩定而需離線推論，網路頻寬的影響其實很大。' }
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
      optionExplanations: { A: '模型參數是否公開屬於技術透明度問題，並非選擇供應商的首要考量。', B: null, C: '團隊規模大不代表服務品質好，重點應在服務是否能解決企業問題。', D: '行銷策略與AI服務的實際品質和適用性無關，不應作為優先考量。' }
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
      optionExplanations: { A: '單機運行無法彈性擴展，當負載增加時會遇到瓶頸，不具可擴展性。', B: null, C: '降低計算量是模型優化手段，但無法解決系統層面的彈性擴展需求。', D: '僅使用本地GPU限制了擴展能力，無法根據需求動態調配資源。' }
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
      optionExplanations: { A: 'MLOps不僅關注訓練效率，還涵蓋部署、監控、版本管理等完整生命週期。', B: null, C: '部署後的監控是MLOps的重要環節，不考慮監控會導致模型退化無法被發現。', D: 'AI模型需要人為監管與維護，完全自主學習可能產生偏差或安全風險。' }
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
      optionExplanations: { A: '混合雲仍需重視資料安全，私有雲部分正是為了保護敏感資料而設計。', B: null, C: '混合雲不一定能減少所有成本，其優勢在於彈性配置而非全面降低費用。', D: '混合雲的重點在於雲端與本地的協作，並非確保所有模型都能離線運行。' }
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
      optionExplanations: { A: '概念漂移影響的是模型預測準確度，與訓練時間長短無直接關係。', B: null, C: '模型參數不會因概念漂移而自動更新，需要人為觸發重新訓練。', D: '概念漂移的定義就是資料分布改變導致準確度下降，不可能保持不變。' }
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
      optionExplanations: { A: '增加請求頻率只會加重伺服器負擔，反而降低效能而非提升。', B: null, C: '降低運算能力會犧牲模型品質，不是提升處理效能的正確策略。', D: '只允許同步請求會造成阻塞，無法有效處理大量並發推論需求。' }
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
      optionExplanations: { A: 'GDPR的核心是保護個人隱私，不是要求數據對公眾開放，恰恰相反。', B: null, C: 'GDPR並未限制AI在特定領域的應用，而是規範資料處理方式與個人權利。', D: 'GDPR要求涉及重大影響的自動化決策須提供人工介入機制，而非鼓勵完全自動化。' }
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
      optionExplanations: { A: '資料量不足可能影響模型泛化能力，但偏見的根源在於資料本身的偏差而非數量。', B: '參數數量影響模型容量，但偏見來自訓練資料中的歷史歧視模式，與參數多寡無關。', C: null, D: '框架只是開發工具，偏見是資料層面的問題，與使用哪個框架無關。' }
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
      optionExplanations: { A: '商業價值固然重要，但AI倫理規範強調的是公平與透明，而非利潤最大化。', B: null, C: '計算資源是技術層面的考量，與AI倫理規範中的公平性和透明度無直接關聯。', D: '降低成本是營運目標，AI倫理的核心在於確保決策不歧視且可被解釋。' }
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
      optionExplanations: { A: null, B: '完全依賴AI決策反而降低透明度，缺乏人為審核會使決策過程更不可控。', C: '單純降低複雜度會犧牲性能，且低複雜度模型不一定就具有良好的可解釋性。', D: '隱藏運作邏輯與提高透明度完全背道而馳，無法讓利害關係人理解決策依據。' }
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
      optionExplanations: { A: '員工社交網絡屬於人際關係範疇，與AI導入的技術可行性評估無關。', B: '供應商合作關係是外部因素，評估AI導入應優先檢視內部的數據與技術準備度。', C: null, D: '競爭對手的策略僅供參考，企業應根據自身數據與技術基礎來評估導入可行性。' }
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
      optionExplanations: { A: '硬體設施屬於基礎架構評估，不屬於員工技能和培訓需求的考量範圍。', B: '數據品質屬於數據準備階段的考量，與員工技能培訓需求是不同面向。', C: null, D: '預期效益分析屬於投資報酬率評估，非員工技能與培訓需求的考量。' }
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
      optionExplanations: { A: '僅考量好處總和忽略了導入難易度，可能選到效益高但極難實現的方案。', B: null, C: '僅考量難易度低的項目可能忽略高效益方案，無法達到最佳資源配置。', D: '僅考量效益最大化而不評估可行性，容易選到難以實現的項目。' }
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
      optionExplanations: { A: '持續發揮價值屬於營運與擴展階段的目標，不是設計階段的主要目的。', B: '確保人員適應變動屬於變革管理與導入階段的工作，非設計階段重點。', C: null, D: '監控模型效能與重新訓練頻率屬於實施/營運階段的任務。' }
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
      optionExplanations: { A: '闡明必要性和培訓屬於導入準備階段，不是確保長期適應動態環境的步驟。', B: '擴展應用規模屬於擴展階段的工作，與維持模型預測能力的持續監控不同。', C: null, D: '解決大規模應用衍生問題屬於組織層面的挑戰，非直接維持模型預測能力的步驟。' }
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
      optionExplanations: { A: '加速技術發展是產業目標，負責任AI的核心是確保發展過程中不造成社會危害。', B: '提高運算效能屬於技術優化範疇，與負責任AI強調的倫理和社會責任無關。', C: null, D: '商業價值最大化是企業經營目標，負責任AI著重於避免負面社會影響。' }
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
      optionExplanations: { A: '預測錯誤比例的差異屬於錯誤率差異的概念，不是精確率差異的定義。', B: '預測值與實際值的差距屬於誤差或偏差的概念，與精確率的定義不同。', C: null, D: '預測正確的整體比例屬於準確率(Accuracy)的概念，精確率(Precision)專指正類預測的正確比例。' }
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
      optionExplanations: { A: '監控應用程式操作問題屬於系統監控的範疇，非模型註冊事件通知的主要目的。', B: '探索訓練與推理間的差異屬於數據漂移監控，不是模型註冊事件的目的。', C: null, D: '基礎設施監控和警報是DevOps的職責，模型註冊事件專注於模型生命週期管理。' }
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
      optionExplanations: { A: '自動化訓練和部署屬於MLOps工具的功能，非負責任AI儀表板的主要用途。', B: '提供雲端運算資源是雲端平台的功能，負責任AI儀表板專注於倫理監控與分析。', C: null, D: '監控硬體資源使用屬於基礎設施監控工具的職責，非負責任AI儀表板的設計目的。' }
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
      optionExplanations: { A: '評估整體效能屬於模型評估的範疇，反事實分析專注於探索改變特徵後的假設結果。', B: null, C: '對數據進行小幅度變動觀察影響屬於微擾技術(Perturbation)的定義，非反事實分析。', D: '提供相反預測的最接近資料點是對比解釋(Contrastive Explanation)的概念，非反事實分析的主要目的。' }
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
      optionExplanations: { A: null, B: '敏感度分析是系統性地測試多個變數的影響程度，此案例僅模擬單一假設變化。', C: '識別偏見需要比較不同群體的待遇差異，此案例只是改變收入觀察結果變化。', D: '調整模型是修改模型參數或結構，此案例只是模擬輸入變化而未改變模型本身。' }
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
      optionExplanations: { A: '生成假設場景屬於反事實分析的定義，微擾技術著重於對現有數據做小幅度變動。', B: '提供相反預測的最接近資料點屬於對比解釋的概念，非微擾技術的主要目的。', C: null, D: '分析微擾如何影響預測是微擾技術的結果應用，而非其主要目的，目的是觀察小幅變動的影響。' }
    }
]
