// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, UpdateResponseFlashcardInput } from "./response";

export async function updateResponseFlashcard({
  idFlashcard,
  newResponseContent,
}: UpdateResponseFlashcardInput) {
  const url = `/flashcard/${idFlashcard}/updateResponse`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.patch<HttpResponse>(
      url,
      { newResponseContent },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
