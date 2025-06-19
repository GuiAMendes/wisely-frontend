import { FlashCardErrors } from "../types/flashcard";

export function makeInitialErrors(): FlashCardErrors {
  return {
    question: ``,
    response: "",
  };
}
