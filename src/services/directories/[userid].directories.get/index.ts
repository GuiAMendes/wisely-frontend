// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, FindDirectoriesByNameInput } from "./response";

export async function FindDirectoriesByName({
  userId,
  directoryName,
}: FindDirectoriesByNameInput) {
  const url = `/${userId}/directories?name=${encodeURIComponent(
    directoryName
  )}`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.get<HttpResponse>(url, options);
  return response.data.directories;
}
