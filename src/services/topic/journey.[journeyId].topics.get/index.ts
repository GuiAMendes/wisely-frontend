// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import { HttpResponse, FindTopicByNameInput } from "./response";

export async function FindTopicByName({
  journeyId,
  topicName,
}: FindTopicByNameInput) {
  const url = `/journey/${journeyId}/topics?name=${encodeURIComponent(
    topicName
  )}`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.get<HttpResponse>(url, options);
  return response.data.topics;
}
