// Note.tsx
import React from "react";
import { useNote } from "./hooks/useNote";

import { Container, PageContent } from "./styles";
import { Navigation } from "@components/structure/Navigation";

import { TextEditor } from "./components/TextEditor";

export const Note: React.FC = () => {
  // Hooks

  const { summary, handleEditSummaryContent } = useNote();

  return (
    <Container>
      <Navigation />
      <PageContent>
        {summary ? (
          <TextEditor
            summary={summary}
            onSaveContent={handleEditSummaryContent}
          />
        ) : null}
      </PageContent>
    </Container>
  );
};
