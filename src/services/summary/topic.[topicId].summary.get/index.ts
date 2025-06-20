// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { FindSummaryInput, HttpResponse } from "./response";

export async function findSummary({ idTopic }: FindSummaryInput) {
  const url = `/topic/${idTopic}/summary`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.get<HttpResponse>(url, options);
  return response.data.summary;
}
