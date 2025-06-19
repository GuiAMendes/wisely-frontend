import { FlashCardInfos } from "../types/flashcard";

export function makeInitialInfos(): FlashCardInfos {
  return {
    question: ``,
    response: "",
  };
}
