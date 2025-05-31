// External Libraries
import React from "react";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import { Container } from "./styles";

// Types
type PageType = "directory" | "journey" | "topic" | "flashcard" | "file";

interface Props {
  variant: "recent-access" | "all";
  typeOfPageVariant: PageType;
}

export const EmptyMessage: React.FC<Props> = ({
  variant,
  typeOfPageVariant,
}) => {
  // Constants
  const message =
    variant === "recent-access"
      ? `No ${typeOfPageVariant} accessed recently.`
      : `No ${typeOfPageVariant} found.`;

  return (
    <Container>
      <Typography $variant="p">{message}</Typography>
    </Container>
  );
};
