// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { ListAllFilesInput, HttpResponse } from "./response";

export async function listAllFiles({ idTopic }: ListAllFilesInput) {
  const url = `/topic/${idTopic}/file`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.get<HttpResponse>(url, options);
  return response.data.files;
}
