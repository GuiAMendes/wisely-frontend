// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { CreateDirectoryServiceInput, HttpResponse } from "./response";

export async function createDirectory({
  userId,
  name,
  isTemplate = false,
}: CreateDirectoryServiceInput) {
  const url = `/${userId}/directory`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.post<HttpResponse>(
      url,
      { name, isTemplate },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
