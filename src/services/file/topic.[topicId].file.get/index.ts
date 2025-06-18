// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { ListAllFilesInput, HttpResponse } from "./response";

export async function createFile({ idTopic }: ListAllFilesInput) {
  const url = `/topic/${idTopic}/file`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }
    const response = await API.get<HttpResponse>(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
