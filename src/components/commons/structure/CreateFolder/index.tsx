// External Libraries
import React from "react";

// Styles
import { Container, Tab, Content } from "./styles";
import Image from "next/image";

interface FolderProps {
  onClick: () => void;
}

export const CreateFolder: React.FC<FolderProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Tab />

      <Content>
        <Image src="/folder.svg" alt="Folder" width={40} height={40} />
      </Content>
    </Container>
  );
};
