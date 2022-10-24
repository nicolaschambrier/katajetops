import { npsServiceFactory } from "./domains/surveys/factory";

const service = npsServiceFactory();

const day = 86400000;

console.clear();

console.log(
  service.calcNps({
    surveyId: "1",
    startDate: Date.now(),
    endDate: Date.now() + 30 * day
  })
);

console.log(
  service.calcNps({
    surveyId: "1",
    startDate: Date.now() - 30 * day,
    endDate: Date.now()
  })
);

console.log(
  service.calcNps({
    surveyId: "1",
    startDate: Date.now() - 3 * day,
    endDate: Date.now() + 2 * day
  })
);

console.log(
  service.calcNps({
    surveyId: "2",
    startDate: Date.now() - 3 * day,
    endDate: Date.now() + 2 * day
  })
);
