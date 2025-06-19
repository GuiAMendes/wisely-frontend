// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, EditContentOfSummaryInput } from "./response";

export async function editContentOfSummary({
  idSummary,
  newContent,
}: EditContentOfSummaryInput) {
  const url = `/summary/${idSummary}/editContent`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.patch<HttpResponse>(url, { newContent }, options);
  return response.data;
}
