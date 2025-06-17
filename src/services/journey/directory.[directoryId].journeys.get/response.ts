import { Journey } from "../types";

export interface FindJourneyByNameInput {
  directoryId: string;
}

export interface HttpResponse {
  journeys: Journey[];
}
