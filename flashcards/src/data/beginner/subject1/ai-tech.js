/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ai-tech.js
 * 功能：AI 技術與架構 - 卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'ai-tech',
  label: 'AI 技術與架構',
  cards: [
    {
      number: 1,
      title: '專家系統',
      engTitle: 'Expert System',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'psychology',
            content: '模擬人類專家的決策過程，用「如果...那就...」的規則來做判斷。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '知識庫：存放專家的規則和知識\n推理引擎：根據規則做出判斷\n\n例：醫療診斷\n如果 體溫>38 且 咳嗽 且 喉嚨痛\n那就 → 可能是流感'
          },
          {
            label: '特點',
            icon: 'lightbulb',
            content: '基於人工設定的規則，不像機器學習那樣從資料自動學。規則是人寫的，所以需要領域專家參與。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「持續蒐集環境數據」→ 不是專家系統（那是感知器網路）。\n專家系統是「用規則做判斷」，不是「蒐集資料」。\n\n另一個考法：專家系統屬於早期 AI 技術，基於人工規則，不像機器學習那樣自動從資料中學習。'
          }
        ]
      }
    },
    {
      number: 2,
      title: '決策支援系統',
      engTitle: 'Decision Support System, DSS',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'support',
            content: '幫助人類做決策的資訊系統，提供資料分析、模型模擬等功能，但最終決策還是由人來做。'
          },
          {
            label: '跟專家系統的差別',
            icon: 'compare',
            code: '專家系統 → 自動給答案（模擬專家）\nDSS      → 提供資訊輔助（人做決定）'
          },
          {
            label: '應用',
            icon: 'business',
            content: '企業經營分析、投資組合評估、醫療方案比較等需要「人+系統」合作的場景。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「持續蒐集環境數據」→ 不是 DSS（DSS 是幫人做決策的，不是蒐集資料的）。\n\n跟專家系統的差別是高頻考點：\n專家系統 → 自動給答案\nDSS → 提供資訊讓人決定'
          }
        ]
      }
    },
    {
      number: 3,
      title: '啟發式決策引擎',
      engTitle: 'Heuristic Decision Engine',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'explore',
            content: '用「經驗法則」快速找到「夠好的答案」，不追求最佳解，而是在合理時間內找到可接受的解。'
          },
          {
            label: '核心概念',
            icon: 'lightbulb',
            code: '精確演算法 → 保證找到最佳解，但可能很慢\n啟發式方法 → 不保證最佳，但速度快很多\n\n例：旅行推銷員問題\n窮舉所有路線太慢 → 用「每次走最近的城市」當捷徑'
          },
          {
            label: '應用',
            icon: 'route',
            content: '路徑規劃、排程優化、遊戲 AI 等需要快速決策的場景。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「持續蒐集環境數據」→ 不是啟發式引擎（那是決策優化，不是資料蒐集）。\n\n啟發式 = 用經驗法則快速找「夠好」的答案。跟感知器網路（蒐集資料）、專家系統（規則判斷）、DSS（輔助決策）都不一樣。'
          }
        ]
      }
    },
    {
      number: 4,
      title: '感知器網路',
      engTitle: 'Sensor Network',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'sensors',
            content: '由大量分散部署的感測器（Sensor）組成的網路，持續蒐集環境數據並回傳。'
          },
          {
            label: '蒐集什麼',
            icon: 'thermostat',
            code: '溫度、濕度、PM2.5、氣體濃度\n光線強度、聲音、震動\n設備狀態（如垃圾桶滿溢度）'
          },
          {
            label: '應用場景',
            icon: 'location_city',
            content: '智慧城市（空氣品質監測）、智慧農業（土壤濕度）、工業 IoT（設備狀態監控）。是 IoT 物聯網的核心技術之一。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「持續蒐集環境數據（PM2.5、氣體濃度）與設備狀態（垃圾桶滿溢度）」→ 感知器網路。\n\n關鍵字：「持續蒐集」「感測器」「環境數據」「設備狀態」→ 都指向 Sensor Network。\n\n不要跟「專家系統」搞混：專家系統是用規則「做判斷」，感知器網路是「蒐集資料」。'
          }
        ]
      }
    },
    {
      number: 5,
      title: '批次推論',
      engTitle: 'Batch Inference',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'inventory',
            content: '把大量資料「打包」一次送給模型處理，不需要馬上得到結果。適合延遲容忍度高的場景。'
          },
          {
            label: '特性',
            icon: 'build',
            code: '處理方式：累積一批資料 → 一次處理 → 結果寫入資料庫\n優化目標：吞吐量（Throughput）→ 單位時間處理越多越好\n延遲要求：不急，可以等幾分鐘甚至幾小時\n\n例：\n- 每晚跑一次推薦清單\n- 週末批次處理一週的發票分類\n- 大量歷史資料的風險評估'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '批次推論的關鍵字：「大規模」「延遲容忍」「吞吐量優先」「非同步」。\n\n不是只能用在影像模型（任何模型都可以批次跑）。\n不是用同步方式回傳（通常是非同步寫入結果）。'
          }
        ]
      }
    },
    {
      number: 6,
      title: '即時推論',
      engTitle: 'Real-time Inference',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'bolt',
            content: '使用者送出請求後，模型要立刻回應結果。強調低延遲和回應速度的穩定性。'
          },
          {
            label: '特性',
            icon: 'build',
            code: '處理方式：收到請求 → 立即處理 → 馬上回傳結果\n優化目標：低延遲（Latency）→ 回應越快越好\n延遲要求：毫秒到秒級，不能等\n\n例：\n- 聊天機器人即時回覆\n- 人臉解鎖即時辨識\n- 線上交易即時詐欺偵測\n- 自動駕駛即時判斷路況'
          },
          {
            label: '跟批次推論的比較',
            icon: 'compare',
            code: '              批次推論          即時推論\n處理量      大量一次處理       逐筆即時處理\n優化目標    吞吐量最大化       延遲最小化\n延遲要求    可容忍（分鐘~時）  不可容忍（毫秒~秒）\n回傳方式    非同步寫入結果     同步即時回傳\n適用場景    報表/推薦清單      聊天/辨識/偵測'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常考兩者差異，正確敘述：\n- 批次 = 吞吐量優先 + 延遲容忍\n- 即時 = 低延遲優先 + 回應穩定\n\n常見錯誤選項：\n- 「批次用同步回傳」→ 錯，通常非同步\n- 「即時限制單筆輸入」→ 錯，可以用 micro-batch\n- 「批次只能用於影像」→ 錯，任何模型都行'
          }
        ]
      }
    },
    {
      number: 7,
      title: '請求批次處理',
      engTitle: 'Batching',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'layers',
            content: '把多筆推論請求「打包」成一批一起送進 GPU 處理，而不是一筆一筆跑。這樣能充分利用 GPU 的平行運算能力。'
          },
          {
            label: '為什麼有效',
            icon: 'lightbulb',
            code: '沒有 Batching：\n  請求1 → GPU 處理 → 回傳\n  請求2 → GPU 處理 → 回傳  （GPU 每次只忙一點點）\n\n有 Batching：\n  請求1+2+3+4 → GPU 一次處理 → 回傳全部\n  （GPU 滿載運算，效率高很多）\n\n→ 吞吐量大幅提升，單位時間處理更多請求'
          },
          {
            label: '代價',
            icon: 'warning',
            content: '要等湊齊一批才處理 → 單筆請求的等待時間可能變長（延遲增加）。\n\n所以 Batching 是「吞吐量 vs 延遲」的取捨。高併發時效益明顯，低併發時湊不滿一批反而等更久。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '正確敘述：「Batching 提升資源使用效率和吞吐量，但可能影響單筆延遲」。\n\n錯誤選項：\n- 「加快單筆回應時間」→ 錯，單筆可能更慢\n- 「降低記憶體為主」→ 錯，主要是提升吞吐量\n- 「低併發也明顯有效」→ 錯，要夠多請求才有效'
          }
        ]
      }
    },
    {
      number: 8,
      title: 'AutoML',
      engTitle: 'Automated Machine Learning',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'auto_mode',
            content: '自動化機器學習平台，幫你自動完成模型選擇、特徵工程、超參數調整等步驟。不需要深厚的 AI 專業知識就能建模型。'
          },
          {
            label: '自動做什麼',
            icon: 'build',
            code: '1. 自動清理和轉換資料\n2. 自動選擇最適合的演算法\n3. 自動調整超參數\n4. 自動評估和比較模型\n5. 自動部署最佳模型\n\n常見平台：Google AutoML、Azure AutoML、\n          AWS SageMaker Autopilot、H2O.ai'
          },
          {
            label: '適合誰',
            icon: 'group',
            content: '缺乏 AI 專業人員、需要快速上線驗證的企業。不需要從零開始寫程式，也不需要深度學習專家。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「缺乏 AI 專業人員」+「快速上線」+「雲端」→ AutoML。\n\n不是「從零建深度學習框架」（太慢、需要專家）。\n不是「開源框架客製化」（需要工程能力）。\n不是「買現成軟體」（缺乏彈性、可能不合需求）。'
          }
        ]
      }
    },
    {
      number: 9,
      title: 'AI 能力分級',
      engTitle: 'AI Capability Levels',
      back: {
        sections: [
          {
            label: '四個等級',
            icon: 'signal_cellular_alt',
            code: '弱AI / 窄AI（Narrow AI）\n  只能做「特定任務」，目前所有 AI 都是這個\n  例：人臉辨識、下棋、語音助理\n\n強AI（Strong AI）\n  能像人類一樣「思考和理解」\n  目前還不存在\n\n通用人工智慧（AGI）\n  能執行「任何」人類能做的智力任務\n  目前還不存在，但各大公司在追求\n\n超級人工智慧（ASI）\n  智力遠超人類\n  純理論階段'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「只能做特定任務」+「無法遷移到其他任務」→ 弱AI / 窄AI。\n\n目前所有實際運作的 AI（ChatGPT、自駕車、AlphaGo）都是弱 AI。即使 ChatGPT 看起來很厲害，它的設計目標仍是特定的語言任務。\n\n強AI、AGI、ASI 目前都還不存在。'
          }
        ]
      }
    },
    {
      number: 10,
      title: '推薦系統',
      engTitle: 'Recommendation System',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'recommend',
            content: '根據使用者的歷史行為、偏好、或相似使用者的行為，自動推薦可能感興趣的內容或商品。'
          },
          {
            label: '常見方法',
            icon: 'build',
            code: '協同過濾（Collaborative Filtering）\n  → 「跟你相似的人也買了這個」\n\n內容過濾（Content-based Filtering）\n  → 「你喜歡動作片，推薦其他動作片」\n\n混合方法\n  → 兩者結合，效果更好'
          },
          {
            label: '應用',
            icon: 'storefront',
            content: 'Netflix 推薦影片、Amazon 推薦商品、YouTube 推薦影片、Spotify 推薦音樂。\n\n注意：推薦系統分析的是「使用者偏好和行為」，不是分析果實外觀（那是電腦視覺）。'
          }
        ]
      }
    },
    {
      number: 11,
      title: '增量更新索引',
      engTitle: 'Incremental Index Update',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'update',
            content: '當資料有異動時，只更新「有變動的部分」，而不是重建整個索引。這樣系統不需要停機，也能即時反映最新內容。'
          },
          {
            label: '跟全量重建的差別',
            icon: 'compare',
            code: '全量重建：\n  資料更新 → 砍掉整個索引 → 重建全部\n  → 耗時長、需要停機、可能引用舊版\n\n增量更新：\n  資料更新 → 只更新異動的部分\n  → 快速、不停機、即時反映新內容'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「RAG 系統」+「法規更新需重建索引」+「更新時停機」+「引用舊版」\n→ 導入增量更新索引\n\n核心目標：「兼顧查詢效率 + 知識更新彈性 + 系統穩定性」。'
          }
        ]
      }
    },
    {
      number: 12,
      title: '基因演算法',
      engTitle: 'Genetic Algorithm',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'biotech',
            content: '模仿生物演化「物競天擇、適者生存」的最佳化演算法。讓一群候選解像「基因」一樣不斷繁殖、突變、篩選，經過多代演化後找到好的解。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '1. 初始化：隨機產生一群候選解（族群）\n2. 適應度評估：算每個解有多好\n3. 選擇：好的解被選中的機率較高\n4. 交叉（Crossover）：兩個好解「交配」產生後代\n5. 突變（Mutation）：隨機微調，避免卡在局部最佳\n6. 重複 2~5 步，直到找到夠好的解\n\n就像：每一代都留下最強的，淘汰弱的\n       經過很多代，整體越來越強'
          },
          {
            label: '應用場景',
            icon: 'rocket',
            content: '排程優化（工廠排程、課表排程）、路徑規劃、電路設計、參數調整、機器學習的超參數搜尋。適合「搜尋空間很大、不好用數學公式直接解」的問題。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '基因演算法屬於 AI 技術架構中「技術底層」的演算法類型。\n\n跟啟發式方法的關係：基因演算法是一種「啟發式/元啟發式」方法，不保證找到最佳解，但能在合理時間內找到夠好的解。\n\n課本分類：與迴歸分析、分類演算法、決策樹並列為常見演算法。'
          }
        ]
      }
    },
    {
      number: 13,
      title: 'AI 技術架構三層次',
      engTitle: 'AI Technology Architecture',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'layers',
            content: '人工智慧的實現依賴多層次架構，從基礎技術到最終落地，每一層各有角色。'
          },
          {
            label: '三層架構',
            icon: 'account_tree',
            code: '第一層：技術底層\n  提供計算能力、數據支撐、核心演算法\n  ├─ 資料處理與分析（ETL、大數據平台）\n  ├─ 演算法（迴歸、分類、決策樹、基因演算法）\n  ├─ 機器學習（監督式/非監督式/強化學習）\n  ├─ 深度學習（CNN/RNN/GAN、TensorFlow/PyTorch）\n  └─ 專家系統（規則庫 + 推理引擎）\n\n第二層：開發應用\n  將基礎技術轉化為功能與服務\n  模型設計 → 訓練 → 測試 → 部署\n\n第三層：實際運用\n  技術落地到各行業創造價值\n  ├─ 行業解決方案（智慧醫療/物流/製造）\n  ├─ 產品與服務（語音助理/推薦系統/監控）\n  └─ 業務流程優化（提升效率與競爭力）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常問「某技術屬於哪一層」：\n- 演算法、機器學習、深度學習 → 技術底層\n- 模型訓練與部署 → 開發應用\n- 智慧醫療、推薦系統 → 實際運用\n\n記法：底層提供「原料和工具」，中層「加工組裝」，上層「交付使用」。'
          }
        ]
      }
    }
  ]
}
