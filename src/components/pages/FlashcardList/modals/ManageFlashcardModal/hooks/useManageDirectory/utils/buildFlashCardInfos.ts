import { Flashcard } from "@services/flashcard";
import { FlashCardInfos } from "../types/flashcard";

export function buildFlashcardInfos(flashcard: Flashcard): FlashCardInfos {
  return {
    question: flashcard.props.question.props.value,
    response: flashcard.props.response.props.value,
  };
}
