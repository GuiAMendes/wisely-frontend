import { Topic } from "../types";

export interface FindTopicByNameInput {
  journeyId: string;
  topicName: string;
}

export interface HttpResponse {
  topics: Topic[];
}
