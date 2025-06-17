import { Journey } from "@services/journey";

export interface ManageJourneyModalMethods {
  open: (journey?: Journey) => void;
  close: () => void;
}

export interface ManageJourneyModalProps {
  refresh: () => void;
  refreshRecents: () => void;
}
