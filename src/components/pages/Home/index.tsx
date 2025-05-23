// External Libraries
import React from "react";

// Components
import { Navigation } from "@components/structure/Navigation";
import { DirectoriesList } from "./sections/DirectoriesList";

// Styles
import { Container, PageContent } from "./styles";
import { useDirectories } from "./hooks/useDirectories";

export const Home: React.FC = () => {
  const { directories } = useDirectories();

  console.log(directories);

  return (
    <Container>
      <Navigation />

      <PageContent>
        <DirectoriesList />
      </PageContent>
    </Container>
  );
};
