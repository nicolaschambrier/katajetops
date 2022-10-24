import { NpsAdapterMemory } from "../adapters/NpsAdapterMemory";
import { NpsRepository } from "../repositories/NpsRepository";
import { NpsService } from "../services/NpsService";
import { Rank, SurveyResponse } from "../types";

describe("NPS", () => {
  const getService = (data: SurveyResponse[]) => {
    const memoryAdapter = new NpsAdapterMemory(data);
    const npsRepository = new NpsRepository(memoryAdapter);
    const npsService = new NpsService(npsRepository);
    return npsService;
  };

  it("should compute nps 100", () => {
    const service = getService([
      {
        surveyId: "1",
        rank: 10 as Rank,
        userId: "1",
        date: 1000000
      }
    ]);
    expect(
      service.calcNps({
        surveyId: "1",
        startDate: 0,
        endDate: 999999999
      })
    ).toMatchObject({
      score: 100
    });
  });

  it("should compute nps 0", () => {
    const service = getService([
      {
        surveyId: "1",
        rank: 9 as Rank,
        userId: "1",
        date: 1000000
      },
      {
        surveyId: "1",
        rank: 5 as Rank,
        userId: "1",
        date: 1000000
      }
    ]);
    expect(
      service.calcNps({
        surveyId: "1",
        startDate: 0,
        endDate: 999999999
      })
    ).toMatchObject({
      score: 0
    });
  });
});
