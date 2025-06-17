// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, FindJourneyByNameInput } from "./response";

export async function FindJourneyByName({
  directoryId,
  journeyName,
}: FindJourneyByNameInput) {
  const url = `/${directoryId}/journeys?name=${encodeURIComponent(
    journeyName
  )}`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.get<HttpResponse>(url, options);
    return response.data.journeys;
  } catch (error) {
    console.log(error);
  }
}
