// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, RenameTopicInput } from "./response";

export async function RenameTopic({ topicId, newTopicName }: RenameTopicInput) {
  const url = `/topic/${topicId}/rename`;
  const options = getAuthHeaders();

  try {
    if (!options) {
      throw new Error("Token is missing or invalid.");
    }

    if (!newTopicName) {
      throw new Error("The new topic name is invalid or unsafe.");
    }

    const response = await API.patch<HttpResponse>(
      url,
      { newTopicName },
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
