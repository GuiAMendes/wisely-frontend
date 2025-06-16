// External Libraries
import React from "react";

// Components
import { Typography } from "@components/tookit/Typography";

// Types
import { ActionOption } from "../types";

// Styles
import { Container } from "./styles";

interface Props {
  action: ActionOption;
}

export const ActionButton: React.FC<Props> = ({ action }) => {
  // Functionns
  function handleFolderClick(e: React.MouseEvent) {
    e.stopPropagation();
    action.onClick();
  }

  return (
    <Container onClick={handleFolderClick}>
      {action.icon}
      <Typography $variant="p">{action.label}</Typography>
    </Container>
  );
};
