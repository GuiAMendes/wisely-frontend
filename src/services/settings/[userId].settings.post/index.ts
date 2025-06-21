// Service
import API from "@services/api";

// Types
import type { CreateSettingsInput, HttpResponse } from "./response";

export async function createSettings({ userId }: CreateSettingsInput) {
  const url = `/${userId}/settings`;

  const response = await API.post<HttpResponse>(url, {});
  return response.data;
}
