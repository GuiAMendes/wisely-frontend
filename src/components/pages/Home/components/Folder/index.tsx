// External Libraries
import React from "react";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import { Container, Tab, Content } from "./styles";

interface FolderProps {
  name: string;
  onClick: () => void;
}

export const Folder: React.FC<FolderProps> = ({ name, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Tab>
        <Typography as="p" $variant="p" fontWeight="bold">
          {name}
        </Typography>
      </Tab>

      <Content />
    </Container>
  );
};
