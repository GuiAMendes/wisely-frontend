// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, FindDirectoriesByNameInput } from "./response";

export async function FindDirectoriesByName({
  userId,
}: FindDirectoriesByNameInput) {
  const url = `/${userId}/directories`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.get<HttpResponse>(url, options);
    return response.data.directories;
  } catch (error) {
    console.log(error);
  }
}
