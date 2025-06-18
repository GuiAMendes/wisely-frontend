// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { CreateTopicInput, HttpResponse } from "./response";

export async function createTopic({ idJourney, name }: CreateTopicInput) {
  const url = `/journey/${idJourney}/topic`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }
    const response = await API.post<HttpResponse>(url, { name }, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
