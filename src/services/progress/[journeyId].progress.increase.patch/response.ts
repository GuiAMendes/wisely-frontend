export interface IncreaseProgressServiceInput {
  idJourney: string;
}

export interface HttpResponse {
  idJourney: string;
  completedTopics: number;
  totalTopics: number;
}
