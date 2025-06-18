import type { Summary } from "../types";

export interface FindSummaryInput {
  idTopic: string;
  title: string;
  noteContent: string;
}

export interface HttpResponse {
  summary: Summary;
}
