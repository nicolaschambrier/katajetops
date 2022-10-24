import { NpsRepository } from "../repositories/NpsRepository";
import { NpsResult, Rank } from "../types";

type ResponseEntry = [Rank, number];

const isPromoterEntry = ([rank]: ResponseEntry): boolean => {
  return rank >= 9;
};

const isDetractorEntry = ([rank]: ResponseEntry): boolean => {
  return rank <= 6;
};

const sumResponseEntries = (entries: ResponseEntry[]): number => {
  return entries.reduce((sum, [, rank]) => sum + rank, 0);
};

export class NpsService {
  constructor(private readonly npsRepository: NpsRepository) {}

  calcNps({
    surveyId,
    startDate,
    endDate
  }: {
    surveyId: string;
    startDate: number;
    endDate: number;
  }): NpsResult {
    const distribution = this.npsRepository.listDistribution({
      surveyId,
      startDate,
      endDate
    });
    const entries = Array.from(distribution.entries());
    const total = sumResponseEntries(entries);
    const nbPromoters = sumResponseEntries(entries.filter(isPromoterEntry));
    const nbDetractors = sumResponseEntries(entries.filter(isDetractorEntry));
    const score = (100 * (nbPromoters - nbDetractors)) / total;
    return { distribution, nbPromoters, nbDetractors, total, score };
  }
}
