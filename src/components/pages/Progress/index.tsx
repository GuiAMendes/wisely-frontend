// External Libraries
import React from "react";

// Components

// Hooks
import { useProgress } from "./hooks/useProgress";

// Styles
import { Container } from "./styles";

export const Progress: React.FC = () => {
  // Hooks
  const {} = useProgress();

  return <Container>{/* Code */}</Container>;
};
