// Types
import { TypeOfJourney } from "@services/journey";

export interface CreateJourneyInput {
  name: string;
  typeOfJourney: TypeOfJourney;
}
