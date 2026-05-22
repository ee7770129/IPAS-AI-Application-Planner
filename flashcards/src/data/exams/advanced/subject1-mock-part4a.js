/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part4a.js
 * 功能：模擬題 科目一（第 142-164 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 142,
      question: '根據歐盟《人工智慧法案》，對於被視為「不可接受風險」的AI系統，其處理原則是？',
      options: [
        { label: 'A', text: '需符合高透明度要求' },
        { label: 'B', text: '需定期接受合規評估' },
        { label: 'C', text: '將被禁止' },
        { label: 'D', text: '需進行嚴格的風險管理' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '歐盟AI法案對高風險AI系統（如涉及歧視）採取禁止措施，確保安全和倫理。',
      optionExplanations: { A: '高透明度要求適用於「有限風險」等級的AI系統，而非不可接受風險。', B: '定期合規評估屬於「高風險」等級AI系統的管理措施，不可接受風險的系統是直接禁止。', C: null, D: '嚴格風險管理是高風險AI系統的要求，不可接受風險的系統不允許上市，無需管理。' }
    },
    {
      id: 143,
      question: '中華民國生成式AI參考指引（草案）的主要適用對象是？',
      options: [
        { label: 'A', text: '全國所有企業和個人' },
        { label: 'B', text: '行政院及所屬機關（構）' },
        { label: 'C', text: '公營事業機構和公立學校' },
        { label: 'D', text: '民間企業和研究機構' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '該指引主要針對行政院及所屬機構，規範公部門使用生成式AI的行為。',
      optionExplanations: { A: '該指引並非針對全國所有企業和個人，僅規範政府機關的使用行為。', B: null, C: '公營事業和公立學校不是該指引的主要適用對象，指引明確以行政院及所屬機關為主。', D: '民間企業和研究機構不在該指引的主要規範範圍內。' }
    },
    {
      id: 144,
      question: '根據中華民國生成式AI參考指引（草案），業務承辦人在使用生成式AI時，不得提供下列哪類資訊？',
      options: [
        { label: 'A', text: '已公開的政府統計數據' },
        { label: 'B', text: '經機關（構）同意公開的資訊' },
        { label: 'C', text: '涉及公務應保密的資訊' },
        { label: 'D', text: '一般的政策宣導內容' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '指引禁止提供涉及公務保密的資訊，以保護敏感數據。',
      optionExplanations: { A: '已公開的政府統計數據屬於公開資訊，提供給AI使用並無違反規定。', B: '經機關同意公開的資訊已經過授權，可以提供給AI使用。', C: null, D: '一般政策宣導內容為公開性質，不涉及保密限制。' }
    },
    {
      id: 145,
      question: '企業在評估是否導入AI應用時，首先需要？',
      options: [
        { label: 'A', text: '分析現有數據和技術基礎' },
        { label: 'B', text: '評估員工技能和培訓需求' },
        { label: 'C', text: '了解企業的目標和挑戰' },
        { label: 'D', text: '進行成本效益分析' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '了解企業目標和挑戰是AI導入的第一步，確保技術應用與業務需求一致。',
      optionExplanations: { A: '分析數據和技術基礎是重要步驟，但應在釐清企業目標之後才進行。', B: '評估員工技能屬於後續執行規劃階段，不是首要步驟。', C: null, D: '成本效益分析需在了解企業目標後才有評估基準，因此不是第一步。' }
    },
    {
      id: 146,
      question: '在企業評估導入AI應用的數據品質時，「數據一致性」是指？',
      options: [
        { label: 'A', text: '數據是否沒有遺漏或缺失' },
        { label: 'B', text: '數據在不同系統中是否一致' },
        { label: 'C', text: '數據是否準確和真實' },
        { label: 'D', text: '數據是否符合特定的格式要求' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '數據一致性指數據在不同系統或來源中保持一致，確保模型輸入可靠性。',
      optionExplanations: { A: '數據沒有遺漏或缺失指的是「數據完整性」，而非一致性。', B: null, C: '數據準確和真實指的是「數據正確性」或「數據品質」，與一致性是不同概念。', D: '數據符合特定格式要求指的是「數據規範性」或「數據格式化」，不是一致性。' }
    },
    {
      id: 147,
      question: '資料導向的深入解析主要透過負責任AI儀表板的哪個元件提供？',
      options: [
        { label: 'A', text: '反事實假設' },
        { label: 'B', text: '模型導向的深入解析' },
        { label: 'C', text: '原因推斷元件' },
        { label: 'D', text: '模型概覽' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '模型導向的深入解析提供資料洞察，幫助理解模型行為和數據模式。',
      optionExplanations: { A: '反事實假設用於探討「如果改變某個特徵，結果會如何」，屬於假設情境分析而非資料導向解析。', B: null, C: '原因推斷元件用於分析因果關係，而非提供資料導向的深入解析。', D: '模型概覽提供模型整體效能的摘要資訊，並非深入的資料層級解析。' }
    },
    {
      id: 148,
      question: '企業部門主管在確認AI應用情境時，主要負責下列哪項工作？',
      options: [
        { label: 'A', text: '設定AI分析項目、預測時間範疇' },
        { label: 'B', text: '規劃AI產出的具體形式' },
        { label: 'C', text: '提供AI所需的原始數據' },
        { label: 'D', text: '評估AI導入的成本效益' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '部門主管負責定義AI分析項目和時間範圍，確保與業務需求一致。',
      optionExplanations: { A: null, B: '規劃AI產出的具體形式屬於技術團隊或專案經理的職責，而非部門主管的首要工作。', C: '提供原始數據通常是資料管理部門或IT部門的工作，不是部門主管的主要職責。', D: '成本效益評估通常由財務或專案管理層負責，部門主管主要聚焦在業務情境的確認。' }
    },
    {
      id: 149,
      question: '在企業導入AI時，若希望提高模型的可解釋性，應採用哪種技術？',
      options: [
        { label: 'A', text: '增加模型的參數數量' },
        { label: 'B', text: '使用可解釋性AI技術（如SHAP或LIME）' },
        { label: 'C', text: '減少訓練數據的多樣性' },
        { label: 'D', text: '僅使用簡單的線性模型' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'SHAP和LIME等可解釋性技術能揭示模型決策過程，提升透明度。',
      optionExplanations: { A: '增加參數數量會使模型更複雜，反而降低可解釋性。', B: null, C: '減少訓練數據的多樣性會影響模型品質，與提升可解釋性無關。', D: '僅使用簡單線性模型雖然可解釋性高，但會犧牲模型的表達能力，不是最佳做法。' }
    },
    {
      id: 150,
      question: '在數據準備階段，哪一項技術可以用來處理遺漏值？',
      options: [
        { label: 'A', text: 'KNN 插補法' },
        { label: 'B', text: 'One-hot 編碼' },
        { label: 'C', text: '標準化' },
        { label: 'D', text: '降維' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'KNN插補法利用鄰近數據點估計遺漏值，適用於數據預處理。其他選項用於不同目的。',
      optionExplanations: { A: null, B: 'One-hot 編碼是將類別型變數轉換為數值表示的方法，不是用來處理遺漏值。', C: '標準化是將數據縮放到統一尺度的技術，無法填補遺漏值。', D: '降維是減少特徵維度的技術（如PCA），與遺漏值處理無關。' }
    },
    {
      id: 151,
      question: '以下哪種技術通常用於強化學習（Reinforcement Learning）？',
      options: [
        { label: 'A', text: 'Q-learning' },
        { label: 'B', text: '支持向量機（SVM）' },
        { label: 'C', text: 'K-means 聚類' },
        { label: 'D', text: '主要成分分析（PCA）' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'Q-learning是強化學習的經典算法，通過學習動作價值函數優化決策。',
      optionExplanations: { A: null, B: 'SVM 是監督式學習的分類/迴歸演算法，不屬於強化學習。', C: 'K-means 是非監督式學習的聚類演算法，與強化學習無關。', D: 'PCA 是降維技術，用於特徵提取，不屬於強化學習範疇。' }
    },
    {
      id: 152,
      question: '在 AI 模型的運行環境中，「推理」（Inference）指的是？',
      options: [
        { label: 'A', text: '訓練 AI 模型' },
        { label: 'B', text: '對新輸入數據進行預測' },
        { label: 'C', text: '儲存 AI 模型的權重' },
        { label: 'D', text: '監控 AI 運行的能耗' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '推理是指使用訓練好的模型對新數據進行預測或分類，是AI應用的核心步驟。',
      optionExplanations: { A: '訓練模型是建構模型的過程，與推理（使用模型進行預測）是不同階段。', B: null, C: '儲存模型權重是模型管理的工作，不是推理的定義。', D: '監控能耗屬於系統運維範疇，與推理的概念無關。' }
    },
    {
      id: 153,
      question: '以下哪項技術可用於 AI 模型的優化？',
      options: [
        { label: 'A', text: '模型剪枝（Model Pruning）' },
        { label: 'B', text: '增加網路層數' },
        { label: 'C', text: '只使用 CPU 而不使用 GPU' },
        { label: 'D', text: '減少數據集的多樣性' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '模型剪枝通過移除不必要的參數，減少模型複雜度和計算需求，提升效率。',
      optionExplanations: { A: null, B: '增加網路層數會增加模型複雜度和計算量，與模型優化的目的相反。', C: '只使用CPU不使用GPU會降低計算效率，不是模型優化技術。', D: '減少數據集多樣性會損害模型的泛化能力，並非優化手段。' }
    },
    {
      id: 154,
      question: '哪一項技術可以用來減少 AI 模型的過擬合（Overfitting）？',
      options: [
        { label: 'A', text: '增加訓練數據' },
        { label: 'B', text: '減少模型層數' },
        { label: 'C', text: '只使用測試數據訓練模型' },
        { label: 'D', text: '減少特徵數量' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '增加訓練數據的多樣性和數量有助於模型學習更廣泛的模式，減少過擬合風險。',
      optionExplanations: { A: null, B: '減少模型層數雖可能降低過擬合，但不是最佳做法，可能導致模型欠擬合。', C: '只使用測試數據訓練模型是錯誤做法，會導致數據洩漏且無法正確評估模型表現。', D: '減少特徵數量可能有助於降低過擬合，但也可能丟失重要資訊，不如增加數據有效。' }
    },
    {
      id: 155,
      question: '以下哪種 AI 模型適合處理序列資料（Sequential Data）？',
      options: [
        { label: 'A', text: 'CNN（卷積神經網路）' },
        { label: 'B', text: 'RNN（循環神經網路）' },
        { label: 'C', text: 'KNN（K 近鄰演算法）' },
        { label: 'D', text: 'PCA（主成分分析）' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'RNN專為處理序列數據設計，能捕捉時間或順序相關的依賴關係。',
      optionExplanations: { A: 'CNN 主要用於處理圖像等空間資料，不是專門為序列資料設計的。', B: null, C: 'KNN 是基於距離的分類演算法，無法捕捉序列中的時間依賴關係。', D: 'PCA 是降維技術，用於減少特徵維度，不具備處理序列資料的能力。' }
    },
    {
      id: 156,
      question: '在 AI 訓練過程中，微調（Fine-tuning）技術的主要目的是？',
      options: [
        { label: 'A', text: '提高模型的可解釋性' },
        { label: 'B', text: '讓模型適應特定任務或數據集' },
        { label: 'C', text: '減少運算時間' },
        { label: 'D', text: '增加訓練數據量' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '微調通過在預訓練模型上針對特定任務進行進一步訓練，提升模型在特定場景的表現。',
      optionExplanations: { A: '提高可解釋性需要使用SHAP、LIME等專門技術，微調的目的不在於此。', B: null, C: '微調可能會增加一些訓練時間，其主要目的是提升任務表現而非減少運算時間。', D: '微調是在既有數據上進行訓練，並不會增加訓練數據量。' }
    },
    {
      id: 157,
      question: '什麼是 AI 模型壓縮技術？',
      options: [
        { label: 'A', text: '降低 AI 模型的運行時間' },
        { label: 'B', text: '減少 AI 模型的儲存空間與運算需求' },
        { label: 'C', text: '增強 AI 模型的學習能力' },
        { label: 'D', text: '增加 AI 模型的計算層數' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '模型壓縮技術（如剪枝、量化）旨在減少模型的儲存和計算需求，提升效率。',
      optionExplanations: { A: '降低運行時間只是壓縮帶來的附帶效果之一，不是壓縮技術本身的定義。', B: null, C: '模型壓縮的目標是精簡模型，不是增強學習能力，壓縮後學習能力可能略有下降。', D: '增加計算層數會使模型更大更複雜，與壓縮的目的完全相反。' }
    },
    {
      id: 158,
      question: '一個 AI 模型在訓練時出現嚴重的過擬合問題，你可以採取的措施不包括？',
      options: [
        { label: 'A', text: '增加訓練數據量' },
        { label: 'B', text: '使用更深層的神經網路' },
        { label: 'C', text: '加入 Dropout 技術' },
        { label: 'D', text: '使用 L2 正則化' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '增加更深層的神經網路可能加劇過擬合，而增加數據量、Dropout和L2正則化有助於減少過擬合。',
      optionExplanations: { A: '增加訓練數據量是有效的減少過擬合方法，因此屬於可採取的措施。', B: null, C: 'Dropout 透過隨機關閉神經元來防止過擬合，是常用的正則化技術。', D: 'L2 正則化透過懲罰過大的權重來降低模型複雜度，有效減少過擬合。' }
    },
    {
      id: 159,
      question: '企業在導入 AI 時，若數據來源包含異質數據，最合適的數據前處理方法是？',
      options: [
        { label: 'A', text: '直接將數據合併進行訓練' },
        { label: 'B', text: '先進行特徵工程與正規化處理' },
        { label: 'C', text: '只保留數量最多的數據類型' },
        { label: 'D', text: '移除所有異質數據，確保模型不受影響' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '特徵工程和正規化有助於統一異質數據的格式，提升模型訓練效果。',
      optionExplanations: { A: '直接合併未經處理的異質數據會導致特徵尺度不一致，影響模型品質。', B: null, C: '只保留最多的數據類型會丟失其他有價值的資訊，降低模型的全面性。', D: '移除所有異質數據會損失大量可用資訊，正確做法是透過前處理整合這些數據。' }
    },
    {
      id: 160,
      question: 'AI 在「聯邦學習」(Federated Learning) 的主要優勢是？',
      options: [
        { label: 'A', text: '提高數據隱私與安全性' },
        { label: 'B', text: '降低 AI 訓練成本' },
        { label: 'C', text: 'AI 訓練完全去中心化' },
        { label: 'D', text: '以上皆是' }
      ],
      answer: 'D',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '聯邦學習允許在本地設備上訓練模型，保護數據隱私、降低成本並實現去中心化。',
      optionExplanations: { A: '提高數據隱私與安全性確實是聯邦學習的優勢之一，但不是唯一的優勢。', B: '降低訓練成本也是聯邦學習的優勢之一，但答案應選擇涵蓋所有優勢的選項。', C: '去中心化訓練也是聯邦學習的優勢之一，但不夠完整。', D: null }
    },
    {
      id: 161,
      question: '「知識挖掘」的主要目標是從大量數據中發現？',
      options: [
        { label: 'A', text: '潛在的商業合作夥伴' },
        { label: 'B', text: '隱藏的模式、關聯和知識' },
        { label: 'C', text: '最暢銷的產品列表' },
        { label: 'D', text: '最有效的廣告投放渠道' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '知識挖掘旨在從大數據中提取隱藏的模式和關聯，產生有價值的洞察。',
      optionExplanations: { A: '尋找商業合作夥伴是商業開發的工作，不是知識挖掘的主要目標。', B: null, C: '尋找暢銷產品列表只是知識挖掘可能的應用之一，不是其主要目標定義。', D: '尋找有效廣告渠道屬於行銷分析的範疇，不是知識挖掘本身的定義。' }
    },
    {
      id: 162,
      question: '支持向量機（SVM）是一種？',
      options: [
        { label: 'A', text: '非監督式學習模型' },
        { label: 'B', text: '生成式模型' },
        { label: 'C', text: '監督式學習模型' },
        { label: 'D', text: '強化學習模型' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'SVM是一種監督式學習模型，用於分類和回歸任務，通過尋找最佳超平面分隔數據。',
      optionExplanations: { A: 'SVM 需要標記的訓練數據來學習分類邊界，屬於監督式學習而非非監督式。', B: 'SVM 是鑑別式模型，用於分類和迴歸，不是用來生成新數據的生成式模型。', C: null, D: 'SVM 不涉及獎勵機制和環境互動，不屬於強化學習模型。' }
    },
    {
      id: 163,
      question: '機器學習被定義為使電腦能夠從什麼中學習的科學？',
      options: [
        { label: 'A', text: '人工編寫的規則' },
        { label: 'B', text: '大量的程式碼' },
        { label: 'C', text: '數據' },
        { label: 'D', text: '預先設定的知識庫' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '機器學習通過從數據中學習模式和規律，實現無需顯式編程的智能行為。',
      optionExplanations: { A: '人工編寫規則屬於傳統專家系統的做法，機器學習強調的是從數據自動學習。', B: '機器學習不是從程式碼中學習，而是從數據中發現模式和規律。', C: null, D: '預設知識庫屬於知識工程的範疇，機器學習的核心是從數據中自動學習。' }
    },
    {
      id: 164,
      question: '機器學習的運作模式不包括？',
      options: [
        { label: 'A', text: '數據分類' },
        { label: 'B', text: '數據壓縮' },
        { label: 'C', text: '數據分析與預測' },
        { label: 'D', text: '分群' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '數據壓縮屬於數據處理技術，而非機器學習的核心運作模式。',
      optionExplanations: { A: '數據分類是監督式學習的核心運作模式之一，屬於機器學習範疇。', B: null, C: '數據分析與預測是機器學習的主要應用目的，屬於其核心運作模式。', D: '分群是非監督式學習的核心運作模式之一，屬於機器學習範疇。' }
    }
]
