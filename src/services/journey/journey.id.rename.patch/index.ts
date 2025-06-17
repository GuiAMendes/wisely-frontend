// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, RenameJourneyInput } from "./response";

export async function RenameJourney({
  journeyId,
  newJourneyName,
}: RenameJourneyInput) {
  const url = `/journey/${journeyId}/rename`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    if (!newJourneyName) {
      throw new Error("The new journey name is invalid or unsafe.");
    }

    const response = await API.patch<HttpResponse>(
      url,
      { newJourneyName },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
