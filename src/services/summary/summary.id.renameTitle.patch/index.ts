// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, RenameTitleOfSummaryInput } from "./response";

export async function renameTitleOfSummary({
  idSummary,
  newTitle,
}: RenameTitleOfSummaryInput) {
  const url = `/summary/${idSummary}/renameTitle`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.patch<HttpResponse>(url, { newTitle }, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
