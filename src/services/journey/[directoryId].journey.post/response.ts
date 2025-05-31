import { TypeOfJourney } from "../types";

export interface CreateJourneyServiceInput {
  directoryId: string;
  name: string;
  typeOfJourney: TypeOfJourney;
}

export interface HttpResponse {
  id: string;
  name: string;
  typeOfJourney: string;
}
