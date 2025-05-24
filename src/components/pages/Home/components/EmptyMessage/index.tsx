// External Libraries
import React from "react";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import { Container } from "./styles";

interface Props {
  variant: "recent-access" | "all";
}

export const EmptyMessage: React.FC<Props> = ({ variant }) => {
  // Constants
  const message =
    variant === "recent-access"
      ? "No directory accessed recently."
      : "No directory found.";

  return (
    <Container>
      <Typography $variant="p">{message}</Typography>
    </Container>
  );
};
