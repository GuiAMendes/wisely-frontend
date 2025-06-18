// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { CreateSettingsInput, HttpResponse } from "./response";

export async function createSettings({ userId }: CreateSettingsInput) {
  const url = `/${userId}/settings`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.post<HttpResponse>(url, {}, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
