// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, ListAllTopicsInput } from "./response";

export async function getJourneys({ journeyId }: ListAllTopicsInput) {
  const url = `/journey/${journeyId}/topic`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }
    const response = await API.get<HttpResponse>(url, options);
    return response.data.topics;
  } catch (error) {
    console.log(error);
  }
}
