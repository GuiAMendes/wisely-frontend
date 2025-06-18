// External Libraries
import React from "react";
import { GoPlus } from "react-icons/go";

// Components

// Styles
import { Container } from "./styles";

interface Props {
  onClick: () => void;
}

export const CreateNodeButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <GoPlus size="4rem" />
    </Container>
  );
};
