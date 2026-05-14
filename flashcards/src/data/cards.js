/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：cards.js
 * 功能：學習卡片資料主檔（匯入各主題子檔案並組合）
 * 建立日期：2026-05-14
 * 版本：3.0.0
 *
 * 新增卡片請到對應的主題檔案中修改：
 *   初級 → beginner/subject1/
 *   中級 → advanced/subject1/
 */

/* ===== 初級 ===== */
import aiTech from './beginner/subject1/ai-tech.js'
import dataProcessing from './beginner/subject1/data-processing.js'
import mlConcepts from './beginner/subject1/ml-concepts.js'
import nnDl from './beginner/subject1/nn-dl.js'
import discGenAi from './beginner/subject1/disc-gen-ai.js'
import aiGovernance from './beginner/subject1/ai-governance.js'
import aiIndustry from './beginner/subject1/ai-industry.js'
import imbalance from './beginner/subject1/imbalance.js'

/* ===== 中級 ===== */
import advNlp from './advanced/subject1/nlp.js'
import advCv from './advanced/subject1/cv.js'
import advMl from './advanced/subject1/ml-advanced.js'
import advGenAi from './advanced/subject1/gen-ai.js'
import advMultimodal from './advanced/subject1/multimodal.js'
import advDeployment from './advanced/subject1/deployment.js'
import advAiRisk from './advanced/subject1/ai-risk.js'
import advReview from './advanced/subject1/review.js'

export const DATA = {
  beginner: {
    label: '初級',
    subjects: [
      {
        id: 'subject1',
        label: '第一科 人工智慧基礎概論',
        topics: [
          aiTech,
          dataProcessing,
          mlConcepts,
          nnDl,
          discGenAi,
          aiGovernance,
          aiIndustry,
          imbalance
        ]
      },
      {
        id: 'subject2',
        label: '第二科 生成式AI應用與規劃',
        topics: [
          {
            id: 'subject2-hint',
            label: '生成式AI應用與規劃',
            cards: [
              {
                number: 1,
                title: '很簡單自己去看!',
                engTitle: '嘿嘿',
                image: '/yiyi-hehe.png',
                back: {
                  sections: [
                    {
                      label: '認真說',
                      icon: 'sentiment_satisfied',
                      content: '第二科的內容比較直覺，建議直接閱讀官方學習資源，效果更好！'
                    },
                    {
                      label: '學習資源',
                      icon: 'menu_book',
                      content: 'iPAS AI 應用規劃師官網有完整教材，去看就對了。'
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  advanced: {
    label: '中級',
    subjects: [
      {
        id: 'adv-subject1',
        label: '科目一 人工智慧技術應用與規劃',
        topics: [
          advNlp,
          advCv,
          advMl,
          advGenAi,
          advMultimodal,
          advDeployment,
          advAiRisk,
          advReview
        ]
      }
    ]
  }
}
