// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { CreateJourneyServiceInput, HttpResponse } from "./response";

export async function createJourney({
  directoryId,
  name,
  typeOfJourney,
}: CreateJourneyServiceInput) {
  const url = `/${directoryId}/Journey`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }
    const response = await API.post<HttpResponse>(
      url,
      { name, typeOfJourney: typeOfJourney as string },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
