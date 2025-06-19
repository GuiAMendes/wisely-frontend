// Types
import { deactivateFlashcard, Flashcard } from "@services/flashcard";
import { UseFlashcardParams } from "./types";

export function useFlashcardList({ refresh }: UseFlashcardParams) {
  // States

  // Functions
  async function handleRemoveFlashcard(flashCard: Flashcard) {
    try {
      await deactivateFlashcard({ idFlashcard: flashCard.props.id });
      refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    handleRemoveFlashcard,
  };
}
