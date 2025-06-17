// External Libraries
import React from "react";

// Components
import { Typography } from "@components/tookit/Typography";
import { ActionsDropDown } from "@components/tookit/ActionsDropDown";

// Hooks
import { useFolder } from "./useFolder";

// Components
import { ActionOption } from "@components/tookit/ActionsDropDown/types";

// Styles
import { Container, Content, MoreButton, Wrapper } from "./styles";

interface JourneyFolderProps {
  name: string;
  actionsOptions: ActionOption[];
  onClick: () => void;
}

export const JourneyFile: React.FC<JourneyFolderProps> = ({
  name,
  actionsOptions,
  onClick,
}) => {
  const { isOpen, toggle, ref } = useFolder<HTMLDivElement>();
  return (
    <Container onClick={onClick}>
      <Content>
        <Typography as="p" $variant="p" fontWeight="bold">
          {name}
        </Typography>

        <MoreButton
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          &#x22EE;
        </MoreButton>

        {isOpen && (
          <Wrapper ref={ref}>
            <ActionsDropDown actions={actionsOptions} />
          </Wrapper>
        )}
      </Content>
    </Container>
  );
};
