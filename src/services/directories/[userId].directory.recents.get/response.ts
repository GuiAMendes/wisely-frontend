import { Directory } from "../types";

export interface ListRecentDirectoriesAccessed {
  userId: string;
}

export interface HttpResponse {
  directories: Directory[];
}
