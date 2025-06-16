// External Libraries
import React from "react";

// Components
import { ActionButton } from "./ActionButton";

// Types
import { ActionOption } from "./types";

// Styles
import { Container } from "./styles";

interface Props {
  actions: ActionOption[];
}

export const ActionsDropDown: React.FC<Props> = ({ actions }) => {
  function renderOptions() {
    return actions.map((action) => (
      <ActionButton key={action.id} action={action} />
    ));
  }

  return <Container>{renderOptions()}</Container>;
};
