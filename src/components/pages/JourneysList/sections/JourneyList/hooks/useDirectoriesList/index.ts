// Types
import { UseDirectoriesListParams } from "./types";
import { Journey } from "@services/journey";
import { DeactivateJourney } from "@services/journey/journey.id.deactivate.patch";

export function useDirectoriesList({
  refresh,
  refreshRecentsAccess,
}: UseDirectoriesListParams) {
  // States

  // Functions
  async function handleRemoveJourney(journey: Journey) {
    try {
      await DeactivateJourney({ journeyId: journey.props.id });
      refresh();
      refreshRecentsAccess();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    handleRemoveJourney,
  };
}
