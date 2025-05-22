// External Libraries
import React from "react";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import { Container } from "./styles";

interface Props {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Typography fontWeight="bold" $variant="p">
        {label}
      </Typography>
    </Container>
  );
};
