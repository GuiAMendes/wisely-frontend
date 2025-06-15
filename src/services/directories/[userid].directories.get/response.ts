import { Directory } from "../types";

export interface FindDirectoriesByNameInput {
  userId: string;
}

export interface HttpResponse {
  directories: Directory[];
}
