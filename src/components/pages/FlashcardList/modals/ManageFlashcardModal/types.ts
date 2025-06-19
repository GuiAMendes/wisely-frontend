import { Flashcard } from "@services/flashcard";

export interface ManageFlashcardModalMethods {
  open: (flashCard?: Flashcard) => void;
  close: () => void;
}

export interface ManageFlashcardModalProps {
  refresh: () => void;
}
