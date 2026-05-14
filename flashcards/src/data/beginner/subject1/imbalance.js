/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：imbalance.js
 * 功能：類別不平衡處理 - 卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'imbalance',
  label: '類別不平衡處理',
  cards: [
    { number: 1, title: 'SMOTE', engTitle: 'Synthetic Minority Over-sampling Technique', back: { sections: [{ label: '是什麼', icon: 'add_circle', content: '少數類別樣本太少時，在少數類別的特徵空間中「合成」全新的樣本出來。' }, { label: '怎麼做', icon: 'build', content: '在少數類別的樣本之間連線，在連線上插值產生新樣本：', code: '詐欺A (2,4)  詐欺B (6,8)  詐欺C (4,2)\n\n新樣本1 (4,6)  ← A和B之間\n新樣本2 (3,3)  ← A和C之間\n\n3筆 → 5筆，少數類別變多了' }, { label: '重點', icon: 'lightbulb', content: '不是複製貼上（那叫 Random Over-sampling），而是合成全新的樣本。' }, { label: '優缺點', icon: 'balance', tags: [{ type: 'pro', text: '優點：不會丟失任何資料' }, { type: 'con', text: '缺點：少數類別有雜訊時，合成樣本也可能是雜訊' }] }, { label: '考試重點', icon: 'school', content: '考法：「下列何者最符合 SMOTE 的主要功能？」\n\n正確：「依據少數類別樣本的特徵空間，合成產生新的少數類別樣本」。\n\n常見干擾選項：\n- 「隨機刪除多數類別」→ 那是 Under-sampling\n- 「調整損失函數權重」→ 那是 Cost-sensitive Learning\n- 「交叉驗證重新分割」→ 那是評估方法，不處理不平衡' }] } },
    { number: 2, title: '隨機欠取樣', engTitle: 'Random Under-sampling', back: { sections: [{ label: '是什麼', icon: 'remove_circle', content: '多數類別太多時，隨機刪掉一部分，讓兩邊比例接近。' }, { label: '範例', icon: 'table_chart', code: '原始：正常 10,000 筆 / 詐欺 50 筆\n處理後：正常 100 筆 / 詐欺 50 筆\n\n比例從 200:1 → 2:1' }, { label: '優缺點', icon: 'balance', tags: [{ type: 'pro', text: '優點：簡單快速，訓練速度快' }, { type: 'con', text: '缺點：丟掉的 9,900 筆裡可能有重要模式' }] }, { label: '考試重點', icon: 'school', content: '考題常把 SMOTE 和 Under-sampling 放在一起考：\n\nSMOTE → 幫少數類別「生」新樣本（不刪資料）\nUnder-sampling → 把多數類別「砍」掉（會丟資料）\n\n「隨機刪除部分正常交易資料」→ Under-sampling，不是 SMOTE。' }] } },
    { number: 3, title: '成本敏感學習', engTitle: 'Cost-sensitive Learning', back: { sections: [{ label: '是什麼', icon: 'tune', content: '不改資料，改模型的懲罰力度。猜錯少數類別時扣更多分，逼模型更認真學。' }, { label: '怎麼做', icon: 'build', code: '一般：猜錯正常 扣1分 / 猜錯詐欺 扣1分\n調整：猜錯正常 扣1分 / 猜錯詐欺 扣50分\n\n模型：「猜錯詐欺太痛了，要更認真辨識」' }, { label: '優缺點', icon: 'balance', tags: [{ type: 'pro', text: '優點：資料完整保留，不需改動資料' }, { type: 'con', text: '缺點：權重設太高會過度預測為少數類別' }] }, { label: '考試重點', icon: 'school', content: '考法：「調整損失函數權重，使誤判少數類別時懲罰提高」→ Cost-sensitive Learning。\n\n跟 SMOTE 的差別：\nSMOTE → 從「資料」下手（生新樣本）\nCost-sensitive → 從「模型」下手（改懲罰權重）\n\n兩者都不改變測試資料的評估方式。' }] } },
    { number: 4, title: '交叉驗證', engTitle: 'Cross-validation', back: { sections: [{ label: '是什麼', icon: 'grid_view', content: '評估模型好不好的方法。不直接解決類別不平衡，但常搭配使用。' }, { label: '怎麼做（5-fold 為例）', icon: 'build', code: '把資料分 5 份，每份輪流當測試集：\n\n第1輪：[測試] [訓練] [訓練] [訓練] [訓練]\n第2輪：[訓練] [測試] [訓練] [訓練] [訓練]\n第3輪：[訓練] [訓練] [測試] [訓練] [訓練]\n...\n\n跑 5 次取平均，結果更穩定可信' }, { label: '優缺點', icon: 'balance', tags: [{ type: 'pro', text: '優點：充分利用所有資料，結果更客觀' }, { type: 'con', text: '缺點：訓練 K 次，花 K 倍時間' }] }, { label: '考試重點', icon: 'school', content: '考法：「以交叉驗證方式重新分割資料集，使各折類別比例一致」→ 這是評估方法（Stratified K-Fold），不是解決不平衡的技術。\n\n交叉驗證 = 評估模型好不好\nSMOTE/Under-sampling/Cost-sensitive = 解決不平衡\n\n兩者常搭配使用，但功能不同。' }] } },
    { number: 5, title: '損失函數', engTitle: 'Loss Function', back: { sections: [{ label: '是什麼', icon: 'functions', content: '衡量模型預測值和真實值之間差距的函數。差距越大，損失越高，模型就知道自己猜得不好。' }, { label: '怎麼用', icon: 'build', code: '訓練過程：\n1. 模型做預測\n2. 損失函數算出「猜錯多少」\n3. 模型調整參數，讓損失變小\n4. 重複直到損失夠小' }, { label: '跟 Cost-sensitive 的關係', icon: 'link', content: 'Cost-sensitive Learning 就是修改損失函數的權重，讓猜錯少數類別的懲罰更大。' }] } }
  ]
}
