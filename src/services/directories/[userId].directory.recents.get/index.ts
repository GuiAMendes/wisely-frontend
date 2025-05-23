// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse } from "./response";

export async function getRecentDirectoriesAccessed(userId: number) {
  const url = `/${userId}/directory/recents`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.get<HttpResponse>(url, options);
    return response.data.recentDirectoriesAccessed;
  } catch (error) {
    console.log(error);
  }
}
