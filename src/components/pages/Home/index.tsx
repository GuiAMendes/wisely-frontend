// External Libraries
import React from "react";

// Components
import { Navigation } from "@components/structure/Navigation";

// Hooks
import { useHome } from "./hooks/useHome";

// Styles
import { Container } from "./styles";

export const Home: React.FC = () => {
  // Hooks
  const {} = useHome({});

  return (
    <Container>
      <Navigation />
    </Container>
  );
};
