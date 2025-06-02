// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { ListRecentJourneysAccessed, HttpResponse } from "./response";

export async function getRecentJourneysAccessed({
  directoryId,
}: ListRecentJourneysAccessed) {
  const url = `/${directoryId}/journey/recents`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }
    const response = await API.get<HttpResponse>(url, options);
    return response.data.recentJourneysAccessed;
  } catch (error) {
    console.log(error);
  }
}
