import { SurveyResponse } from '../types'

export interface NpsAdapter {
  listSurveyResponses: ({
    surveyId,
    startDate,
    endDate,
  }: {
    surveyId: string
    startDate: number
    endDate: number
  }) => SurveyResponse[]
}
