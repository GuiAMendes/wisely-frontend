import type { File } from "../types";

export interface ListAllFilesInput {
  idTopic: string;
}

export interface HttpResponse {
  files: File[];
}
