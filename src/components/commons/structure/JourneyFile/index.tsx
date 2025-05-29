// JourneyFolder.tsx
import React from "react";
import { Typography } from "@components/tookit/Typography";
import { Container, Content } from "./styles";

interface JourneyFolderProps {
  name: string;
  onClick: () => void;
}

export const JourneyFile: React.FC<JourneyFolderProps> = ({
  name,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <Content>
        <Typography as="p" $variant="p" fontWeight="bold">
          {name}
        </Typography>
      </Content>
    </Container>
  );
};
