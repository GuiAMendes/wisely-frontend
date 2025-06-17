// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { UpdateSettingsInput, HttpResponse } from "./response";

export async function updateSettings({
  userId,
  newSettings,
}: UpdateSettingsInput) {
  const url = `/${userId}/settings`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const { colorSchema } = newSettings;
    const response = await API.patch<HttpResponse>(
      url,
      { colorSchema },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
