/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-mock-part2.js
 * 功能：模擬題 科目二（第 19-36 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 19,
      question: '在少量多樣的產線生產中，導入AI的主要目的是為了下列哪一項？',
      options: [
        { label: 'A', text: '全面取代人工插件以降低人力成本' },
        { label: 'B', text: '提升產線設備的智能化程度' },
        { label: 'C', text: '實現產線人力配置最佳化，達到線平衡與生產效率的最大化' },
        { label: 'D', text: '收集更多產線數據以供後續分析' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: 'AI在少量多樣生產中優化人力配置和線平衡，提升效率而非僅取代人工。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 20,
      question: '導入AI影像辨識於產線人工插件的必要性為何？',
      options: [
        { label: 'A', text: '分析產品設計是否合理' },
        { label: 'B', text: '自動檢視人工插件動作，找出不符作業或多餘行為並即時警示' },
        { label: 'C', text: '預測設備故障以減少停機時間' },
        { label: 'D', text: '追蹤物料流向以優化庫存管理' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: 'AI影像辨識可自動檢查插件動作，減少錯誤並提升品質控制效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 21,
      question: '若企業已使用MES/RMS/APS等數位系統多年，這對導入AI智慧排程系統有何助益？',
      options: [
        { label: 'A', text: '可直接進行AI模型的訓練，無需額外數據收集' },
        { label: 'B', text: '有助於整合現有系統資訊，建立自動排程配置功能' },
        { label: 'C', text: '能降低採購GPU伺服器的成本' },
        { label: 'D', text: '可減少AI技術小組的工作量' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: '現有MES/RMS/APS系統提供結構化數據，利於AI整合實現自動排程。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 22,
      question: '評估導入AI的優先順序時，A公司評估工站架設攝像頭的難易程度為3分（1~5最佳）。這主要考量下列哪個因素？',
      options: [
        { label: 'A', text: '現場環境光線及線路佈設的複雜性' },
        { label: 'B', text: '設定標註與SOP的困難度' },
        { label: 'C', text: '影像警示系統與產線系統整合的複雜度' },
        { label: 'D', text: 'AI智慧排程演算法的效能準確度評估' }
      ],
      answer: 'A',
      chapter: 'AI 產業應用',
      explanation: '攝像頭架設的難易程度主要取決於現場環境的光線和線路佈設條件。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 23,
      question: '根據構想評估表，科技製造業A公司將「加快修正人力錯誤、提升製品良率」列為導入AI的可能好處，其評估分數為5分（1~5最佳）。這直接呼應了企業的哪個經營目標？',
      options: [
        { label: 'A', text: '良率提高' },
        { label: 'B', text: '成本降低' },
        { label: 'C', text: '效率提升' },
        { label: 'D', text: '數位轉型' }
      ],
      answer: 'A',
      chapter: 'AI 產業應用',
      explanation: '修正人力錯誤和提升良率直接對應企業的產品品質和良率目標。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 24,
      question: '在產品設計階段導入AI的主要目的是什麼？',
      options: [
        { label: 'A', text: '縮短產品上市時間' },
        { label: 'B', text: '確認AI應用需求規格' },
        { label: 'C', text: '降低產品開發成本' },
        { label: 'D', text: '提升產品創新性' }
      ],
      answer: 'D',
      chapter: 'AI 產業應用',
      explanation: 'AI在產品設計階段通過模擬和分析提升產品創新性，創造更具競爭力的設計。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 25,
      question: '若企業希望透過AI預測材料配方性質以減少試誤成本，最關鍵的企業資源為何？',
      options: [
        { label: 'A', text: '過往開發材料性質及公式' },
        { label: 'B', text: '過往營收細項' },
        { label: 'C', text: '傳統Eip系統資料庫' },
        { label: 'D', text: '過往產出之技術資料、人培訓練素材' }
      ],
      answer: 'A',
      chapter: 'AI 產業應用',
      explanation: '材料配方預測需依賴歷史材料性質和公式數據，作為AI模型的訓練基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 26,
      question: '針對「人力進行品質檢測耗時且漏檢率高」的業務痛點，資料中建議可導入下列哪種AI應用？',
      options: [
        { label: 'A', text: 'AI瑕疵檢測' },
        { label: 'B', text: '設備預測性維護' },
        { label: 'C', text: '智慧生產排程' },
        { label: 'D', text: '呆滯庫存管理' }
      ],
      answer: 'A',
      chapter: 'AI 產業應用',
      explanation: 'AI瑕疵檢測通過影像辨識自動檢查產品缺陷，降低漏檢率並提升效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 27,
      question: '若企業的訂單達交率下降，加班人力成本增加，這可能與下列哪個業務痛點直接相關？',
      options: [
        { label: 'A', text: '人力進行品質檢測耗時且漏檢率高' },
        { label: 'B', text: '急單插單造成額外生產成本' },
        { label: 'C', text: '設備故障造成額外生產成本' },
        { label: 'D', text: '呆滯庫存多，次級品庫存增加' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: '急單插單導致排程混亂，增加加班成本，影響訂單達交率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 28,
      question: '根據資料，設備運行的溫度、電流、振動、轉速、使用時長、運行聲音等數據屬於哪種數據類型？',
      options: [
        { label: 'A', text: '結構化數據-表格' },
        { label: 'B', text: '非結構化數據-音訊、文件' },
        { label: 'C', text: '結構化數據-表格與非結構化數據-音訊、文件皆是' },
        { label: 'D', text: '以上皆非' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: '溫度、電流等是結構化數據（表格形式），運行聲音屬非結構化數據（音訊）。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 29,
      question: '在規劃AI產出以優化產線排程時，需要整合哪些主要的結構化數據？',
      options: [
        { label: 'A', text: '設備數據、訂單數據、排程數據、物料數據' },
        { label: 'B', text: '正常產品圖像、瑕疵產品圖像' },
        { label: 'C', text: '感測器數據、設備手冊、故障數據' },
        { label: 'D', text: '庫存庫齡數據、客戶對品質接受度、進銷存數據分析' }
      ],
      answer: 'A',
      chapter: 'AI 產業應用',
      explanation: '智慧排程需整合設備、訂單、排程和物料等結構化數據，確保全面優化。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 30,
      question: '在AI導入的設計階段，針對「因意外維修或故障而停止生產的時間」這個欲解決的問題，需要確認的數值單位為何？',
      options: [
        { label: 'A', text: '小時/次' },
        { label: 'B', text: '人月' },
        { label: 'C', text: '元' },
        { label: 'D', text: '百分比' }
      ],
      answer: 'A',
      chapter: 'AI 產業應用',
      explanation: '停機時間通常以小時/次量化，反映故障對生產的具體影響。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 31,
      question: '在製造業中，AI用於預測性維護時，主要依賴的數據類型是？',
      options: [
        { label: 'A', text: '市場銷售數據' },
        { label: 'B', text: '設備感測器數據' },
        { label: 'C', text: '員工出勤數據' },
        { label: 'D', text: '財務報表數據' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: '預測性維護依賴設備感測器數據（如溫度、振動）來預測設備故障。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 32,
      question: '在AI應用於製造業的品質控制中，主要使用的技術是？',
      options: [
        { label: 'A', text: '語音識別' },
        { label: 'B', text: '圖像識別與異常檢測' },
        { label: 'C', text: '文本生成' },
        { label: 'D', text: '強化學習' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: '圖像識別與異常檢測用於檢查產品瑕疵，是製造業品質控制的核心技術。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 33,
      question: '在AI應用於供應鏈管理時，預測需求的主要技術是？',
      options: [
        { label: 'A', text: '強化學習' },
        { label: 'B', text: '時間序列分析' },
        { label: 'C', text: '圖像識別' },
        { label: 'D', text: '文本分類' }
      ],
      answer: 'B',
      chapter: 'AI 產業應用',
      explanation: '時間序列分析適合分析和預測隨時間變化的需求數據，是供應鏈管理的核心技術。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 34,
      question: '在AI應用於金融詐欺偵測時，主要使用的技術是？',
      options: [
        { label: 'A', text: '異常檢測（Anomaly Detection）' },
        { label: 'B', text: '圖像生成' },
        { label: 'C', text: '語音合成' },
        { label: 'D', text: '文本生成' }
      ],
      answer: 'A',
      chapter: 'AI 產業應用',
      explanation: '異常檢測用於識別金融交易中的異常模式，是詐欺偵測的核心技術。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 35,
      question: '在AI應用於智慧城市的交通管理中，主要使用的技術不包括？',
      options: [
        { label: 'A', text: '即時數據分析' },
        { label: 'B', text: '圖像識別' },
        { label: 'C', text: '強化學習' },
        { label: 'D', text: '文本生成' }
      ],
      answer: 'D',
      chapter: 'AI 產業應用',
      explanation: '智慧城市交通管理主要依賴即時數據分析、圖像識別和強化學習，文本生成與此無關。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 36,
      question: '在AI應用於客戶關係管理（CRM）時，主要的應用場景不包括？',
      options: [
        { label: 'A', text: '客戶行為預測' },
        { label: 'B', text: '自動化客戶服務' },
        { label: 'C', text: '產品設計優化' },
        { label: 'D', text: '個人化推薦' }
      ],
      answer: 'C',
      chapter: 'AI 產業應用',
      explanation: 'CRM中的AI應用聚焦客戶行為預測、自動化服務和個人化推薦，產品設計不在此範疇。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
]
