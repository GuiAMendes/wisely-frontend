import { TypeOfJourney } from "@pages/JourneysList/modals/ManageJourneyModal/hooks/useManageDirectory/types/journeyInfos";

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
