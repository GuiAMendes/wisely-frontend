// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, CompleteDirectoryInput } from "./response";

export async function CompleteDirectory({
  directoryId,
}: CompleteDirectoryInput) {
  const url = `/directory/${directoryId}/complete`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.patch<HttpResponse>(url, {}, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
