// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, CreateFlashcardInput } from "./response";

export async function createFlashcard({
  idTopic,
  questionContent,
  responseContent,
}: CreateFlashcardInput) {
  const url = `/topic/${idTopic}/flashcard`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.post<HttpResponse>(
      url,
      { questionContent, responseContent },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
