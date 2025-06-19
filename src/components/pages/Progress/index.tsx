// External Libraries
import React from "react";

// Components

// Hooks
import { useProgress } from "./hooks/useProgress";

// Styles
import {
  Card,
  CardImage,
  Column,
  Container,
  Firula,
  PageContent,
} from "./styles";
import { Navigation } from "@components/structure/Navigation";
import Image from "next/image";

export const Progress: React.FC = () => {
  // Hooks
  const {} = useProgress();

  return (
    <Container>
      <Navigation />
      <PageContent>
        <></>

        <Firula>
          <Column>
            <CardImage>
              <Image
                src="/images/progress.png"
                alt="progress"
                fill
                style={{ objectFit: "contain", pointerEvents: "none" }}
              />
            </CardImage>

            <Card />
          </Column>

          <Card />
        </Firula>
      </PageContent>
    </Container>
  );
};
