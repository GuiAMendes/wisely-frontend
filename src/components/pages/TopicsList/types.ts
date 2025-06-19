import { BaseNode } from "./components/Journey/types/types";

export interface NodeTopic extends BaseNode {
  idJourney: string;
  topicName: string;
  createdAt: string;
  updatedAt: string;
  completedAt: string;
  isActive: boolean;
  isConcluded: boolean;
}

export type ActionTypes = "edit" | "delete" | "conclude";
