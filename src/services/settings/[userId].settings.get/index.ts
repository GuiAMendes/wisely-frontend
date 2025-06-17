// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { FindSettingsByUserInput } from "./response";
import type { Settings } from "../types";

export async function fingSettingsByUser({ userId }: FindSettingsByUserInput) {
  const url = `/${userId}/settings`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.get<Settings>(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
