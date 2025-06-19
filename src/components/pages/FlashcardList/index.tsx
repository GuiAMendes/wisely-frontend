// External Libraries
import React from "react";

// Components

// Hooks
import { useFlashcardList } from "./hooks/useFlashcardList";

// Styles
import { Container } from "./styles";

export const FlashcardList: React.FC = (
  {
    /* Props */
  }
) => {
  // Hooks
  const {} = useFlashcardList({});

  return <Container>{/* Code */}</Container>;
};
