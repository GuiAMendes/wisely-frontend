import { Directory } from "../types";

export interface FindDirectoriesByNameInput {
  userId: string;
  directoryName: string;
}

export interface HttpResponse {
  directories: Directory[];
}
