/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-textbook-part1.js
 * 功能：中級科目二 課本練習題（第 1-20 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    // ===== 第三章 機率統計基礎 =====
    {
      id: 1,
      question: '下列何者屬於「敘述統計」的主要目的？',
      options: [
        { label: 'A', text: '建立模型預測未來事件' },
        { label: 'B', text: '評估樣本是否顯著' },
        { label: 'C', text: '概括並整理資料特徵' },
        { label: 'D', text: '檢定兩組資料的平均數是否相等' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: '敘述統計主要用於整理、彙整與呈現資料特性，不涉及推論或決策。',
      optionExplanations: { A: '預測未來是推論統計或機器學習的範疇。', B: '評估顯著性屬於推論統計（假設檢定）。', C: null, D: '比較平均數屬於推論統計（t 檢定）。' }
    },
    {
      id: 2,
      question: '下列何者為常見的離散型機率分佈？',
      options: [
        { label: 'A', text: '常態分佈' },
        { label: 'B', text: '指數分佈' },
        { label: 'C', text: '貝他分佈' },
        { label: 'D', text: '二項分佈' }
      ],
      answer: 'D',
      chapter: '機率統計基礎',
      explanation: '二項分佈用於計算多次伯努利試驗中成功的次數，為典型的離散型分佈。常態、指數、貝他都是連續型分佈。',
      optionExplanations: { A: '常態分佈是連續型分佈。', B: '指數分佈是連續型分佈。', C: '貝他分佈是連續型分佈。', D: null }
    },
    {
      id: 3,
      question: '在資料集中若極端值眾多，應優先採用哪一項代表集中趨勢？',
      options: [
        { label: 'A', text: '平均數' },
        { label: 'B', text: '中位數' },
        { label: 'C', text: '眾數' },
        { label: 'D', text: '標準差' }
      ],
      answer: 'B',
      chapter: '機率統計基礎',
      explanation: '中位數不受極端值影響，適合描述偏態分佈或有離群值的資料。',
      optionExplanations: { A: '平均數受極端值影響大，會被拉偏。', B: null, C: '眾數反映最常出現的值，不一定代表中心趨勢。', D: '標準差是離散程度指標，不是集中趨勢。' }
    },
    {
      id: 4,
      question: '標準差的統計意義為何？',
      options: [
        { label: 'A', text: '資料中最大與最小值的距離' },
        { label: 'B', text: '數據分佈的對稱程度' },
        { label: 'C', text: '資料平均偏離中心值的程度' },
        { label: 'D', text: '代表資料的平均數' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: '標準差衡量資料與平均值的偏離程度，是最常見的離散程度指標。',
      optionExplanations: { A: '最大值與最小值的距離是「全距(Range)」。', B: '對稱程度用「偏態(Skewness)」衡量。', C: null, D: '平均數是集中趨勢指標，不是標準差。' }
    },
    {
      id: 5,
      question: '假設檢定中，若 p 值小於顯著水準 0.05，代表什麼意思？',
      options: [
        { label: 'A', text: '接受虛無假設' },
        { label: 'B', text: '拒絕虛無假設' },
        { label: 'C', text: '樣本數不足' },
        { label: 'D', text: '結果不顯著' }
      ],
      answer: 'B',
      chapter: '機率統計基礎',
      explanation: '當 p 值小於設定的顯著水準，表示樣本資料與虛無假設有顯著差異，故應拒絕虛無假設。',
      optionExplanations: { A: '應該是拒絕，不是接受。', B: null, C: 'p 值小於 0.05 與樣本數無直接關係。', D: 'p < 0.05 代表結果「顯著」，不是不顯著。' }
    },
    {
      id: 6,
      question: '在統計推論中，哪一個值通常用於判斷假設檢定的顯著性？',
      options: [
        { label: 'A', text: 'z-score' },
        { label: 'B', text: 't 值' },
        { label: 'C', text: 'p 值' },
        { label: 'D', text: '標準差' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: 'p 值表示在虛無假設成立的情況下，觀察到現有樣本結果的機率，是統計顯著性的核心指標。',
      optionExplanations: { A: 'z-score 是標準化分數，不直接判斷顯著性。', B: 't 值是檢定統計量，需搭配 p 值才能判斷。', C: null, D: '標準差是離散程度指標，與顯著性判斷無關。' }
    },
    {
      id: 7,
      question: '下列哪一個情況較適合使用單樣本 t 檢定？',
      options: [
        { label: 'A', text: '比較兩群獨立樣本平均差異' },
        { label: 'B', text: '比較一組樣本與既定平均值的差異' },
        { label: 'C', text: '分析兩變數間的線性關係' },
        { label: 'D', text: '檢定類別分佈是否一致' }
      ],
      answer: 'B',
      chapter: '機率統計基礎',
      explanation: '單樣本 t 檢定用來評估樣本平均數是否與某個已知值有顯著差異。',
      optionExplanations: { A: '比較兩群獨立樣本用雙樣本 t 檢定。', B: null, C: '線性關係用迴歸分析或相關分析。', D: '類別分佈一致性用卡方檢定。' }
    },
    {
      id: 8,
      question: '平均數、標準差、最大值等統計量的取得屬於何種統計方法？',
      options: [
        { label: 'A', text: '敘述統計' },
        { label: 'B', text: '推論統計' },
        { label: 'C', text: '機率模型' },
        { label: 'D', text: '監督式學習' }
      ],
      answer: 'A',
      chapter: '機率統計基礎',
      explanation: '這些統計量是對資料本身的描述，不涉及推論或預測，屬於敘述統計。',
      optionExplanations: { A: null, B: '推論統計是從樣本推論母體，不是計算統計量。', C: '機率模型是描述隨機變數的分佈。', D: '監督式學習是機器學習方法，不是統計量計算。' }
    },
    {
      id: 9,
      question: '關於常態分佈的敘述，下列何者「錯誤」？',
      options: [
        { label: 'A', text: '其分佈曲線呈鐘型且對稱於均值' },
        { label: 'B', text: '大多數數據點集中於均值附近，隨著偏離均值逐漸減少' },
        { label: 'C', text: '任何類型的數據在樣本數足夠大時，都會呈現常態分佈' },
        { label: 'D', text: '標準常態分佈的均值為 0，標準差為 1' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: '中央極限定理指出樣本「平均數」的分佈會趨近常態，但原始資料本身的分佈不會因此變為常態。',
      optionExplanations: { A: '正確。常態分佈是對稱的鐘型曲線。', B: '正確。這是常態分佈的特性。', C: null, D: '正確。標準常態分佈 N(0,1)。' }
    },
    {
      id: 10,
      question: '若資料呈現明顯左偏，最適合使用下列哪一項作為代表集中趨勢的指標？',
      options: [
        { label: 'A', text: '平均數' },
        { label: 'B', text: '標準差' },
        { label: 'C', text: '中位數' },
        { label: 'D', text: '變異係數' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: '偏態分佈中，平均數容易受極端值影響。中位數對極端值不敏感，能更準確代表集中趨勢。',
      optionExplanations: { A: '左偏時平均數會被極端低值拉低，不能準確代表中心。', B: '標準差是離散程度指標，不是集中趨勢。', C: null, D: '變異係數是相對離散程度，不是集中趨勢。' }
    },

    // ===== 第四章 大數據處理技術 =====
    {
      id: 11,
      question: '在大數據收集階段，若資料來源來自感測器與機台設備，最常見的資料特性為？',
      options: [
        { label: 'A', text: '批次性、靜態資料' },
        { label: 'B', text: '高頻率、串流型資料' },
        { label: 'C', text: '人工產生、低變動性資料' },
        { label: 'D', text: '固定欄位、標準化格式資料' }
      ],
      answer: 'B',
      chapter: '大數據處理技術',
      explanation: '感測器與機台設備產出的資料具有即時性與高頻率更新特性，屬於典型的串流資料來源。',
      optionExplanations: { A: '感測器資料是連續即時的，不是批次靜態的。', B: null, C: '感測器資料是自動產生的高變動性資料。', D: '感測器資料格式多樣，不一定是標準化格式。' }
    },
    {
      id: 12,
      question: '在進行資料清理時，下列哪一項操作主要用於處理欄位中存在空值的情況？',
      options: [
        { label: 'A', text: '資料標準化' },
        { label: 'B', text: '特徵選擇' },
        { label: 'C', text: '遺漏值補全(Imputation)' },
        { label: 'D', text: '主成分分析' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: 'Imputation 是處理缺失值的主要方法，可透過平均數、中位數或模型預測進行補值。',
      optionExplanations: { A: '標準化是調整數值尺度，不是處理空值。', B: '特徵選擇是挑選重要特徵，不處理空值。', C: null, D: 'PCA 是降維技術，不處理空值。' }
    },
    {
      id: 13,
      question: '哪一種資料儲存系統較適合處理半結構化資料，如 JSON 或 XML？',
      options: [
        { label: 'A', text: '關聯式資料庫(RDBMS)' },
        { label: 'B', text: '鍵值資料庫' },
        { label: 'C', text: '文件型 NoSQL 資料庫' },
        { label: 'D', text: '圖形資料庫' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: '文件型資料庫如 MongoDB 可有效儲存結構不固定的 JSON/XML，常用於半結構化資料管理。',
      optionExplanations: { A: '關聯式資料庫適合固定結構的表格資料，不適合彈性結構的 JSON。', B: '鍵值資料庫只存 key-value 對，不適合巢狀結構。', C: null, D: '圖形資料庫適合關係型資料（節點和邊），不是文件型。' }
    },
    {
      id: 14,
      question: '下列何者為分散式資料儲存架構中的一項核心特徵？',
      options: [
        { label: 'A', text: '集中式備份' },
        { label: 'B', text: '單點故障容忍度高' },
        { label: 'C', text: '跨節點資料切分與冗餘備援' },
        { label: 'D', text: '僅支援結構化資料格式' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: '分散式系統可將資料分片儲存並建立冗餘副本，提高可用性與容錯能力。',
      optionExplanations: { A: '分散式的核心是去中心化，不是集中式備份。', B: '說法矛盾，分散式的優勢是避免單點故障。', C: null, D: '分散式儲存可支援多種資料格式。' }
    },
    {
      id: 15,
      question: '若企業希望即時監控交易異常，應選擇下列哪一類數據處理架構？',
      options: [
        { label: 'A', text: '批次式資料倉儲' },
        { label: 'B', text: '離線式資料湖' },
        { label: 'C', text: '串流處理系統' },
        { label: 'D', text: '冷資料備援架構' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: '串流處理（如 Kafka、Spark Streaming）可即時處理進入系統的資料，適用於異常偵測。',
      optionExplanations: { A: '批次處理有延遲，不適合即時監控。', B: '離線資料湖用於事後分析，不即時。', C: null, D: '冷資料備援是長期儲存，不做即時處理。' }
    },
    {
      id: 16,
      question: '在進行特徵工程時，特徵衍生(Feature Derivation)的主要目的是什麼？',
      options: [
        { label: 'A', text: '增加模型的自由度以擬合更多資料' },
        { label: 'B', text: '精簡資料以減少儲存成本' },
        { label: 'C', text: '建立對預測任務更具意義或可解釋性的變數' },
        { label: 'D', text: '移除不連續的類別型欄位' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: '特徵衍生旨在透過現有資料邏輯建立新特徵，如時間差、組合變數，提升模型預測力與可解釋性。',
      optionExplanations: { A: '增加自由度可能導致過擬合，不是特徵衍生的目的。', B: '精簡資料是特徵選擇，不是衍生。', C: null, D: '移除欄位是特徵選擇或清理，不是衍生。' }
    },
    {
      id: 17,
      question: '對文字資料進行大小寫統一、移除特殊符號與空白等動作，最適合歸類為哪一種前處理操作？',
      options: [
        { label: 'A', text: '資料轉換' },
        { label: 'B', text: '資料驗證' },
        { label: 'C', text: '資料正規化(Normalization)' },
        { label: 'D', text: '資料標註' }
      ],
      answer: 'A',
      chapter: '大數據處理技術',
      explanation: '將文字欄位轉換為一致格式屬於典型的資料轉換處理，不涉及數值縮放或資料結構規劃。',
      optionExplanations: { A: null, B: '資料驗證是檢查格式和邏輯是否正確，不是格式統一。', C: '正規化通常指數值縮放（如 Min-Max），不是文字格式統一。', D: '資料標註是為資料加標籤，不是格式清理。' }
    },
    {
      id: 18,
      question: '在處理由 IoT 裝置產生的大規模即時資料時，系統架構應優先考量下列哪一項需求？',
      options: [
        { label: 'A', text: '高解析圖像處理能力' },
        { label: 'B', text: '即時串流處理與低延遲反應能力' },
        { label: 'C', text: '複雜圖形關係查詢能力' },
        { label: 'D', text: '靜態資料的批次整合能力' }
      ],
      answer: 'B',
      chapter: '大數據處理技術',
      explanation: 'IoT 裝置資料具有高頻、連續與即時性等特徵，需使用串流處理架構確保即時決策與效能穩定性。',
      optionExplanations: { A: '圖像處理與 IoT 串流處理是不同需求。', B: null, C: '圖形關係查詢是圖形資料庫的能力。', D: '批次整合不適合即時資料處理。' }
    },
    {
      id: 19,
      question: '在大數據架構中，資料湖(Data Lake)與傳統資料倉儲最大的差異為何？',
      options: [
        { label: 'A', text: '資料湖僅支援結構化資料' },
        { label: 'B', text: '資料湖支援多樣資料型態且不需預先定義結構' },
        { label: 'C', text: '資料倉儲無法查詢資料' },
        { label: 'D', text: '資料湖適用於即時交易分析' }
      ],
      answer: 'B',
      chapter: '大數據處理技術',
      explanation: '資料湖可儲存原始格式的結構化、半結構化與非結構化資料，支援彈性探索與延後建模。',
      optionExplanations: { A: '說反了，資料湖支援多種型態，不限結構化。', B: null, C: '資料倉儲當然可以查詢，它專門為分析查詢設計。', D: '資料湖主要用於批次分析和探索，不是即時交易。' }
    },
    {
      id: 20,
      question: '資料驗證(Data Validation)的主要目的為何？',
      options: [
        { label: 'A', text: '將資料轉為結構化表格' },
        { label: 'B', text: '過濾掉資料中所有離群值' },
        { label: 'C', text: '檢查資料格式與邏輯是否正確' },
        { label: 'D', text: '壓縮資料以節省儲存空間' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: '資料驗證確保資料符合預期格式與邏輯規則，是資料品質管理的重要步驟。',
      optionExplanations: { A: '轉為表格是資料轉換，不是驗證。', B: '過濾離群值是資料清理，不是驗證。', C: null, D: '資料壓縮是儲存優化，不是驗證。' }
    }
  ]
