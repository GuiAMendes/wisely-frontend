// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, ListAllFlashcardInput } from "./response";

export async function listAllFlashcards({ idTopic }: ListAllFlashcardInput) {
  const url = `/topic/${idTopic}/flashcard`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.get<HttpResponse>(url, options);
  return response.data.flashcards;
}
