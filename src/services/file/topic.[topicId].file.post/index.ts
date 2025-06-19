// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { CreateFileInput, HttpResponse } from "./response";

export async function createFile({
  idTopic,
  fileName,
  fileType,
  fileContent,
}: CreateFileInput) {
  const url = `/topic/${idTopic}/file`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }
    const response = await API.post<HttpResponse>(
      url,
      {
        fileName,
        fileType,
        fileContent,
      },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
