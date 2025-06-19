import type { Summary } from "../types";

export interface FindSummaryInput {
  idTopic: string;
}

export interface HttpResponse {
  summary: Summary;
}
