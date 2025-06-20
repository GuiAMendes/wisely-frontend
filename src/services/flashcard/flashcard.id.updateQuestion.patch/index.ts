// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, UpdateQuestionFlashcardInput } from "./response";

export async function updateQuestionFlashcard({
  idFlashcard,
  newQuestionContent,
}: UpdateQuestionFlashcardInput) {
  const url = `/flashcard/${idFlashcard}/updateQuestion`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.patch<HttpResponse>(
    url,
    { newQuestionContent },
    options
  );
  return response.data;
}
