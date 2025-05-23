// External Libraries
import React from "react";

// Styles
import { Container, Tab, Content } from "./styles";

interface FolderProps {
  onClick: () => void;
}

export const CreateFolder: React.FC<FolderProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Tab />

      <Content>
        <img src="/folder.svg" />
      </Content>
    </Container>
  );
};
