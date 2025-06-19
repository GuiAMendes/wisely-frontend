// External Libraries
import { useState } from "react";

// Types
import { UseFlashcardParams } from "./types";
import { Flashcard } from "@services/flashcard";

export function useFlashcard({}: UseFlashcardParams) {
  // Contants
  const initial = { question: "", response: "" };
  // States
  const [visible, setVisible] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [flashcardInfos, setFlascardInfos] = useState<{
    question: string;
    response: string;
  }>(initial);
  // Functions

  const toggleView = () => setShowAnswer((prev) => !prev);
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose };
  }

  function handleOpen(flashCard: Flashcard) {
    setFlascardInfos({
      question: flashCard.props.question.props.value,
      response: flashCard.props.response.props.value,
    });
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
    setShowAnswer(false);
    setFlascardInfos(initial);
  }

  return {
    flashcardInfos,
    showAnswer,
    visible,
    toggleView,
    handleClose,
    handleRefMethods,
  };
}
