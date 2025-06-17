import { Journey } from "../types";

export interface ListRecentJourneysAccessed {
  directoryId: string;
}

export interface HttpResponse {
  journeys: Journey[];
}
