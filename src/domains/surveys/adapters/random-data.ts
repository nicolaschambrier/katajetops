import { Rank, SurveyResponse } from '../types'

const randomSurveyId = () => (Math.random() > 0.7 ? '2' : '1')

const randomRank = () => Math.round(Math.random() * 10) as Rank

let nextUserId = 0
const randomUserId = () => String(++nextUserId)

// -1/+1 week
const now = Date.now()
const day = 86400000
const randomDate = () => now + 7 * day - Math.round(Math.random() * 14) * day

export const randomData: SurveyResponse[] = new Array(10000)
  .fill(undefined)
  .map(() => ({
    surveyId: randomSurveyId(),
    rank: randomRank(),
    userId: randomUserId(),
    date: randomDate(),
  }))
