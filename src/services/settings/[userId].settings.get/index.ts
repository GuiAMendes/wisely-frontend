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

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  try {
    const response = await API.get<Settings>(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching user settings:", error);
    throw error; // relança para tratamento no front
  }
}
