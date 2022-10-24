import { npsServiceFactory } from './domains/surveys/factory'

const service = npsServiceFactory()

const day = 86400000

console.clear()

console.log(
  'Survey 1, 0 to +1 month',
  service.calcNps({
    surveyId: '1',
    startDate: Date.now(),
    endDate: Date.now() + 30 * day,
  }),
)

console.log(
  'Survey 1, -1 month to 0',
  service.calcNps({
    surveyId: '1',
    startDate: Date.now() - 30 * day,
    endDate: Date.now(),
  }),
)

console.log(
  'Survey 1, -3 day to +2 day',
  service.calcNps({
    surveyId: '1',
    startDate: Date.now() - 3 * day,
    endDate: Date.now() + 2 * day,
  }),
)

console.log(
  'Survey 2, -3 day to +2 day',
  service.calcNps({
    surveyId: '2',
    startDate: Date.now() - 3 * day,
    endDate: Date.now() + 2 * day,
  }),
)

console.log(
  'Survey 1, +2 day to -3 day (wrong)',
  service.calcNps({
    surveyId: '1',
    startDate: Date.now() + 2 * day,
    endDate: Date.now() - 3 * day,
  }),
)
