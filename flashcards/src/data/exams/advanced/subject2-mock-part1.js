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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
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
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
]
