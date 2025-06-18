import { Topic } from "@services/topic";

export interface ManageTopicModalMethods {
  open: (topic?: Topic) => void;
  close: () => void;
}

export interface ManageTopicModalProps {
  refresh: () => void;
}
