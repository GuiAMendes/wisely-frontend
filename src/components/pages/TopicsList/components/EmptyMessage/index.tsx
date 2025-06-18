// External Libraries
import React from "react";
import Image from "next/image";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import { Container, YarnBallContainer } from "./styles";

interface Props {
  onAddNewTopic: () => void;
}

export const EmptyMessage: React.FC<Props> = ({ onAddNewTopic }) => {
  return (
    <Container>
      <Typography $variant="h3" fontWeight="bold">
        {"You don't have any topics yet"}
      </Typography>

      <Typography $variant="h5">Start by creating one</Typography>

      <YarnBallContainer onClick={onAddNewTopic}>
        <div className="image-wrapper">
          <Image
            src="/images/yarn-ball.png"
            alt="yarn ball"
            fill
            style={{ objectFit: "contain", pointerEvents: "none" }}
          />
        </div>
      </YarnBallContainer>
    </Container>
  );
};
