import { FlashCardErrors, FlashCardInfos } from "../types/flashcard";
import { makeInitialErrors } from "./makeInitialErrors";

export function checkErrors(flashCard: FlashCardInfos): FlashCardErrors {
  const errors = makeInitialErrors();

  if (!flashCard.question) errors.question = `Question is required`;
  if (flashCard.question.length < 8)
    errors.question = "The question must be at least 8 characters long";

  if (flashCard.question.length > 500)
    errors.question = "The question must be less than 500 characters.";

  if (!flashCard.response) errors.response = `Response is required`;
  if (flashCard.response.length < 8)
    errors.response = "The response must be at least 8 characters long";

  if (flashCard.response.length > 500)
    errors.response = "The response must be less than 500 characters.";

  return errors;
}
