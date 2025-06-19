// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, CompleteJourneyInput } from "./response";

export async function CompleteJourney({ journeyId }: CompleteJourneyInput) {
  const url = `/journey/${journeyId}/complete`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.patch<HttpResponse>(url, {}, options);
  return response.data;
}
