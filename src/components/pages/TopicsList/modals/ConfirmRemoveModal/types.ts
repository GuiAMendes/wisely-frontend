import { Topic } from "@services/topic";

export interface ConfirmRemoveModalMethods {
  open: (topic: Topic) => void;
  close: () => void;
}

export interface ConfirmRemoveModalProps {
  refresh: () => void;
}
