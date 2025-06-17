import { Journey } from "@services/journey";
import { JourneyInfos, TypeOfJourney } from "../types/journeyInfos";

export function buildJourneyInfos(journey: Journey): JourneyInfos {
  return {
    name: journey.props.journeyName,
    type: journey.props.typeOfJourney as TypeOfJourney,
  };
}
