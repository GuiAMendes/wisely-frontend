// External Libraries
import { useState } from "react";
import { useRouter } from "next/router";

// Utils
import { checkErrors, makeInitialErrors, makeInitialInfos } from "./utils";

// Services

// Types
import { UseManageFlashcardParams } from "./types";
import { FlashCardInfos, FlashCardErrors } from "./types/flashcard";
import { buildFlashcardInfos } from "./utils/buildFlashCardInfos";
import {
  createFlashcard,
  Flashcard,
  updateQuestionFlashcard,
  updateResponseFlashcard,
} from "@services/flashcard";

export function useManageJourney({ refresh }: UseManageFlashcardParams) {
  // States
  const [visible, setVisible] = useState(false);
  const [flashCardInfos, setFlashCardInfos] =
    useState<FlashCardInfos>(makeInitialInfos);
  const [flashcardId, setFlashcardId] = useState<string>();
  const [errors, setErros] = useState<FlashCardErrors>(makeInitialErrors);

  // Hooks
  const { query } = useRouter();

  // Constants
  const idTopic = query["topic-id"] as string;

  // Functions
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose };
  }

  function handleFlashcardChanges(changes: Partial<FlashCardInfos>) {
    setErros(makeInitialErrors);
    setFlashCardInfos({ ...flashCardInfos, ...changes });
  }

  async function handleCreateJourney() {
    if (!idTopic) return;

    const errors = checkErrors(flashCardInfos);

    setErros(errors);
    if (Object.values(errors).some((e) => e)) return;

    try {
      if (flashcardId) {
        await updateQuestionFlashcard({
          idFlashcard: flashcardId,
          newQuestionContent: flashCardInfos.question,
        });

        await updateResponseFlashcard({
          idFlashcard: flashcardId,
          newResponseContent: flashCardInfos.response,
        });
      } else {
        await createFlashcard({
          idTopic,
          questionContent: flashCardInfos.question,
          responseContent: flashCardInfos.response,
        });
      }

      handleClose();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      refresh();
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpen(flashCard?: Flashcard) {
    if (flashCard) {
      setFlashcardId(flashCard.props.id);
      setFlashCardInfos(buildFlashcardInfos(flashCard));
    }
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
    setFlashcardId(undefined);
    setFlashCardInfos(makeInitialInfos);
  }

  return {
    errors,
    flashcardId,
    isEditing: !!flashcardId,
    visible,
    handleClose,
    flashCardInfos,
    handleRefMethods,
    handleFlashcardChanges,
    handleCreateJourney,
  };
}
