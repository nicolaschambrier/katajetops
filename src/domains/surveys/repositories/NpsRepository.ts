import { NpsAdapter } from "../adapters/NpsAdapter";
import { Rank } from "../types";

const newDistribution = () =>
  new Map<Rank, number>([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0]
  ]);

export class NpsRepository {
  constructor(private readonly adapter: NpsAdapter) {}

  listDistribution({
    surveyId,
    startDate,
    endDate
  }: {
    surveyId: string;
    startDate: number;
    endDate: number;
  }) {
    const responses = this.adapter.listSurveyResponses({
      surveyId,
      startDate,
      endDate
    });
    return responses.reduce((dist, response) => {
      dist.set(response.rank, (dist.get(response.rank) ?? 0) + 1);
      return dist;
    }, newDistribution());
  }
}
