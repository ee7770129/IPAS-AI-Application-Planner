/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：cv.js
 * 功能：電腦視覺技術與應用 - 中級卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'cv',
  label: '電腦視覺技術與應用',
  cards: [
    {
      number: 1,
      title: 'IoU',
      engTitle: 'Intersection over Union',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'crop_free',
            content: '衡量「預測框」和「真實框」重疊程度的指標。兩個框交集的面積除以聯集的面積。用來判斷物件偵測的定位準不準。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: 'IoU = 交集面積 / 聯集面積\n\nIoU = 1.0 → 完美重合\nIoU = 0.5 → 重疊一半\nIoU = 0.0 → 完全沒重疊\n\n通常設閾值：\n  IoU >= 0.5 → 算偵測成功\n  IoU >= 0.75 → 更嚴格的標準'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'IoU 閾值設定「較高」的意義：預測框與真實框的重疊程度要求越高，表示偵測結果越精準。\n\n不是「誤差越大 mAP 上升」（邏輯反了）。\n不是「精確率降低召回率上升」（閾值高反而是精確率高但召回率可能降低）。\n不是「不受真實框大小影響」（IoU 就是看兩個框的關係）。'
          }
        ]
      }
    },
    {
      number: 2,
      title: 'mAP',
      engTitle: 'Mean Average Precision',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'assessment',
            content: '物件偵測最常用的評估指標。對每個類別算 AP（Average Precision），再取所有類別的平均。數值越高表示偵測能力越好。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: '1. 對每個類別：\n   在不同信心閾值下算 Precision 和 Recall\n   → 畫出 Precision-Recall 曲線\n   → 曲線下面積 = AP\n\n2. mAP = 所有類別的 AP 取平均\n\n常見寫法：\n  mAP@0.5  → IoU 閾值 0.5\n  mAP@0.75 → IoU 閾值 0.75（更嚴格）\n  mAP@[0.5:0.95] → 多個閾值取平均（COCO 標準）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'mAP 是物件偵測的「綜合」指標，同時考慮精確率和召回率在不同閾值下的表現。\n\nIoU 閾值越高 → 定位要求越嚴格 → mAP 通常越低（因為更難達標）。'
          }
        ]
      }
    },
    {
      number: 3,
      title: 'Max-Pooling',
      engTitle: 'Max-Pooling',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'filter_list',
            content: 'CNN 中的「池化」操作。在一個小區域中只保留最大值，丟掉其他值。用來縮小特徵圖的尺寸，減少計算量，同時保留最顯著的特徵。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '2×2 Max-Pooling 範例：\n\n原始 4×4：         池化後 2×2：\n[1, 3, 2, 4]      [5, 8]\n[5, 2, 8, 1]  →   [6, 9]\n[3, 6, 1, 7]\n[4, 2, 9, 3]\n\n每個 2×2 區域取最大值\n→ 尺寸減半，保留最強特徵'
          },
          {
            label: '跟 Softmax 的差別',
            icon: 'compare',
            code: 'Max-Pooling：\n  取區域最大值，丟掉其他 → 降維\n  用在 CNN 的中間層\n  輸出不是機率\n\nSoftmax：\n  保留所有輸入，轉成機率分佈（加總=1）\n  用在分類的輸出層\n  不丟任何資訊，只改變表示方式'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '正確敘述：「Softmax 保留所有輸入資訊但以比例表示；Max-Pooling 只保留區域最大值」。\n\n錯誤選項：\n- 「兩者都壓縮為單一最大值」→ Softmax 不壓縮\n- 「Max-Pooling 做機率轉換」→ 反了，Softmax 才做\n- 「Softmax 用於降維」→ 反了，Max-Pooling 才降維'
          }
        ]
      }
    },
    {
      number: 4,
      title: '全景分割',
      engTitle: 'Panoptic Segmentation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'panorama',
            content: '結合「語意分割」和「實例分割」的終極版。既標記每個像素的類別，又區分同類物件的不同個體。'
          },
          {
            label: '三種分割的差別',
            icon: 'compare',
            code: '語意分割（Semantic）：\n  每個像素標類別，同類不區分個體\n  → 所有行人都標同一色\n\n實例分割（Instance）：\n  同類物件區分不同個體\n  → 行人A 綠色、行人B 藍色\n  但只標「可數物件」，不標背景\n\n全景分割（Panoptic）：\n  兩者都做！\n  → 可數物件：區分個體（行人A、行人B）\n  → 不可數背景：標類別（道路、天空、建築）\n  → 完整覆蓋每一個像素'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「辨識每個像素類別」+「區分同類不同個體」→ 全景分割。\n\n語意分割 → 只標類別，不分個體。\n實例分割 → 分個體但不標背景。\n物件偵測 → 只畫框，不標像素。\n全景分割 → 全都做。'
          }
        ]
      }
    },
    {
      number: 5,
      title: 'CNN 經典架構演進',
      engTitle: 'CNN Architecture Evolution',
      back: {
        sections: [
          {
            label: '四大經典模型',
            icon: 'layers',
            code: 'LeNet（1998）\n  最早的 CNN，5 層，手寫數字辨識\n  結構簡單，適合入門\n\nAlexNet（2012）\n  深度學習里程碑！ImageNet 冠軍\n  8 層，引入 ReLU + Dropout\n  證明 CNN 在大規模影像分類的威力\n\nVGG（2014）\n  強調「深度」，全用 3x3 小卷積核\n  最深 19 層，分類準確度大幅提升\n  但參數量極大\n\nResNet（2015）\n  引入殘差連接（Skip Connection）\n  解決深層網路的梯度消失問題\n  可訓練 152 層以上的超深網路'
          },
          {
            label: 'CNN 基本組件',
            icon: 'build',
            code: '卷積層 → 提取局部特徵（邊緣、紋理）\n池化層 → 降維、減少計算量（Max Pooling）\n激活層 → 引入非線性（ReLU）\n全連接層 → 整合特徵做分類\n輸出層 → Softmax 轉為類別機率'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'AlexNet = 2012 年 ImageNet 突破，開啟 CNN 時代。\nResNet = 殘差連接解決梯度消失，能訓練超深網路。\n\n評估指標：\n- 準確率(Accuracy)\n- Top-5 錯誤率（真實類別在前 5 名內即正確）\n- 混淆矩陣（分析各類別的誤分類情況）'
          }
        ]
      }
    },
    {
      number: 6,
      title: '物件偵測模型',
      engTitle: 'Object Detection Models',
      back: {
        sections: [
          {
            label: '三大主流模型',
            icon: 'crop_free',
            code: 'YOLO（You Only Look Once）\n  一次性預測邊界框+類別（迴歸方法）\n  速度極快，適合即時應用\n  應用：即時監控、人臉辨識、自駕車\n\nFaster R-CNN\n  先用 RPN 生成候選框，再分類+迴歸\n  準確度高但速度較慢\n  應用：高精度偵測（醫療影像）\n\nSSD（Single Shot Multibox Detector）\n  多尺度特徵圖偵測\n  速度和準確度的平衡\n  應用：嵌入式裝置、邊緣運算'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '常考情境配對：\n- 「即時偵測、速度優先」→ YOLO\n- 「高準確度、可接受較慢」→ Faster R-CNN\n- 「速度和準確度平衡」→ SSD\n\n物件偵測 = 定位（框在哪）+ 分類（框裡是什麼）\n評估用 mAP（不同 IoU 閾值下的平均精確率）'
          }
        ]
      }
    },
    {
      number: 7,
      title: '影像分割模型',
      engTitle: 'Image Segmentation Models',
      back: {
        sections: [
          {
            label: '三大分割模型',
            icon: 'auto_awesome_mosaic',
            code: 'FCN（Fully Convolutional Network）\n  把 CNN 改成全卷積，端到端像素分類\n  用上採樣還原解析度\n  適合語意分割\n\nU-Net\n  對稱的編碼器-解碼器結構\n  跳躍連接保留細節\n  專為醫療影像設計\n  適合小資料集、不平衡資料\n\nMask R-CNN\n  Faster R-CNN + 像素遮罩分支\n  能同時做物件偵測和實例分割\n  適合多目標精細分割'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '常考配對：\n- 「醫療影像分割」→ U-Net\n- 「實例分割」→ Mask R-CNN\n- 「語意分割（基礎）」→ FCN\n\n分割 vs 偵測：\n- 偵測 = 畫邊界框（粗略位置）\n- 分割 = 標每個像素（精確邊界）'
          }
        ]
      }
    },
    {
      number: 8,
      title: 'Vision Transformer / SAM',
      engTitle: 'ViT / Segment Anything Model',
      back: {
        sections: [
          {
            label: 'Vision Transformer (ViT)',
            icon: 'grid_view',
            content: '把 NLP 的 Transformer 架構搬到影像領域。把影像切成小塊（Patches），每塊當作一個「詞」，用自注意力機制處理。\n\n突破：證明 Transformer 不只能處理文字，也能處理影像，在大規模資料上效果超越 CNN。\n\n意義：打破 CNN 在電腦視覺的壟斷地位。'
          },
          {
            label: 'SAM (Segment Anything)',
            icon: 'auto_fix_high',
            content: 'Meta 推出的通用影像分割模型。核心特點是「什麼都能分割」-- 不限特定類別或領域，具備極強的泛化能力。\n\n只需要簡單的提示（點一個點、畫一個框），就能自動分割出目標物件。\n\n意義：把分割任務從「需要專門訓練」變成「通用即插即用」。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'CV 技術演進三階段：\n1. 特徵工程（1980s-2010）→ 手工設計特徵\n2. CNN 革命（2012-2020）→ AlexNet 突破，自動學習特徵\n3. 多模態+生成式（2020-至今）→ ViT、CLIP、DALL-E、SAM\n\n第三階段的關鍵：不只「辨識」還能「生成」和「跨模態理解」。'
          }
        ]
      }
    },
    {
      number: 9,
      title: '遷移學習',
      engTitle: 'Transfer Learning',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'school',
            content: '把在大型資料集（如 ImageNet）上訓練好的模型，搬到自己的小型任務上繼續使用。不用從零開始訓練，大幅節省時間和資料需求。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '凍結策略（三種常見做法）：\n\n1. 只換最後幾層（Feature Extraction）\n   凍結前面所有卷積層，只訓練最後的分類層\n   → 資料極少時用這招\n\n2. 微調後半段（Fine-tuning）\n   凍結前面幾層，解凍後面幾層一起訓練\n   → 資料中等時用這招\n\n3. 全部微調（Full Fine-tuning）\n   所有層都參與訓練，但用很小的學習率\n   → 資料充足且任務差異大時用'
          },
          {
            label: '為什麼有效',
            icon: 'lightbulb',
            content: 'CNN 前面的層學到的是通用特徵（邊緣、紋理、形狀），這些特徵在大多數影像任務中都有用。後面的層才學特定任務的特徵。所以前面的層可以直接搬過來用。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「資料量少 + 要用深度學習」→ 遷移學習。\n「凍結前面的層」→ 保留通用特徵，只調整任務專屬層。\n\n不是「從零訓練小模型」（效果差）。\n不是「用 GAN 生成更多資料」（可以互補但不是替代）。'
          }
        ]
      }
    },
    {
      number: 10,
      title: 'Batch Normalization',
      engTitle: 'Batch Normalization',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'tune',
            content: '在神經網路的每一層之間加一個「標準化」步驟，讓每一層的輸入維持在穩定的分佈（平均=0、標準差=1），再透過可學習的參數做縮放和位移。'
          },
          {
            label: '為什麼需要',
            icon: 'lightbulb',
            code: '問題：內部共變量偏移（Internal Covariate Shift）\n  每一層的輸入分佈會隨著前面層的參數更新而改變\n  → 後面的層一直在追趕變動的分佈\n  → 訓練變慢、容易不穩定\n\nBatch Norm 的效果：\n  穩定每層的輸入分佈\n  → 可以用更大的學習率（訓練更快）\n  → 減少對參數初始化的敏感度\n  → 有輕微的正則化效果（減少過擬合）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Batch Norm 放在卷積層或全連接層「之後」、激活函數「之前」。\n\n核心效果：「加速訓練收斂 + 穩定梯度」。\n不是「降維」（那是 Pooling）。\n不是「防止梯度消失的根本解法」（ResNet 的殘差連接才是）。'
          }
        ]
      }
    },
    {
      number: 11,
      title: 'Grad-CAM 可視化',
      engTitle: 'Gradient-weighted Class Activation Mapping',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'visibility',
            content: '一種模型可解釋性工具。用熱力圖顯示 CNN 在做分類決策時，「看的是圖片的哪個區域」。紅色區域 = 模型最關注的地方。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '1. 模型對圖片做預測 → 得到類別分數\n2. 對類別分數反向傳播 → 得到最後一層卷積的梯度\n3. 用梯度當權重，加權平均特徵圖\n4. 疊加到原始圖片上 → 得到熱力圖\n\n結果：\n  紅色 = 模型最關注的區域\n  藍色 = 模型不在意的區域'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「CNN 模型的可解釋性」→ Grad-CAM。\n「XAI 在電腦視覺的應用」→ Grad-CAM 熱力圖。\n\n跟 SHAP/LIME 的差別：\n- SHAP/LIME → 表格資料的特徵重要性\n- Grad-CAM → 影像資料的注意力可視化'
          }
        ]
      }
    },
    {
      number: 12,
      title: '資料標註方法',
      engTitle: 'Data Annotation Methods',
      supplementary: true,
      back: {
        sections: [
          {
            label: '四種標註類型',
            icon: 'edit',
            code: '影像分類標註：\n  整張圖一個標籤（貓/狗/車）\n  → 最簡單、成本最低\n\n邊界框標註（Bounding Box）：\n  在物件周圍畫矩形框\n  → 用於物件偵測（YOLO、Faster R-CNN）\n\n多邊形標註（Polygon）：\n  沿物件邊緣畫多邊形\n  → 用於實例分割（Mask R-CNN）\n\n像素級標註（Pixel-level）：\n  每個像素都標類別\n  → 用於語意分割（FCN、U-Net）\n  → 成本最高'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '標註精度越高 → 成本越高：\n分類 < 邊界框 < 多邊形 < 像素級\n\n常考配對：\n- 「物件偵測」→ 邊界框標註\n- 「語意分割」→ 像素級標註\n- 「實例分割」→ 多邊形標註\n\n半監督式/自監督式學習的目標之一就是減少標註需求。'
          }
        ]
      }
    },
    {
      number: 13,
      title: 'GAN 變體：CycleGAN / StyleGAN',
      engTitle: 'CycleGAN / StyleGAN',
      supplementary: true,
      back: {
        sections: [
          {
            label: 'CycleGAN',
            icon: 'swap_horiz',
            content: '不需要「配對資料」就能做風格轉換的 GAN。核心概念是「循環一致性」：圖片從 A 風格轉成 B 風格，再轉回 A，應該要跟原圖一樣。\n\n應用：照片 ↔ 油畫、馬 ↔ 斑馬、夏天 ↔ 冬天。\n\n關鍵：不需要一一對應的訓練資料，只要兩組不同風格的圖片即可。'
          },
          {
            label: 'StyleGAN',
            icon: 'face',
            content: 'NVIDIA 開發的高品質人臉生成模型。核心創新是「風格注入」：在生成過程的不同層注入不同尺度的風格控制。\n\n粗粒度（低解析度層）→ 控制臉型、年齡、性別\n中粒度 → 控制五官、髮型\n細粒度（高解析度層）→ 控制膚色、毛孔、光影\n\n能生成幾乎以假亂真的人臉照片。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'GAN 變體配對：\n- DCGAN = 深度卷積 GAN（基礎影像生成）\n- CycleGAN = 無配對風格轉換\n- StyleGAN = 高品質人臉生成\n- Pix2Pix = 有配對影像轉換\n\n「油畫↔照片風格轉換」→ CycleGAN。\n「高品質人臉生成」→ StyleGAN。'
          }
        ]
      }
    },
    {
      number: 14,
      title: '影像前處理',
      engTitle: 'Image Preprocessing',
      supplementary: true,
      back: {
        sections: [
          {
            label: '常見步驟',
            icon: 'auto_fix_high',
            code: '1. 尺寸調整（Resize）\n   統一輸入尺寸（如 224x224）\n   → CNN 固定輸入大小\n\n2. 像素標準化（Normalization）\n   除以 255 壓到 [0,1]\n   或用 ImageNet 的平均/標準差做 Z-score\n   → 加速收斂、穩定訓練\n\n3. 色彩空間轉換\n   RGB ↔ Grayscale ↔ HSV\n   → 依任務需求選擇\n\n4. 雜訊去除（Denoising）\n   高斯模糊、中值濾波\n   → 降低雜訊干擾\n\n5. 資料增強（Data Augmentation）\n   旋轉、翻轉、裁切、亮度調整\n   → 增加訓練資料多樣性'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「影像輸入 CNN 前」→ Resize + 標準化是必要步驟。\n「ImageNet 預訓練模型」→ 要用 ImageNet 的平均值和標準差做標準化。\n\n前處理不當（如未標準化）→ 訓練不收斂或效果差。'
          }
        ]
      }
    }
  ]
}
