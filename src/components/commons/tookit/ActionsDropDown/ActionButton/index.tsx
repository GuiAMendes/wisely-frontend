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
  return (
    <Container onClick={action.onClick}>
      {action.icon}
      <Typography $variant="p">{action.label}</Typography>
    </Container>
  );
};
