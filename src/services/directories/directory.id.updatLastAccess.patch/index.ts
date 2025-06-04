// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpUpdateLastAccessParams } from "./response";

export async function updatedLastAccess({
  directoryId,
}: HttpUpdateLastAccessParams) {
  const url = `/directory/${directoryId}/updateLastAccess`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.patch(url, options);
    return response.data.recentDirectoriesAccessed;
  } catch (error) {
    console.log(error);
  }
}
