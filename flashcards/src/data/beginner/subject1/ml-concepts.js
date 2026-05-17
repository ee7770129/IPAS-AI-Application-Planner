/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ml-concepts.js
 * 功能：機器學習概念 - 聚合檔（匯入三個分割檔）
 * 建立日期：2026-05-15
 * 版本：1.1.0
 */

import part1 from './ml-concepts-part1.js'
import part2 from './ml-concepts-part2.js'
import part3 from './ml-concepts-part3.js'

export default {
  id: 'ml-concepts',
  label: '機器學習概念',
  cards: [...part1, ...part2, ...part3]
}
