/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-mock-part1.js
 * 功能：模擬題 科目二（第 1-18 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 1,
      question: 'AI 在製造業的「智慧工廠」應用中，主要技術挑戰是？',
      options: [
        { label: 'A', text: 'AI 模型如何與機械設備整合' },
        { label: 'B', text: '影像辨識技術的準確度' },
        { label: 'C', text: '測試 AI 在不同環境的穩定性' },
        { label: 'D', text: '以上皆是' }
      ],
      answer: 'D',
      chapter: 'AI 產業應用',
      explanation: '智慧工廠的AI應用需解決設備整合、影像辨識準確度和環境穩定性等多重挑戰。',
      optionExplanations: { A: '模型與設備整合確實是挑戰之一，但不是唯一的挑戰，答案應選「以上皆是」。', B: '影像辨識準確度確實是挑戰之一，但不是唯一的挑戰，答案應選「以上皆是」。', C: '環境穩定性測試確實是挑戰之一，但不是唯一的挑戰，答案應選「以上皆是」。', D: null }
    },
    {
      id: 2,
      question: '根據案例，某製造業產線使用電腦視覺技術的主要目的是？',
      options: [
        { label: 'A', text: '提升員工的工作效率' },
        { label: 'B', text: '自動檢測產品缺陷，提高產品品質' },
        { label: 'C', text: '監控生產設備的能源消耗' },
        { label: 'D', text: '優化生產線的人力配置' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: '電腦視覺在製造業中用於自動檢測產品缺陷，確保品質並減少人工檢查。',
      optionExplanations: { A: '提升效率是間接效益，電腦視覺的主要目的是自動檢測產品缺陷。', B: null, C: '能源監控不是電腦視覺技術的主要應用方向。', D: '人力配置優化屬於排程管理範疇，非電腦視覺的核心用途。' }
    },
    {
      id: 3,
      question: '在科技製造業公司的構想評估表中，下列哪個企業課題被認為與減少人工及營業額大幅波動風險直接相關？',
      options: [
        { label: 'A', text: '專案執行預警' },
        { label: 'B', text: 'OA用品需量預測，配合大量訂買' },
        { label: 'C', text: '營業額變化原因分析及提早預警' },
        { label: 'D', text: '行業薪資建議' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: '營業額變化分析和預警可識別波動原因，減少人工和財務風險。',
      optionExplanations: { A: '專案執行預警關注的是專案進度風險，與營業額波動和人工成本無直接關聯。', B: 'OA用品需量預測僅涉及辦公用品採購，與營業額波動風險無關。', C: null, D: '行業薪資建議屬於人力資源參考，無法解決營業額大幅波動的風險。' }
    },
    {
      id: 4,
      question: '科技製造業公司在選定應用範圍時，下列哪個部門未被列為考慮導入AI的範疇？',
      options: [
        { label: 'A', text: '製造' },
        { label: 'B', text: '業務' },
        { label: 'C', text: '庶務' },
        { label: 'D', text: '產品工程' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: '庶務部門（如行政管理）與AI應用關聯較低，製造、業務和產品工程更具應用價值。',
      optionExplanations: { A: '製造部門是AI導入的重點範疇，例如瑕疵檢測和智慧排程。', B: '業務部門可透過AI進行需求預測和客戶分析，屬於導入範疇。', C: null, D: '產品工程部門可利用AI進行設計優化和模擬分析，屬於導入範疇。' }
    },
    {
      id: 5,
      question: '針對科技製造業公司，下列哪個AI方案與減少人工作業及採購預算的需求最直接相關？',
      options: [
        { label: 'A', text: '專利矩陣' },
        { label: 'B', text: '原物料性質模擬分析' },
        { label: 'C', text: '大數據分析 • 需量預測' },
        { label: 'D', text: '邊緣運算AI機械人' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: '大數據分析和需量預測可優化採購決策，減少人工和預算浪費。',
      optionExplanations: { A: '專利矩陣用於智財分析，與減少人工作業及採購預算無直接關聯。', B: '原物料性質模擬分析偏重材料研發，無法直接減少採購預算。', C: null, D: '邊緣運算AI機器人偏向現場自動化，與採購預算優化的需求不直接相關。' }
    },
    {
      id: 6,
      question: '在製造業產線的少量多樣生產情境下，導入AI影像辨識的目的是為了？',
      options: [
        { label: 'A', text: '有效安排產線各站人數，達到線平衡' },
        { label: 'B', text: '整合MES/RMS/APS系統，建立自動排程' },
        { label: 'C', text: '自動檢視人工插件動作，找出不符作業或多餘行為並即時警示' },
        { label: 'D', text: '建立一產線平衡人力配置方案' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: 'AI影像辨識可自動檢查人工插件動作，減少錯誤並提升效率。',
      optionExplanations: { A: '人數安排屬於產線平衡規劃，非影像辨識的直接用途。', B: '系統整合與自動排程屬於智慧排程範疇，與影像辨識無直接關係。', C: null, D: '人力配置方案屬於管理規劃，不是影像辨識技術的應用目的。' }
    },
    {
      id: 7,
      question: '某科技業欲導入AI智慧排程系統以因應訂單少量多樣的需求，最需要整合哪些系統的資訊？',
      options: [
        { label: 'A', text: 'ERP/CRM/SCM' },
        { label: 'B', text: 'MES/RMS/APS' },
        { label: 'C', text: 'HR/OA/KM' },
        { label: 'D', text: 'CAD/CAM/PLM' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: 'MES/RMS/APS系統提供製造執行、資源管理和進階計劃數據，適合智慧排程整合。',
      optionExplanations: { A: 'ERP/CRM/SCM偏向企業資源、客戶關係和供應鏈管理，非直接支援產線排程。', B: null, C: 'HR/OA/KM屬於人事、辦公和知識管理系統，與生產排程無關。', D: 'CAD/CAM/PLM屬於產品設計與生命週期管理，非排程所需的核心系統。' }
    },
    {
      id: 8,
      question: '若企業的經營痛點為「人力進行品質檢測耗時且漏檢率高」，根據資料，此痛點可透過下列哪種AI應用來解決？',
      options: [
        { label: 'A', text: '設備預測性維護' },
        { label: 'B', text: '智慧生產排程' },
        { label: 'C', text: '呆滯庫存管理' },
        { label: 'D', text: 'AI瑕疵檢測' }
      ],
      answer: 'D',
      chapter: 'AI 產業應用',
      explanation: 'AI瑕疵檢測通過影像辨識自動檢查產品缺陷，降低漏檢率並提升效率。',
      optionExplanations: { A: '設備預測性維護是預防設備故障，無法解決品質檢測漏檢問題。', B: '智慧生產排程優化的是生產順序與資源配置，非品質檢測。', C: '呆滯庫存管理針對的是庫存積壓問題，與品質檢測無關。', D: null }
    },
    {
      id: 9,
      question: '針對「急單插單造成額外生產成本」的業務痛點，資料中建議可透過下列哪種AI應用來緩解？',
      options: [
        { label: 'A', text: 'AI瑕疵檢測' },
        { label: 'B', text: '智慧生產排程' },
        { label: 'C', text: '設備預測性維護' },
        { label: 'D', text: '呆滯庫存管理' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: '智慧生產排程可優化訂單安排，減少急單插單的成本影響。',
      optionExplanations: { A: 'AI瑕疵檢測用於品質把關，無法解決急單插單的排程問題。', B: null, C: '設備預測性維護是預防設備故障，與訂單排程無關。', D: '呆滯庫存管理處理的是庫存問題，無法緩解急單插單的成本。' }
    },
    {
      id: 10,
      question: '師傅能基於經驗聽出設備異音便知零件損壞，但新進員工不具備相應知識，此痛點可透過下列哪種AI應用來傳承經驗？',
      options: [
        { label: 'A', text: 'AI瑕疵檢測' },
        { label: 'B', text: '智慧生產排程' },
        { label: 'C', text: '設備預測性維護' },
        { label: 'D', text: '呆滯庫存管理' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: '設備預測性維護通過分析感測器數據（如聲音、振動）預測故障，傳承專家經驗。',
      optionExplanations: { A: 'AI瑕疵檢測針對產品外觀缺陷，無法傳承師傅聽音辨故障的經驗。', B: '智慧排程優化的是生產順序，與設備異音診斷無關。', C: null, D: '呆滯庫存管理處理的是庫存積壓問題，與設備故障經驗傳承無關。' }
    },
    {
      id: 11,
      question: '下列哪一項不屬於規劃AI產出中「AI瑕疵檢測」可能提供的分析結果？',
      options: [
        { label: 'A', text: '分析瑕疵位置、類型、佔比' },
        { label: 'B', text: '產品A瑕疵率與產品B瑕疵率的比較' },
        { label: 'C', text: '優化產線排程，最佳配置生產資源' },
        { label: 'D', text: '產品A的某種瑕疵類型主要位於特定部位' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: 'AI瑕疵檢測專注於分析缺陷特徵，產線排程優化屬於其他應用。',
      optionExplanations: { A: '分析瑕疵位置、類型、佔比是瑕疵檢測的核心產出之一。', B: '不同產品瑕疵率比較屬於瑕疵檢測的分析範疇。', C: null, D: '特定瑕疵類型的位置分析是瑕疵檢測可提供的細部結果。' }
    },
    {
      id: 12,
      question: '在規劃AI產出中，「設備預測性維護」的主要目標是？',
      options: [
        { label: 'A', text: '分析瑕疵位置、類型、佔比' },
        { label: 'B', text: '預測近期及長期設備故障可能性，以利維護或更換零件' },
        { label: 'C', text: '優化出貨方式，依客戶對品質接受度出貨' },
        { label: 'D', text: '優化產線排程，最佳配置生產資源' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: '設備預測性維護通過數據分析預測故障，減少停機時間並延長設備壽命。',
      optionExplanations: { A: '分析瑕疵位置與類型屬於AI瑕疵檢測的產出，非預測性維護。', B: null, C: '優化出貨方式屬於物流與品質管理範疇，非預測性維護的目標。', D: '優化產線排程屬於智慧生產排程的功能，非預測性維護。' }
    },
    {
      id: 13,
      question: '為了實現「智慧生產排程」的AI產出，需要收集的結構化數據不包含下列哪一項？',
      options: [
        { label: 'A', text: '設備數據' },
        { label: 'B', text: '訂單數據' },
        { label: 'C', text: '排程數據' },
        { label: 'D', text: '設備手冊' }
      ],
      answer: 'D',
      chapter: 'AI 產業應用',
      explanation: '設備手冊屬於非結構化數據，智慧排程需設備、訂單和排程等結構化數據。',
      optionExplanations: { A: '設備數據（如產能、狀態）是智慧排程的必要結構化輸入。', B: '訂單數據（如數量、交期）是排程規劃的核心結構化資訊。', C: '排程數據（如歷史排程紀錄）是優化排程演算法的重要依據。', D: null }
    },
    {
      id: 14,
      question: '在導入AI瑕疵檢測時，下列哪一項屬於可能需要支出的硬體費用？',
      options: [
        { label: 'A', text: '數據儲存、運算費用' },
        { label: 'B', text: '使用者介面、通訊介面開發費用' },
        { label: 'C', text: '高分辨率相機、專用光源' },
        { label: 'D', text: '數據標記、預處理工具費用' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: 'AI瑕疵檢測需高分辨率相機和專用光源以捕捉清晰圖像，屬於硬體費用。',
      optionExplanations: { A: '數據儲存與運算費用屬於雲端或伺服器的軟體/服務費用，非硬體支出。', B: '介面開發費用屬於軟體開發成本，非硬體費用。', C: null, D: '數據標記和預處理工具屬於軟體工具費用，非硬體支出。' }
    },
    {
      id: 15,
      question: '根據設計階段工作表彙整（以AI瑕疵檢測為例），確認AI導入目標時需要量化的內容不包含？',
      options: [
        { label: 'A', text: '人力投入' },
        { label: 'B', text: '品檢人員數量' },
        { label: 'C', text: '設定AI模型精準度目標' },
        { label: 'D', text: '每天生產線啟動前負責人檢查的時間' }
      ],
      answer: 'D',
      chapter: 'AI 產業應用',
      explanation: '負責人檢查時間屬於流程細節，非AI導入目標量化的核心內容。',
      optionExplanations: { A: '人力投入是AI導入目標量化的重要指標，用於衡量人力節省效益。', B: '品檢人員數量是量化現況的關鍵數據，可作為AI取代效益的基準。', C: '設定AI模型精準度目標是確認導入目標時的核心量化內容。', D: null }
    },
    {
      id: 16,
      question: '在設計階段工作表彙整，下列哪個項目屬於「與現況比較」的範疇？',
      options: [
        { label: 'A', text: '欲解決因意外維修或故障而停止生產的時間' },
        { label: 'B', text: '想用AI取代生產線負責人每天早上進行的檢查工作' },
        { label: 'C', text: '消除既有人力投入' },
        { label: 'D', text: '運行數據的年份' }
      ],
      answer: 'A',
      chapter: 'AI 產業應用',
      explanation: '意外維修停機時間是現況問題，與AI導入後的改善效果直接比較。',
      optionExplanations: { A: null, B: '用AI取代檢查工作屬於「導入目標」的設定，非現況比較。', C: '消除人力投入屬於「預期效益」的描述，非與現況的比較項目。', D: '運行數據的年份屬於「數據盤點」範疇，非與現況比較的內容。' }
    },
    {
      id: 17,
      question: '在製造業的瑕疵檢測模型中，若早班檢測產品瑕疵的精確率為90%，而晚班的精確率只有80%，這體現了？',
      options: [
        { label: 'A', text: '錯誤率的差異' },
        { label: 'B', text: '精確度的差異' },
        { label: 'C', text: '召回率中的差距' },
        { label: 'D', text: '精確率的差異' }
      ],
      answer: 'D',
      chapter: 'AI 產業應用',
      explanation: '精確率差異指不同班次在瑕疵檢測中的正類預測正確率不同，需進一步分析原因。',
      optionExplanations: { A: '錯誤率是整體預測錯誤的比例，題目明確指出的是精確率（Precision）數值差異。', B: '精確度（Accuracy）是整體正確率的概念，與題目所述的精確率（Precision）不同。', C: '召回率（Recall）衡量的是實際正類被正確找出的比例，題目描述的是精確率。', D: null }
    },
    {
      id: 18,
      question: '針對「生產過程中存在瓶頸，資源分配不均」的企業痛點，資料建議可使用下列哪種AI技術來匹配？',
      options: [
        { label: 'A', text: '機器人流程自動化（RPA）' },
        { label: 'B', text: '預測分析技術' },
        { label: 'C', text: 'AI技術優化資源配置' },
        { label: 'D', text: '自然語言處理（NLP）' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: 'AI資源配置優化通過分析數據解決瓶頸，提升生產效率。',
      optionExplanations: { A: 'RPA主要用於自動化重複性流程任務，無法解決資源分配不均的瓶頸問題。', B: '預測分析技術用於預測未來趨勢，但無法直接優化當前的資源配置。', C: null, D: 'NLP專注於文字處理與語言理解，與生產資源配置的最佳化無關。' }
    },
]
