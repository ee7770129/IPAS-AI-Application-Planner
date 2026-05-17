/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-textbook.js
 * 功能：中級科目二 課本練習題（學習指引）
 * 來源：大數據處理分析與應用(中級)-學習指引 第3/4/5/6章
 * 建立日期：2026-05-16
 * 版本：1.0.0
 */

export default {
  id: 'adv-s2-textbook',
  label: '課本練習題 科目二',
  subject: '科目二 大數據處理分析與應用',
  examDate: '課本練習',
  questions: [
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
    },

    // ===== 第五章 大數據分析方法與工具 =====
    {
      id: 21,
      question: '在大數據的描述性分析中，最常用來呈現類別變數分佈的圖形是？',
      options: [
        { label: 'A', text: '折線圖' },
        { label: 'B', text: '箱型圖' },
        { label: 'C', text: '長條圖' },
        { label: 'D', text: '散佈圖' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '長條圖可清楚顯示類別型變數的數量分佈，是描述性分析中的基礎視覺工具。',
      optionExplanations: { A: '折線圖適合時間趨勢，不是類別分佈。', B: '箱型圖顯示數值分佈（中位數、四分位距），不是類別分佈。', C: null, D: '散佈圖顯示兩個數值變數的關係。' }
    },
    {
      id: 22,
      question: '若要分析網站每日訪客數量的趨勢變化，最適合使用下列哪一種視覺化工具？',
      options: [
        { label: 'A', text: '熱力圖' },
        { label: 'B', text: '折線圖' },
        { label: 'C', text: '圓餅圖' },
        { label: 'D', text: '直方圖' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: '折線圖適合表現隨時間變動的連續數據，如日、週、月的趨勢觀察。',
      optionExplanations: { A: '熱力圖適合呈現矩陣型資料（如相關係數矩陣）。', B: null, C: '圓餅圖適合呈現比例組成，不適合趨勢。', D: '直方圖適合數值分佈，不適合時間趨勢。' }
    },
    {
      id: 23,
      question: '在大數據中進行關聯分析時，最常用來量化兩變數線性關係的指標為何？',
      options: [
        { label: 'A', text: '變異數' },
        { label: 'B', text: 't 值' },
        { label: 'C', text: '相關係數' },
        { label: 'D', text: 'z 分數' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '相關係數（如 Pearson r）用於衡量兩變數間的線性關聯程度。',
      optionExplanations: { A: '變異數衡量單一變數的離散程度，不是兩變數關係。', B: 't 值是假設檢定的統計量，不直接量化關聯。', C: null, D: 'z 分數是標準化分數，不量化兩變數關係。' }
    },
    {
      id: 24,
      question: '為了分析社群網路使用者之間的互動結構，應使用下列哪種分析方法？',
      options: [
        { label: 'A', text: '文字探勘' },
        { label: 'B', text: '主成分分析' },
        { label: 'C', text: '圖論分析' },
        { label: 'D', text: '分群分析' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '圖論分析可用於建構節點與邊的關係網路，適用於社群關係、推薦系統等情境。',
      optionExplanations: { A: '文字探勘分析文本內容，不是互動結構。', B: 'PCA 是降維方法，不分析網路結構。', C: null, D: '分群分析將資料分組，但不專門分析關係結構。' }
    },
    {
      id: 25,
      question: '在文字分析中，使用 TF-IDF 技術的主要目的是？',
      options: [
        { label: 'A', text: '去除標點符號' },
        { label: 'B', text: '將詞彙轉換為向量' },
        { label: 'C', text: '辨識常出現的關鍵詞並排除常見詞' },
        { label: 'D', text: '標示詞性與語法角色' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: 'TF-IDF 可強化具有辨識性的詞彙（高 TF），抑制文檔中普遍存在但不具代表性的詞語（高 IDF）。',
      optionExplanations: { A: '去除標點是文字前處理，不是 TF-IDF 的功能。', B: 'TF-IDF 確實產生向量，但主要目的是衡量詞彙重要性。', C: null, D: '標示詞性是 POS Tagging 的功能。' }
    },
    {
      id: 26,
      question: '下列哪一項屬於異常偵測技術常見的應用情境？',
      options: [
        { label: 'A', text: '定期報表自動生成' },
        { label: 'B', text: '用戶行為分群' },
        { label: 'C', text: '信用卡詐騙識別' },
        { label: 'D', text: '影片推薦排序' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '異常偵測可用於發現違常模式，像是信用卡交易中異常消費、系統入侵等風險情境。',
      optionExplanations: { A: '報表生成是資料呈現，不是異常偵測。', B: '分群是非監督學習，與異常偵測不同。', C: null, D: '推薦排序是推薦系統，不是異常偵測。' }
    },
    {
      id: 27,
      question: '若要從大量原始變數中萃取低維的代表性特徵，最常使用哪一種降維技術？',
      options: [
        { label: 'A', text: 'K-means' },
        { label: 'B', text: 'PCA(主成分分析)' },
        { label: 'C', text: 't 檢定' },
        { label: 'D', text: 'SMOTE' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: 'PCA 是常見的線性降維方法，將原始特徵投影到新的主成分空間中，保留資料最大變異。',
      optionExplanations: { A: 'K-means 是分群方法，不是降維。', B: null, C: 't 檢定是假設檢定方法，不做降維。', D: 'SMOTE 是過採樣方法，不做降維。' }
    },
    {
      id: 28,
      question: '哪一種資料探勘技術可用於找出客戶購買行為中常見的組合規則？',
      options: [
        { label: 'A', text: '關聯規則分析' },
        { label: 'B', text: '分類分析' },
        { label: 'C', text: '時間序列分析' },
        { label: 'D', text: '迴歸分析' }
      ],
      answer: 'A',
      chapter: '大數據分析方法與工具',
      explanation: '關聯規則分析（如 Apriori 演算法）可找出項目間常見組合，例如「買牛奶常搭配買麵包」。',
      optionExplanations: { A: null, B: '分類分析預測類別標籤，不分析購買組合。', C: '時間序列分析預測趨勢，不分析購買組合。', D: '迴歸分析預測連續數值，不分析組合規則。' }
    },
    {
      id: 29,
      question: '箱型圖(Box Plot)如何呈現異常值？',
      options: [
        { label: 'A', text: '以箱體內部大小表示' },
        { label: 'B', text: '以特殊符號（如點或星號）單獨標記' },
        { label: 'C', text: '自動刪除異常值' },
        { label: 'D', text: '以中位數代表異常值' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: '箱型圖透過特殊符號（如點、星號）單獨標記超出鬚線範圍的異常值。',
      optionExplanations: { A: '箱體大小代表 IQR（中間 50% 資料範圍），不是異常值。', B: null, C: '箱型圖不會自動刪除異常值，只是標記出來。', D: '中位數是箱型圖中的橫線，不代表異常值。' }
    },
    {
      id: 30,
      question: '若企業需自動比對商品評論中出現的品牌名稱，建議使用哪一種處理流程？',
      options: [
        { label: 'A', text: '結構化資料匹配' },
        { label: 'B', text: '命名實體識別(NER)' },
        { label: 'C', text: '群集分析' },
        { label: 'D', text: '影像分類' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: 'NER 屬於 NLP 技術，可自動從文字中辨識出品牌、人名、地點等實體資訊。',
      optionExplanations: { A: '結構化資料匹配適合固定格式，不適合自由文字。', B: null, C: '群集分析分組資料，不辨識具體實體。', D: '影像分類處理圖片，不處理文字。' }
    },

    // ===== 第六章 大數據在 AI 之應用 =====
    {
      id: 31,
      question: '鑑別式 AI 模型的主要特性為何？',
      options: [
        { label: 'A', text: '可產生新內容樣本' },
        { label: 'B', text: '僅適用於無監督學習任務' },
        { label: 'C', text: '專注於資料分類與預測決策邊界' },
        { label: 'D', text: '無法使用結構化資料進行訓練' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '鑑別式 AI 模型（如邏輯迴歸、SVM）學習資料間的判別界線，廣泛應用於預測任務。',
      optionExplanations: { A: '產生新內容是生成式 AI，不是鑑別式。', B: '鑑別式 AI 主要用於監督式學習。', C: null, D: '鑑別式 AI 可以使用結構化資料。' }
    },
    {
      id: 32,
      question: '為了加速大數據環境下的 AI 模型訓練，以下哪一項為常見技術？',
      options: [
        { label: 'A', text: '早期停止(Early Stopping)' },
        { label: 'B', text: '批次分群(Mini-batching)' },
        { label: 'C', text: '混合精度訓練(Mixed Precision Training)' },
        { label: 'D', text: '主成分分析(PCA)' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '混合使用 16-bit 與 32-bit 浮點運算可減少訓練時間與記憶體使用量，提升效能。',
      optionExplanations: { A: 'Early Stopping 是防止過擬合，不是加速訓練。', B: 'Mini-batching 是分批處理，主要解決記憶體問題。', C: null, D: 'PCA 是降維方法，不直接加速模型訓練。' }
    },
    {
      id: 33,
      question: '在生成式 AI 中，若輸入為結構化資料並希望產出自然語言敘述，最適合使用下列哪類模型？',
      options: [
        { label: 'A', text: '決策樹' },
        { label: 'B', text: '強化學習模型' },
        { label: 'C', text: '語言生成模型' },
        { label: 'D', text: '圖論模型' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '生成式 AI 可根據輸入生成文字內容，GPT 是典型的文字生成架構。',
      optionExplanations: { A: '決策樹是分類/迴歸模型，不能生成自然語言。', B: '強化學習用於策略優化，不是文字生成。', C: null, D: '圖論模型分析網路結構，不生成語言。' }
    },
    {
      id: 34,
      question: '大數據對生成式 AI 內容品質的影響關鍵在於？',
      options: [
        { label: 'A', text: 'GPU 數量多寡' },
        { label: 'B', text: '訓練樣本是否具多樣性與語境一致性' },
        { label: 'C', text: 'API 回應速度' },
        { label: 'D', text: '是否使用 Python 編寫模型' }
      ],
      answer: 'B',
      chapter: '大數據在AI之應用',
      explanation: '生成式模型的品質極度依賴訓練資料的多樣性與語境品質，關係到語言流暢性與真實性。',
      optionExplanations: { A: 'GPU 影響訓練速度，但資料品質才是內容品質的關鍵。', B: null, C: 'API 速度是部署問題，不影響內容品質。', D: '程式語言選擇不影響生成內容品質。' }
    },
    {
      id: 35,
      question: '在 AI 模型訓練過程中，為避免使用含有個資的敏感欄位，常用哪一種資料處理方法？',
      options: [
        { label: 'A', text: '資料標註' },
        { label: 'B', text: '資料蒐集' },
        { label: 'C', text: '資料匿名化' },
        { label: 'D', text: '資料分群' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '資料匿名化處理如移除姓名、轉換欄位等，可降低個資風險並符合法規要求。',
      optionExplanations: { A: '資料標註是為資料加標籤，不保護隱私。', B: '資料蒐集是收集資料，不是保護隱私。', C: null, D: '資料分群是分組，不保護隱私。' }
    },
    {
      id: 36,
      question: '下列哪一項技術可強化 AI 模型對使用者資料的隱私保護？',
      options: [
        { label: 'A', text: '特徵擴增(Feature Augmentation)' },
        { label: 'B', text: '差分隱私(Differential Privacy)' },
        { label: 'C', text: '貝氏分類器' },
        { label: 'D', text: '強化學習' }
      ],
      answer: 'B',
      chapter: '大數據在AI之應用',
      explanation: '差分隱私透過加噪機制保護個別資料不被逆推出，即使在公開模型中也難以重建原始資料。',
      optionExplanations: { A: '特徵擴增增加特徵，不保護隱私。', B: null, C: '貝氏分類器是分類方法，不保護隱私。', D: '強化學習是訓練策略，不保護隱私。' }
    },
    {
      id: 37,
      question: '若企業欲將醫療資料用於訓練 AI 模型，下列哪一項最符合合法合規原則？',
      options: [
        { label: 'A', text: '將所有資料匿名處理後存於海外伺服器' },
        { label: 'B', text: '取得合法授權與病患同意，並執行隱私強化' },
        { label: 'C', text: '僅標註患者年齡即可訓練' },
        { label: 'D', text: '合併不同院所資料以擴大樣本量，不需其他處理' }
      ],
      answer: 'B',
      chapter: '大數據在AI之應用',
      explanation: '處理含敏感資訊之醫療資料時，必須符合隱私法規與倫理原則，包括告知、同意與匿名化處理。',
      optionExplanations: { A: '匿名化是對的，但存於海外伺服器可能違反資料在地化法規。', B: null, C: '只標年齡不夠，還有其他可識別資訊需處理。', D: '合併資料仍需授權和隱私處理。' }
    },
    {
      id: 38,
      question: '為確保 AI 系統合規性與可追溯性，應建立哪一種制度？',
      options: [
        { label: 'A', text: '模型評分制度' },
        { label: 'B', text: '模型自動訓練流程' },
        { label: 'C', text: '資料版本管理與操作紀錄制度' },
        { label: 'D', text: '開源資料集快速上線制度' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '版本管理可確保資料來源、處理歷程清楚記錄，對稽核與合規性追蹤至關重要。',
      optionExplanations: { A: '評分制度評估模型品質，但不確保可追溯性。', B: '自動訓練提升效率，但不保證合規性。', C: null, D: '快速上線反而可能跳過合規審查。' }
    },
    {
      id: 39,
      question: '在企業內部推動 AI 模型落地時，哪一種治理措施最能確保模型部署後持續符合法規與道德標準？',
      options: [
        { label: 'A', text: '部署後由 IT 團隊定期觀察效能' },
        { label: 'B', text: '設定固定訓練資料更新週期' },
        { label: 'C', text: '導入 AI 治理框架與跨部門監管流程' },
        { label: 'D', text: '採購更多模型訓練設備以強化能力' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: 'AI 治理需結合技術、法務、業務等部門共同制定監督機制，確保風險控制與合規落實。',
      optionExplanations: { A: '只靠 IT 觀察效能不夠，需跨部門監管。', B: '固定更新週期不能應對突發的法規或道德問題。', C: null, D: '採購設備是資源問題，不是治理措施。' }
    },
    {
      id: 40,
      question: '若欲在大數據環境中有效訓練深度學習模型，以下哪一項策略最常用於解決資料與運算資源不對稱的問題？',
      options: [
        { label: 'A', text: '將所有資料轉存為影像格式以提升讀取效率' },
        { label: 'B', text: '將模型拆解為多個子模型並分別部署於本機' },
        { label: 'C', text: '採用分散式訓練與硬體加速架構' },
        { label: 'D', text: '改以監督式學習取代非監督式學習以降低負載' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '在面對龐大資料量與高計算需求時，常採用 GPU/TPU 加速與分散式訓練架構以縮短訓練時間並提升效能。',
      optionExplanations: { A: '轉為影像格式不會提升效率，反而可能增加資料量。', B: '拆解子模型不是分散式訓練的正確做法。', C: null, D: '學習方式的選擇取決於任務，不是解決運算問題的策略。' }
    }
  ]
}
