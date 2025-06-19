// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { CreateSummaryInput, HttpResponse } from "./response";

export async function createSummary({
  idTopic,
  title,
  noteContent,
}: CreateSummaryInput) {
  const url = `/topic/${idTopic}/summary`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.post<HttpResponse>(
    url,
    { title, noteContent },
    options
  );
  return response.data;
}
