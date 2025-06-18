// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, DeactivateTopicInput } from "./response";

export async function deactivateTopic({ topicId }: DeactivateTopicInput) {
  const url = `/topic/${topicId}/deactivate`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    const response = await API.patch<HttpResponse>(url, {}, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
