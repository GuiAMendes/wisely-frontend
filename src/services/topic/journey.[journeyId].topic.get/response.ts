import { Topic } from "../types";

export interface ListAllTopicsInput {
  journeyId: string;
}

export interface HttpResponse {
  topics: Topic[];
}
