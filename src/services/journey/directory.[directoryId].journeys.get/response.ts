import { Journey } from "../types";

export interface FindJourneyByNameInput {
  directoryId: string;
  journeyName: string;
}

export interface HttpResponse {
  journeys: Journey[];
}
