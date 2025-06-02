// External Libraries
import React from "react";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import { Container } from "./styles";

interface Props {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ label, type, onClick }) => {
  return (
    <Container onClick={onClick} type={type}>
      <Typography fontWeight="bold" $variant="p">
        {label}
      </Typography>
    </Container>
  );
};
