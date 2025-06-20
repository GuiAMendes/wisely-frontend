// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, ListRecentDirectoriesAccessed } from "./response";

export async function getRecentDirectoriesAccessed({
  userId,
}: ListRecentDirectoriesAccessed) {
  const url = `/${userId}/directory/recents`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.get<HttpResponse>(url, options);
  return response.data.directories;
}
