/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part4b.js
 * 功能：模擬題 科目一（第 165-187 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 165,
      question: '在機器學習中，「特徵」是作為系統？',
      options: [
        { label: 'A', text: '輸出的預測結果' },
        { label: 'B', text: '輸入的獨立變量' },
        { label: 'C', text: '訓練的目標' },
        { label: 'D', text: '評估的標準' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '特徵是輸入數據的獨立變量，用於模型學習和預測。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 166,
      question: '為了使機器學習模型能夠更好地訓練與工作，需要進行？',
      options: [
        { label: 'A', text: '模型壓縮' },
        { label: 'B', text: '特徵工程' },
        { label: 'C', text: '演算法升級' },
        { label: 'D', text: '硬體加速' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '特徵工程通過選擇和轉換合適的特徵，提升模型的訓練效果和性能。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 167,
      question: '在監督式學習中，「標籤」是？',
      options: [
        { label: 'A', text: '輸入模型的原始數據' },
        { label: 'B', text: '模型學習過程中的參數' },
        { label: 'C', text: '已知的結果，模型在訓練過程中學習將其與輸入特徵相關聯' },
        { label: 'D', text: '模型預測不確定性的度量' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '標籤是監督式學習中的已知結果，模型學習將特徵與標籤關聯。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 168,
      question: '了解數據的分佈和特徵對AI模型開發的哪個環節沒有直接的幫助？',
      options: [
        { label: 'A', text: '數據預處理' },
        { label: 'B', text: '特徵選擇' },
        { label: 'C', text: '模型選擇' },
        { label: 'D', text: '模型部署' }
      ],
      answer: 'D',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '數據分佈和特徵分析主要影響預處理、特徵選擇和模型選擇，部署階段影響較小。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 169,
      question: '知識挖掘的主要目標是？',
      options: [
        { label: 'A', text: '自動生成新的文本內容' },
        { label: 'B', text: '將掃描的文件轉換為可編輯的文本' },
        { label: 'C', text: '從大量數據中發現隱藏的、有用的模式和資訊' },
        { label: 'D', text: '自動執行重複性的文件處理任務' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '知識挖掘從大數據中提取隱藏模式和資訊，產生商業洞察。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 170,
      question: '在AI模型訓練過程中，若發現模型對某些類別的預測偏差較大，可能的原因是？',
      options: [
        { label: 'A', text: '訓練數據中該類別的樣本數不足' },
        { label: 'B', text: '模型的計算能力過高' },
        { label: 'C', text: '訓練時間過長' },
        { label: 'D', text: '使用了不適合的優化器' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '類別樣本數不足導致模型無法充分學習該類特徵，產生預測偏差。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 171,
      question: '在AI導入的過程中，企業需要評估「技術債」（Technical Debt），這主要指的是？',
      options: [
        { label: 'A', text: '硬體設備的折舊成本' },
        { label: 'B', text: '因快速部署AI而導致的長期維護與更新成本' },
        { label: 'C', text: '員工培訓的費用' },
        { label: 'D', text: '購買AI模型的初始投資' }
      ],
      answer: 'B',
      chapter: '4.1 AI 導入評估',
      explanation: '技術債指因快速部署AI系統而忽略最佳實踐，導致未來需要額外的維護與更新成本。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 172,
      question: '在AI導入的成本效益分析中，企業需要考慮的成本不包括？',
      options: [
        { label: 'A', text: '數據收集與標註成本' },
        { label: 'B', text: '模型訓練與部署成本' },
        { label: 'C', text: '員工的個人興趣' },
        { label: 'D', text: '系統維護與更新成本' }
      ],
      answer: 'C',
      chapter: '4.1 AI 導入評估',
      explanation: '成本效益分析應聚焦數據、訓練、部署及維護成本，員工個人興趣與此無關。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 173,
      question: '在AI導入的過程中，企業需要進行「變革管理」（Change Management），其主要目的是？',
      options: [
        { label: 'A', text: '降低硬體成本' },
        { label: 'B', text: '確保員工適應AI技術的導入' },
        { label: 'C', text: '提高模型的運算速度' },
        { label: 'D', text: '減少數據收集的工作量' }
      ],
      answer: 'B',
      chapter: '4.1 AI 導入評估',
      explanation: '變革管理幫助員工適應AI技術的導入，減少抵觸並提升效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 174,
      question: '在AI導入的過程中，企業需要考慮「數據治理」（Data Governance），其主要目的是？',
      options: [
        { label: 'A', text: '提高模型的運算速度' },
        { label: 'B', text: '確保數據的質量、隱私和合規性' },
        { label: 'C', text: '降低數據收集的成本' },
        { label: 'D', text: '增加數據的數量' }
      ],
      answer: 'B',
      chapter: '4.1 AI 導入評估',
      explanation: '數據治理確保數據質量、隱私和合規性，為AI導入提供可靠基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 175,
      question: '在企業評估導入AI應用時，下列哪一項屬於「員工技能和培訓需求」的考量？',
      options: [
        { label: 'A', text: '現有的硬體設施是否足夠' },
        { label: 'B', text: '數據是否完整、一致和準確' },
        { label: 'C', text: '員工是否具備基本的AI知識' },
        { label: 'D', text: '導入AI的預期效益分析' }
      ],
      answer: 'C',
      chapter: '4.1 AI 導入評估',
      explanation: '員工技能和培訓需求聚焦於員工是否具備使用AI的基礎知識。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 176,
      question: '在AI模型的持續監控中，應該定期檢查的指標不包括？',
      options: [
        { label: 'A', text: '模型的預測準確率' },
        { label: 'B', text: '數據漂移（Data Drift）' },
        { label: 'C', text: '模型的訓練時間' },
        { label: 'D', text: '模型的公平性指標' }
      ],
      answer: 'C',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '持續監控應聚焦模型性能（如準確率、數據漂移、公平性），而訓練時間屬於訓練階段的指標。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 177,
      question: '在醫療領域，AI模型的應用需要符合HIPAA（健康保險流通與責任法案）的要求，這主要涉及？',
      options: [
        { label: 'A', text: '提高模型的計算速度' },
        { label: 'B', text: '確保患者數據的隱私與安全' },
        { label: 'C', text: '降低模型的訓練成本' },
        { label: 'D', text: '增加模型的複雜度' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'HIPAA要求保護患者數據隱私與安全，AI模型需遵守相關數據處理規範。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 178,
      question: '在AI模型的部署中，若採用「影子模式」（Shadow Mode），其主要目的是？',
      options: [
        { label: 'A', text: '直接取代現有系統' },
        { label: 'B', text: '在不影響現有流程的情況下測試AI模型的表現' },
        { label: 'C', text: '降低模型的運算成本' },
        { label: 'D', text: '加速模型的訓練過程' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '影子模式允許在現有系統運行時測試AI模型，確保其表現穩定而不影響實際運營。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 179,
      question: '在AI模型的部署中，若採用容器化技術（如Docker），其主要優勢是？',
      options: [
        { label: 'A', text: '降低模型的訓練時間' },
        { label: 'B', text: '提高模型的可移植性與環境一致性' },
        { label: 'C', text: '減少模型的參數數量' },
        { label: 'D', text: '增加模型的複雜度' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '容器化技術（如Docker）確保模型在不同環境中一致運行，提升可移植性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 180,
      question: '在AI模型的訓練中，若希望提高模型的泛化能力，應採取以下哪種方法？',
      options: [
        { label: 'A', text: '增加模型的層數和參數' },
        { label: 'B', text: '使用數據增強（Data Augmentation）技術' },
        { label: 'C', text: '只使用單一來源的數據' },
        { label: 'D', text: '降低模型的學習率' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '數據增強通過增加數據多樣性，幫助模型學習更廣泛的模式，提升泛化能力。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 181,
      question: '在AI模型的訓練中，若發現模型的損失函數（Loss Function）不再下降，可能的原因是？',
      options: [
        { label: 'A', text: '訓練數據過多' },
        { label: 'B', text: '模型已達到收斂' },
        { label: 'C', text: '模型的參數過少' },
        { label: 'D', text: '訓練數據的質量過高' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '損失函數不再下降通常表示模型已達到收斂，無法進一步優化。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 182,
      question: '在AI模型的評估中，ROC曲線（Receiver Operating Characteristic）主要用於評估什麼？',
      options: [
        { label: 'A', text: '模型的訓練時間' },
        { label: 'B', text: '模型的分類性能' },
        { label: 'C', text: '模型的計算成本' },
        { label: 'D', text: '模型的參數數量' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'ROC曲線用於評估分類模型的性能，特別是真陽率與假陽率的平衡。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 183,
      question: '在AI模型的訓練中，若使用遷移學習（Transfer Learning），其主要優勢是？',
      options: [
        { label: 'A', text: '無需任何訓練數據' },
        { label: 'B', text: '減少訓練時間並利用預訓練模型的知識' },
        { label: 'C', text: '增加模型的參數數量' },
        { label: 'D', text: '降低模型的泛化能力' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '遷移學習利用預訓練模型的知識，減少訓練時間並提升效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 184,
      question: '在AI模型的倫理考量中，「透明性」的主要目的是？',
      options: [
        { label: 'A', text: '提高模型的運算效率' },
        { label: 'B', text: '讓用戶理解模型的決策過程' },
        { label: 'C', text: '降低模型的訓練成本' },
        { label: 'D', text: '增加模型的參數數量' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '透明性確保用戶能理解AI決策過程，增強信任並符合倫理要求。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 185,
      question: '在AI導入的風險管理中，如何有效應對模型的「黑盒問題」？',
      options: [
        { label: 'A', text: '使用更複雜的深度學習模型' },
        { label: 'B', text: '採用可解釋性技術，如SHAP或LIME' },
        { label: 'C', text: '減少模型的訓練數據' },
        { label: 'D', text: '限制模型的使用範圍' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'SHAP和LIME等可解釋性技術能揭示模型決策邏輯，解決黑盒問題。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 186,
      question: '在AI導入的風險評估中，企業需要特別關注的法律風險不包括？',
      options: [
        { label: 'A', text: '數據隱私法規' },
        { label: 'B', text: '知識產權法規' },
        { label: 'C', text: '員工薪資法規' },
        { label: 'D', text: 'AI倫理規範' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: 'AI導入的法律風險包括數據隱私、知識產權和倫理規範，員工薪資法規與此無關。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 187,
      question: '在數位圖像中，RGB三個通道分別代表？',
      options: [
        { label: 'A', text: '長度、寬度、深度' },
        { label: 'B', text: '紅色、綠色、藍色' },
        { label: 'C', text: '解析度、幀率、位元深度' },
        { label: 'D', text: '光照、陰影、色彩飽和度' }
      ],
      answer: 'B',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: 'RGB通道分別代表紅色、綠色和藍色，用於表示圖像的顏色。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    }
]
