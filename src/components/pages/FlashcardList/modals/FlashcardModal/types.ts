import { Flashcard } from "@services/flashcard";

export interface FlashcardModalMethods {
  open: (flashcard: Flashcard) => void;
  close: () => void;
}

export interface FlashcardModalProps {
  refresh: () => void;
}
