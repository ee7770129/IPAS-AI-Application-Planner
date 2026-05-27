/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：exams/index.js
 * 功能：歷屆考題資料索引（動態匯入所有考題檔案）
 * 建立日期：2026-05-16
 * 版本：2.0.0
 */

import advS1_114 from './advanced/subject1-114.js'
import advS1_textbook from './advanced/subject1-textbook.js'
import advS1_mock from './advanced/subject1-mock.js'
import advS2_114 from './advanced/subject2-114.js'
import advS2_textbook from './advanced/subject2-textbook.js'
import advS2_mock from './advanced/subject2-mock.js'

/**
 * 考題資料結構
 * 依級別 → 科目分組，每個科目下可有多屆考題
 */
export const EXAM_DATA = {
  beginner: {
    label: '初級',
    subjects: []
  },
  advanced: {
    label: '中級',
    subjects: [
      {
        id: 'adv-subject1',
        label: '科目一 人工智慧技術應用與規劃',
        exams: [advS1_114, advS1_textbook, advS1_mock]
      },
      {
        id: 'adv-subject2',
        label: '科目二 大數據處理分析與應用',
        exams: [advS2_114, advS2_textbook, advS2_mock]
      }
    ]
  }
}

/**
 * 檢查指定級別是否有考題可用
 * @param {string} level - 'beginner' 或 'advanced'
 * @returns {boolean}
 */
export function hasExams(level) {
  const data = EXAM_DATA[level]
  if (!data) return false
  return data.subjects.some(s => s.exams.length > 0 && s.exams.some(e => e.questions.length > 0))
}
