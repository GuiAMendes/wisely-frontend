// JourneyFolder.tsx
import React from "react";
import { Container, Content } from "./styles";
import Image from "next/image";

interface Props {
  onClick: () => void;
}

export const CreateJourney: React.FC<Props> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Content>
        <Image src="/layout-timeline.svg" alt="Folder" width={40} height={40} />
      </Content>
    </Container>
  );
};
