// External Libraries
import React from "react";

// Components
import { Folder } from "./components/Folder";

// Hooks
import { useHome } from "./hooks/useHome";

// Styles
import { Container } from "./styles";

export const Home: React.FC = () => {
  // Hooks
  const {} = useHome({});

  return (
    <Container>
      <Folder
        name={"tezste"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></Folder>
    </Container>
  );
};
