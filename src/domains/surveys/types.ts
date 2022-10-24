export type Rank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type SurveyResponse = {
  surveyId: string;
  rank: Rank;
  userId: string;
  date: number; // timestamp
};

export type NpsResult = {
  distribution: Map<Rank, number>;
  nbPromoters: number;
  nbDetractors: number;
  total: number;
  score: number;
};
