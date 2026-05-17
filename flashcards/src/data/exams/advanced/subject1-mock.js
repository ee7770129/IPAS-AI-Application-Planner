/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock.js
 * 功能：模擬題 科目一（匯入所有分檔）
 * 來源：中級AI應用規畫師已分區.xlsx
 * 建立日期：2026-05-17
 * 版本：2.0.0
 */
import part1 from './subject1-mock-part1.js'
import part2 from './subject1-mock-part2.js'
import part3 from './subject1-mock-part3.js'
import part4 from './subject1-mock-part4.js'

export default {
  id: 'adv-s1-mock',
  label: '模擬題 科目一',
  subject: '科目一 人工智慧技術應用與規劃',
  examDate: '模擬題',
  questions: [...part1, ...part2, ...part3, ...part4]
}
