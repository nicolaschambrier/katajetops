import { SurveyResponse } from '../types'

import { NpsAdapter } from './NpsAdapter'
import { randomData } from './random-data'

const isSurvey =
  (surveyId: string) =>
  (response: SurveyResponse): boolean => {
    return response.surveyId === surveyId
  }

const isPeriod =
  (startDate: number, endDate: number) =>
  (response: SurveyResponse): boolean => {
    return response.date >= startDate && response.date <= endDate
  }

export class NpsAdapterMemory implements NpsAdapter {
  constructor(private data: SurveyResponse[] = randomData) {}

  public listSurveyResponses({
    surveyId,
    startDate,
    endDate,
  }: {
    surveyId: string
    startDate: number
    endDate: number
  }) {
    return this.data
      .filter(isSurvey(surveyId))
      .filter(isPeriod(startDate, endDate))
  }
}
