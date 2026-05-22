/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-stest-u6.js
 * 功能：S測驗題庫 科目二 單元6（跳過附圖題）
 * 來源：S測驗 (sustainnovation.cc)
 * 建立日期：2026-05-22
 * 版本：1.0.0
 */

export default [
  {
    id: 1,
    question: '下列哪一種降維技術最適合處理高維度稀疏資料？',
    options: [
      { label: 'A', text: 'PCA' },
      { label: 'B', text: 'K-means' },
      { label: 'C', text: '奇異值分解(SVD)' },
      { label: 'D', text: '樹狀模型' }
    ],
    answer: 'C',
    chapter: '數據處理與特徵工程',
    explanation: 'SVD 特別適合處理高維度稀疏矩陣（如推薦系統的使用者-物品矩陣），能有效降維。PCA 適合稠密資料，K-means 是集群方法不是降維，樹狀模型是分類/迴歸方法。',
    optionExplanations: { A: 'PCA 適合處理稠密資料，對高維度稀疏資料效果不佳。', B: 'K-means 是集群（分群）方法，不是降維技術。', C: null, D: '樹狀模型是分類或迴歸方法，不是降維技術。' }
  },
  {
    id: 2,
    question: '工業領域巨量資料的時間序列敘述，下列哪一項錯誤？',
    options: [
      { label: 'A', text: '時間序列分割是將長序列切分為若干子序列因為不同製造條件下變量關係差別很大' },
      { label: 'B', text: '時間序列分解依照變化模式分解為若干成份因為不同時間顆粒度上規律不同' },
      { label: 'C', text: '時間序列模式探勘用於發現長序列中常見的子序列模式' },
      { label: 'D', text: '時間序列表達是對數值的預測例如ARIMA' }
    ],
    answer: 'D',
    chapter: '大數據處理技術',
    explanation: '時間序列表達（Representation）是將時間序列轉換為更緊湊或更有意義的形式（如降維、特徵提取），不是「數值預測」。數值預測屬於時間序列預測（Forecasting）。',
    optionExplanations: { A: '正確，不同製造條件下變量關係差別大，需要將長序列切分為子序列分別處理。', B: '正確，時間序列分解是依照不同時間顆粒度的變化模式分解為若干成份。', C: '正確，時間序列模式探勘確實用於發現長序列中常見的子序列模式。', D: null }
  },
  {
    id: 3,
    question: '關於RNN在自然語言之應用，下列哪一項錯誤？',
    options: [
      { label: 'A', text: '多對一用於情感分析' },
      { label: 'B', text: '一對一可建立語言模型' },
      { label: 'C', text: '一對多用於對話回應' },
      { label: 'D', text: '多對多用於語言翻譯' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: '對話回應（Question Answering）通常是多對多或多對一的架構，而非一對多。一對多的典型應用是圖片描述生成（Image Captioning）。',
    optionExplanations: { A: '正確，情感分析是將多個輸入詞彙映射為單一情感標籤，屬於多對一。', B: '正確，一對一架構可用於建立語言模型的基礎結構。', C: null, D: '正確，語言翻譯是將一段文字轉換為另一段文字，屬於多對多。' }
  },
  {
    id: 4,
    question: '關於多層感知模型，下列哪一項錯誤？',
    options: [
      { label: 'A', text: '利用反向傳播一定能找到全域最佳解' },
      { label: 'B', text: '單層感知模型沒有隱藏層' },
      { label: 'C', text: '多層感知模型可透過隱藏層改變輸出' },
      { label: 'D', text: '多層感知模型可以是非線性模型' }
    ],
    answer: 'A',
    chapter: '機器學習基礎',
    explanation: '反向傳播使用梯度下降法，只能保證找到局部最佳解（Local Optimum），不能保證找到全域最佳解（Global Optimum），因為損失函數通常是非凸的。',
    optionExplanations: { A: null, B: '正確，單層感知機只有輸入層和輸出層，沒有隱藏層。', C: '正確，多層感知機透過隱藏層的非線性轉換來改變輸出結果。', D: '正確，多層感知機搭配非線性激活函數後即為非線性模型。' }
  },
  {
    id: 5,
    question: '關於製程監控的敘述，下列哪一項錯誤？',
    options: [
      { label: 'A', text: 'SPM廣泛用於化工偵測故障' },
      { label: 'B', text: 'SPC中Control應稱監控' },
      { label: 'C', text: 'PCA排除雜訊與共線性保留重要訊息' },
      { label: 'D', text: 'PCA針對各個變量進行個別分析以偵測異常' }
    ],
    answer: 'D',
    chapter: '大數據分析方法',
    explanation: 'PCA 是透過多個變量的「整合分析」（找主成分）來偵測異常，而非針對各個變量進行「個別」分析。PCA 的核心就是跨變量的綜合分析。',
    optionExplanations: { A: '正確，SPM（統計製程監控）確實廣泛用於化工領域的故障偵測。', B: '正確，SPC 中的 Control 應翻譯為「監控」而非「控制」。', C: '正確，PCA 能排除雜訊與共線性，保留重要訊息進行降維。', D: null }
  },
  {
    id: 6,
    question: '低結構化的文本或圖像資料，哪一種特徵工程類型最適合？',
    options: [
      { label: 'A', text: '特徵建構' },
      { label: 'B', text: '特徵學習(Feature Learning)' },
      { label: 'C', text: '特徵選擇' },
      { label: 'D', text: '特徵改善' }
    ],
    answer: 'B',
    chapter: '數據處理與特徵工程',
    explanation: '特徵學習（如深度學習的自動特徵擷取）最適合處理低結構化資料（文本、圖像），因為人工設計特徵非常困難。特徵選擇和建構適合結構化資料。',
    optionExplanations: { A: '特徵建構需要人工設計特徵，對低結構化資料（如圖像、文本）難以有效設計。', B: null, C: '特徵選擇是從既有特徵中篩選，適合結構化資料，無法處理低結構化的原始資料。', D: '特徵改善是對既有特徵進行優化調整，前提是已有明確特徵，不適合低結構化資料。' }
  },
  {
    id: 7,
    question: '設備故障診斷PHM中，下列哪一項屬於預防維修？',
    options: [
      { label: 'A', text: '延遲維修' },
      { label: 'B', text: '剩餘壽命預測' },
      { label: 'C', text: '緊急搶修' },
      { label: 'D', text: '基於可靠性的維修' }
    ],
    answer: 'D',
    chapter: '大數據處理技術',
    explanation: '基於可靠性的維修（Reliability-based Maintenance）屬於預防維修，根據設備可靠性數據制定定期維護計畫。延遲維修和緊急搶修屬於事後維修，剩餘壽命預測屬於主動維修。',
    optionExplanations: { A: '延遲維修屬於事後維修策略，是在故障發生後才進行處理。', B: '剩餘壽命預測屬於主動維修（預測性維護），不是預防維修。', C: '緊急搶修屬於事後維修，是設備已故障後的緊急處理措施。', D: null }
  },
  {
    id: 8,
    question: '下列哪一項最「不」可能是設備故障預測的任務？',
    options: [
      { label: 'A', text: '失效風險評估' },
      { label: 'B', text: '劣化趨勢預警' },
      { label: 'C', text: '剩餘壽命預測' },
      { label: 'D', text: '維修路線最佳化' }
    ],
    answer: 'D',
    chapter: '大數據處理技術',
    explanation: '維修路線最佳化屬於物流/排程問題，不是設備故障「預測」的範疇。故障預測的任務包括失效風險評估、劣化趨勢預警、剩餘壽命預測等。',
    optionExplanations: { A: '失效風險評估是故障預測的核心任務之一，用於評估設備失效的可能性。', B: '劣化趨勢預警屬於故障預測任務，透過監控劣化趨勢提前發出警報。', C: '剩餘壽命預測是故障預測的典型任務，預估設備還能使用多久。', D: null }
  },
  {
    id: 9,
    question: '下列哪一種建模方法不需要進行尺度縮放（Scaling）？',
    options: [
      { label: 'A', text: '多層感知機' },
      { label: 'B', text: '支援向量機' },
      { label: 'C', text: '迴歸樹(Regression Trees)' },
      { label: 'D', text: 'k近鄰法' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: '樹狀模型（包括迴歸樹）不受特徵尺度影響，因為分裂是基於資訊增益或不純度，不涉及距離計算。MLP、SVM、KNN 都需要特徵縮放。',
    optionExplanations: { A: '多層感知機使用梯度下降訓練，不同尺度的特徵會導致梯度不平衡，需要縮放。', B: '支援向量機涉及距離計算與核函數運算，特徵尺度差異大會影響效果。', C: null, D: 'k近鄰法基於距離計算分類，特徵尺度不一致會讓某些特徵主導距離。' }
  },
  {
    id: 10,
    question: '下列哪一個方法「不」需要進行量綱處理？',
    options: [
      { label: 'A', text: '類神經網路' },
      { label: 'B', text: 'K-means' },
      { label: 'C', text: '支援向量機' },
      { label: 'D', text: '樹狀模型' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: '樹狀模型基於分裂準則（如 Gini 不純度、資訊增益），不受量綱影響。類神經網路、K-means、支援向量機都涉及距離或梯度計算，需要量綱處理。',
    optionExplanations: { A: '類神經網路使用梯度下降，量綱差異會影響收斂速度，需要量綱處理。', B: 'K-means 基於距離計算進行分群，量綱不一致會讓某些特徵過度影響結果。', C: '支援向量機涉及距離計算，量綱差異會影響超平面的決策結果。', D: null }
  },
  {
    id: 11,
    question: '下列哪一種CNN首度提出Dropout Layer以降低Overfitting？',
    options: [
      { label: 'A', text: 'LeNet' },
      { label: 'B', text: 'AlexNet' },
      { label: 'C', text: 'Inception' },
      { label: 'D', text: 'VGG19' }
    ],
    answer: 'B',
    chapter: '機器學習基礎',
    explanation: 'AlexNet（2012年）首次在 CNN 中使用 Dropout 技術來降低過擬合，是深度學習歷史上的重要里程碑。',
    optionExplanations: { A: 'LeNet 是早期 CNN（1998年），當時尚未發明 Dropout 技術。', B: null, C: 'Inception（GoogLeNet, 2014年）晚於 AlexNet，Dropout 已非其首創。', D: 'VGG19（2014年）晚於 AlexNet，並非首次提出 Dropout 的架構。' }
  },
  {
    id: 12,
    question: '關於LSTM的閘門與參數矩陣，下列何項正確？',
    options: [
      { label: 'A', text: '三個閘門兩個參數矩陣' },
      { label: 'B', text: '四個閘門四個參數矩陣' },
      { label: 'C', text: '四個閘門三個參數矩陣' },
      { label: 'D', text: '三個閘門四個參數矩陣' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: 'LSTM 有三個閘門（遺忘閘、輸入閘、輸出閘），但有四個參數矩陣需要訓練（三個閘門各一個，加上候選記憶單元的參數矩陣）。',
    optionExplanations: { A: '閘門數正確但參數矩陣數錯誤，LSTM 有四個參數矩陣而非兩個。', B: 'LSTM 只有三個閘門（遺忘閘、輸入閘、輸出閘），不是四個。', C: '閘門數錯誤，LSTM 有三個閘門而非四個。', D: null }
  },
  {
    id: 13,
    question: '深度神經網路處理三類別分類問題，輸出層最合適的激活函數？',
    options: [
      { label: 'A', text: 'Sigmoid' },
      { label: 'B', text: 'Softmax' },
      { label: 'C', text: 'ReLU' },
      { label: 'D', text: 'Tanh' }
    ],
    answer: 'B',
    chapter: '機器學習基礎',
    explanation: 'Softmax 將輸出轉換為機率分佈，適合多類別分類。Sigmoid 適合二元分類，ReLU 用於隱藏層，Tanh 也用於隱藏層。',
    optionExplanations: { A: 'Sigmoid 輸出範圍為 0~1，適合二元分類，無法直接處理三類別問題。', B: null, C: 'ReLU 通常用於隱藏層的激活函數，不適合作為多類別分類的輸出層。', D: 'Tanh 輸出範圍為 -1~1，通常用於隱藏層，無法產生多類別的機率分佈。' }
  },
  {
    id: 14,
    question: '關於標準化和正規化，下列哪一項錯誤？',
    options: [
      { label: 'A', text: '標準化適用於數值屬性' },
      { label: 'B', text: '正規化的目的是統整不同不連續屬性值的數值分佈' },
      { label: 'C', text: '正規化適用於數值屬性' },
      { label: 'D', text: '標準化的目的是統整不同連續屬性間的數值分佈' }
    ],
    answer: 'B',
    chapter: '數據處理與特徵工程',
    explanation: '正規化（Normalization）的目的是統整不同「連續」屬性值的數值分佈（如映射到[0,1]），而非「不連續」屬性值。不連續（類別）屬性需要編碼而非正規化。',
    optionExplanations: { A: '正確，標準化（Standardization）確實適用於數值屬性，將資料轉為均值0、標準差1。', B: null, C: '正確，正規化（Normalization）確實適用於數值屬性，如將資料映射到[0,1]。', D: '正確，標準化的目的確實是統整不同連續屬性間的數值分佈。' }
  },
  {
    id: 15,
    question: '關於混淆矩陣，下列哪一項錯誤？',
    options: [
      { label: 'A', text: '用於評估分類問題的指標' },
      { label: 'B', text: 'FP與FN皆代表錯誤預測可評估哪種錯誤需優先避免' },
      { label: 'C', text: '追求更高的準確率是所有預測問題唯一重視的目標' },
      { label: 'D', text: 'Precision=TP/(TP+FP)' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: '準確率不是所有問題唯一重視的目標。在不平衡資料中，準確率可能具有誤導性。不同情境下可能更重視召回率、精確率、F1-score 或 AUC 等指標。',
    optionExplanations: { A: '正確，混淆矩陣確實用於評估分類問題的各項指標。', B: '正確，FP 與 FN 代表不同類型的錯誤預測，可據此評估哪種錯誤需優先避免。', C: null, D: '正確，Precision 的公式確實是 TP/(TP+FP)。' }
  }
]
