// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, ListAllInput } from "./response";

export async function getJourneys({ directoryId }: ListAllInput) {
  const url = `/${directoryId}/Journey`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.get<HttpResponse>(url, options);
  return response.data.journeys;
}
