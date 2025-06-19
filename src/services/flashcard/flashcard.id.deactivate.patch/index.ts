// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, DeactivateFlashcardInput } from "./response";

export async function deactivateFlashcard({
  idFlashcard,
}: DeactivateFlashcardInput) {
  const url = `/flashcard/${idFlashcard}/deactivate`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.patch<HttpResponse>(url, {}, options);
  return response.data;
}
