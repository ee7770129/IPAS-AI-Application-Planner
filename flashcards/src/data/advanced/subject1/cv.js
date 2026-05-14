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
    }
  ]
}
