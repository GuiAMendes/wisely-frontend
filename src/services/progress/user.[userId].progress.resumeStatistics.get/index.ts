// Service
import API from "@services/api";

// Utils
import { getAuthHeaders } from "@utils/getAuthHeaders";

// Types
import type { ResumeStatisticsOfProgressInput } from "./response";
import type { ResumeStatistics } from "../types";

export async function resumeStatistics({
  userId,
}: ResumeStatisticsOfProgressInput) {
  const url = `/user/${userId}/progress/resumeStatistics`;
  const options = getAuthHeaders();

  if (!options) {
    throw new Error("Token is missing or invalid.");
  }

  const response = await API.get<ResumeStatistics>(url, options);
  return response.data;
}
