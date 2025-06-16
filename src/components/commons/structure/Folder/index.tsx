import React from "react";
import { Typography } from "@components/tookit/Typography";

import { Container, Tab, Content, MoreButton } from "./styles";
import { ActionOption } from "@components/tookit/ActionsDropDown/types";
import { useFolder } from "./hooks/useFolder";
import { ActionsDropDown } from "@components/tookit/ActionsDropDown";

interface FolderProps {
  name: string;
  onClick: () => void;
  actionsOptions: ActionOption[];
}

export const Folder: React.FC<FolderProps> = ({
  name,
  onClick,
  actionsOptions,
}) => {
  const { isOpen, toggle, ref } = useFolder<HTMLDivElement>();

  return (
    <Container onClick={onClick}>
      <Tab>
        <Typography as="p" $variant="p" fontWeight="bold">
          {name}
        </Typography>
      </Tab>

      <MoreButton
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
      >
        &#x22EE;
      </MoreButton>

      {isOpen && (
        <div ref={ref}>
          <ActionsDropDown actions={actionsOptions} />
        </div>
      )}

      <Content />
    </Container>
  );
};
