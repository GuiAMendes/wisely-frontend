// External Libraries
import React from "react";

// Components
import { Navigation } from "@components/structure/Navigation";
import { DirectoriesList } from "./sections/DirectoriesList";

// Styles
import { Container, PageContent } from "./styles";
import { useDirectories } from "./hooks/useDirectories";
import { useRecentDirectories } from "./hooks/useRecentDirectories";

export const Home: React.FC = () => {
  const { directories } = useDirectories();
  const { recentDirectoriesAccessed } = useRecentDirectories();

  if (directories && recentDirectoriesAccessed)
    console.log(
      `diretórios: ${directories}\nacessados recentemente: ${recentDirectoriesAccessed}`
    );

  return (
    <Container>
      <Navigation />

      <PageContent>
        <DirectoriesList />
      </PageContent>
    </Container>
  );
};
