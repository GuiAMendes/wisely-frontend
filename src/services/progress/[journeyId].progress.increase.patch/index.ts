// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { IncreaseProgressServiceInput, HttpResponse } from "./response";

export async function increaseProgress({
  idJourney,
}: IncreaseProgressServiceInput) {
  const url = `/${idJourney}/progress/increase`;
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