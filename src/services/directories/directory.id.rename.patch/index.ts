// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, RenameDirectoryInput } from "./response";

export async function RenameDirectory({
  directoryId,
  newDirectoryName,
}: RenameDirectoryInput) {
  const url = `/directory/${directoryId}/rename`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    if (!newDirectoryName) {
      throw new Error("The new directory name is invalid or ansafety.");
    }

    const response = await API.patch<HttpResponse>(
      url,
      { newDirectoryName },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
