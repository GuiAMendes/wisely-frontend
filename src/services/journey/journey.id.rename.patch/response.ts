export interface RenameJourneyInput {
  journeyId: string;
  newJourneyName: string;
}

export interface HttpResponse {
  journeyId: string;
  journeyName: string;
}
