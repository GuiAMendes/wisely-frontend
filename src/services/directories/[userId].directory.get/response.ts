import { Directory } from "../types";

export interface ListAllInput {
  userId: string;
}

export interface HttpResponse {
  directories: Directory[];
}
