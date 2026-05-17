/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-textbook-part2.js
 * 功能：中級科目一 課本練習題（第 16-30 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 16,
      question: '當 AI 導入規劃需評估系統部署模式時，若考量資料隱私與本地控制需求，應優先考慮？',
      options: [
        { label: 'A', text: '第三方雲端部署' },
        { label: 'B', text: '地端私有部署' },
        { label: 'C', text: '區塊鏈儲存方式' },
        { label: 'D', text: '外包給 AI 公司' }
      ],
      answer: 'B',
      chapter: '4.2 AI 導入規劃',
      explanation: '地端部署可提供更強的資料控制與隱私保障，常見於金融、政府、醫療等敏感領域。',
      optionExplanations: {
        A: '雲端部署資料會離開本地，不符合隱私和本地控制需求。',
        B: null,
        C: '區塊鏈是分散式帳本技術，不是 AI 系統部署模式。',
        D: '外包會讓資料和模型都在第三方手中，更不利於隱私控制。'
      }
    },
    {
      id: 17,
      question: '在 AI 風險評估中，若模型輸出不穩定且缺乏邏輯可解釋性，可能帶來哪一風險？',
      options: [
        { label: 'A', text: '模型效率過高' },
        { label: 'B', text: '公平性過度提升' },
        { label: 'C', text: '決策透明性不足' },
        { label: 'D', text: '資料使用效率太高' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '模型無法解釋其輸出會降低使用者與監管單位的信任，是常見的 AI 風險來源（黑箱問題）。',
      optionExplanations: {
        A: '效率過高不是風險，而且與可解釋性無關。',
        B: '公平性過度提升不是風險，且不存在這種說法。',
        C: null,
        D: '資料使用效率太高不是風險。'
      }
    },
    {
      id: 18,
      question: '以下何者屬於 AI 模型偏誤造成的風險？',
      options: [
        { label: 'A', text: '語法錯誤' },
        { label: 'B', text: '輸入資料格式錯誤' },
        { label: 'C', text: '特定族群預測結果不公平' },
        { label: 'D', text: '模型壓縮後效能下降' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '資料或模型偏誤常導致對少數族群、女性或弱勢族群的不公平結果，是需積極管理的 AI 倫理風險。',
      optionExplanations: {
        A: '語法錯誤是程式bug，不是模型偏誤。',
        B: '資料格式錯誤是資料品質問題，不是偏誤。',
        C: null,
        D: '模型壓縮效能下降是技術問題，不是偏誤風險。'
      }
    },
    {
      id: 19,
      question: '為管理 AI 導入過程中的「法律與合規風險」，企業應採取何種措施？',
      options: [
        { label: 'A', text: '強化演算法複雜度' },
        { label: 'B', text: '減少模型訓練次數' },
        { label: 'C', text: '檢視個資使用的合法性' },
        { label: 'D', text: '加速模型部署速度' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '若使用涉及個人資料，須確認是否符合資料保護法（如 GDPR 或個資法）規範。',
      optionExplanations: {
        A: '演算法複雜度與法律合規無關。',
        B: '訓練次數與法律合規無關。',
        C: null,
        D: '加速部署反而可能跳過合規審查，增加風險。'
      }
    },
    {
      id: 20,
      question: 'AI 模型部署後，若長期輸入資料分佈逐漸改變，導致模型效能下降，最適合採取下列哪一項作法進行風險管理？',
      options: [
        { label: 'A', text: '定期重啟伺服器以排除效能問題' },
        { label: 'B', text: '加入多個冗餘模型以進行同時預測' },
        { label: 'C', text: '建置概念漂移監控與觸發模型再訓練流程' },
        { label: 'D', text: '縮減模型層數以降低計算成本' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '概念漂移(Concept Drift)指資料分佈隨時間改變，可能使模型預測準確率下降，須建置監控機制偵測異常並觸發再訓練。',
      optionExplanations: {
        A: '重啟伺服器解決的是系統問題，不是模型效能問題。',
        B: '冗餘模型是可用性設計，不能解決資料分佈變化。',
        C: null,
        D: '縮減模型層數會降低模型能力，且不解決分佈變化問題。'
      }
    },

    // ===== 第五章 AI 技術應用與系統部署 =====
    {
      id: 21,
      question: '資料標註在監督式學習中的主要目的為何？',
      options: [
        { label: 'A', text: '減少資料儲存需求' },
        { label: 'B', text: '提升資料讀取速度' },
        { label: 'C', text: '讓模型能夠辨識輸入與目標之間的對應關係' },
        { label: 'D', text: '降低模型複雜度' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '資料標註是監督式學習的關鍵步驟，能讓模型理解每筆資料對應的標籤或結果。',
      optionExplanations: {
        A: '標註會增加資料的附加資訊，不會減少儲存需求。',
        B: '標註與讀取速度無關。',
        C: null,
        D: '標註不影響模型複雜度，模型複雜度由架構決定。'
      }
    },
    {
      id: 22,
      question: '在資料前處理中，對數值特徵進行標準化的主要目的為何？',
      options: [
        { label: 'A', text: '增加資料維度' },
        { label: 'B', text: '刪除離群值' },
        { label: 'C', text: '將特徵縮放至相同尺度，利於模型學習' },
        { label: 'D', text: '將類別變數轉為數值' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '許多演算法（如 SVM、KNN）對特徵尺度敏感，標準化有助於提升模型表現與穩定性。',
      optionExplanations: {
        A: '標準化不增加維度，只改變數值的尺度。',
        B: '標準化不刪除離群值，只做縮放。',
        C: null,
        D: '類別轉數值是編碼（One-hot/Label Encoding），不是標準化。'
      }
    },
    {
      id: 23,
      question: '預測顧客是否會流失，最適合使用下列哪一種任務類型？',
      options: [
        { label: 'A', text: '分類任務' },
        { label: 'B', text: '迴歸任務' },
        { label: 'C', text: '聚類任務' },
        { label: 'D', text: '降維任務' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '顧客流失通常為「會/不會」的二元分類問題，適合使用分類模型如 Logistic Regression、決策樹等。',
      optionExplanations: {
        A: null,
        B: '迴歸預測的是連續數值（如金額），不是「會/不會」的類別。',
        C: '聚類是無監督學習，將資料分群，不是預測特定結果。',
        D: '降維是減少特徵數量，不是預測任務。'
      }
    },
    {
      id: 24,
      question: '在選擇 AI 模型時，下列何者為最重要的考量原則？',
      options: [
        { label: 'A', text: '選擇參數量最多的模型' },
        { label: 'B', text: '模型應優先考慮開發成本與可部署性' },
        { label: 'C', text: '使用最新發表的模型' },
        { label: 'D', text: '選擇最複雜的深度學習架構' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '選擇模型需考量資料特性、開發時間、計算成本與後續維運難度，不應一味追求複雜度。',
      optionExplanations: {
        A: '參數量多不代表效果好，且會增加成本。',
        B: null,
        C: '最新的不一定最適合，要看具體需求。',
        D: '最複雜的可能過擬合且難以維運。'
      }
    },
    {
      id: 25,
      question: '若資料集中有缺失值(Missing Values)，下列哪一種方法最常用於處理？',
      options: [
        { label: 'A', text: '直接刪除整個資料集' },
        { label: 'B', text: '將缺失值填入隨機字串' },
        { label: 'C', text: '插補法' },
        { label: 'D', text: '忽略缺失值直接訓練' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '插補法(Imputation)可用平均數、中位數、眾數或模型預測方式填補缺失欄位，常用於資料清理階段。',
      optionExplanations: {
        A: '刪除整個資料集太極端，會丟失所有資料。',
        B: '隨機字串沒有意義，會引入雜訊。',
        C: null,
        D: '忽略缺失值可能導致模型訓練錯誤或偏差。'
      }
    },
    {
      id: 26,
      question: '在設計 AI 應用系統架構時，使用容器技術（如 Docker）的主要優點為？',
      options: [
        { label: 'A', text: '加快資料標註速度' },
        { label: 'B', text: '提升 API 回應速度' },
        { label: 'C', text: '促進模型跨平台部署與環境一致性' },
        { label: 'D', text: '減少模型所需參數量' }
      ],
      answer: 'C',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '容器技術可封裝應用與其依賴環境，確保模型從開發到部署保持一致。',
      optionExplanations: {
        A: '容器與資料標註無關。',
        B: '容器主要優勢是環境一致性，不直接提升 API 速度。',
        C: null,
        D: '容器不會改變模型參數量。'
      }
    },
    {
      id: 27,
      question: 'MLOps 的主要目的為何？',
      options: [
        { label: 'A', text: '壓縮模型參數' },
        { label: 'B', text: '簡化使用者介面設計' },
        { label: 'C', text: '實現 AI 模型的自動化開發、部署與持續維運流程' },
        { label: 'D', text: '將 AI 模型嵌入硬體晶片' }
      ],
      answer: 'C',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: 'MLOps 結合 DevOps 與機器學習，可實現模型生命週期的持續整合、測試與監控。',
      optionExplanations: {
        A: '模型壓縮是模型優化技術，不是 MLOps 的主要目的。',
        B: 'UI 設計與 MLOps 無關。',
        C: null,
        D: '嵌入晶片是邊緣部署/硬體設計，不是 MLOps。'
      }
    },
    {
      id: 28,
      question: '在邊緣運算架構中，AI 模型的推論通常會發生在哪裡？',
      options: [
        { label: 'A', text: '雲端 GPU 伺服器' },
        { label: 'B', text: '終端裝置本地端' },
        { label: 'C', text: '資料標註平台' },
        { label: 'D', text: '資料儲存庫' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '邊緣 AI 將模型部署至如手機、攝影機、感測器等裝置上，提升即時性並減少延遲。',
      optionExplanations: {
        A: '雲端 GPU 是集中式運算，不是邊緣運算。邊緣運算強調在「終端」處理。',
        B: null,
        C: '資料標註平台是用來標註訓練資料的，不做推論。',
        D: '資料儲存庫是存放資料的地方，不做推論。'
      }
    },
    {
      id: 29,
      question: '持續監控部署後 AI 模型效能的主要目的為何？',
      options: [
        { label: 'A', text: '減少資料備份空間' },
        { label: 'B', text: '提升 UI 使用效率' },
        { label: 'C', text: '偵測模型概念漂移與效能下降' },
        { label: 'D', text: '強化模型壓縮效果' }
      ],
      answer: 'C',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '模型部署後若輸入資料特性改變，將可能導致預測不準，故需建立監控機制。',
      optionExplanations: {
        A: '監控效能與備份空間無關。',
        B: '模型效能監控與 UI 無關。',
        C: null,
        D: '模型壓縮是部署前的優化，不是監控的目的。'
      }
    },
    {
      id: 30,
      question: '在 AI 系統整合過程中，為確保模型可與業務流程無縫對接，通常需要哪種角色協作？',
      options: [
        { label: 'A', text: '社群經營人員' },
        { label: 'B', text: '資料標註員' },
        { label: 'C', text: '產品經理與工程人員' },
        { label: 'D', text: '硬體維修技術員' }
      ],
      answer: 'C',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '產品經理負責需求對齊與驗證場景，工程人員負責將模型封裝並整合至應用流程。',
      optionExplanations: {
        A: '社群經營與系統整合無關。',
        B: '資料標註員負責標註訓練資料，不負責系統整合。',
        C: null,
        D: '硬體維修與軟體系統整合不同。'
      }
    }
  ]
