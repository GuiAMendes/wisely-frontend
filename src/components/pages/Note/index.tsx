// External Libraries
import React from "react";

// Components

// Hooks
import { useNote } from "./hooks/useNote";

// Styles
import { Container, PageContent } from "./styles";
import { Navigation } from "@components/structure/Navigation";
import { TextEditor } from "./components/TextEditor";

export const Note: React.FC = () => {
  // Hooks
  const {} = useNote({});

  return (
    <Container>
      <Navigation />

      <PageContent>
        <TextEditor />
      </PageContent>
    </Container>
  );
};
