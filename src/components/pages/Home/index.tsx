// External Libraries
import React from "react";

// Components
import { Navigation } from "@components/structure/Navigation";
import { DirectoriesList } from "./sections/DirectoriesList";

// Styles
import { Container, PageContent, TextContainer, Wrapper } from "./styles";
import { useDirectories } from "./hooks/useDirectories";
import { useRecentDirectories } from "./hooks/useRecentDirectories";
import { Typography } from "@components/tookit/Typography";
import { CreateFolder } from "./components/CreateFolder";

export const Home: React.FC = () => {
  const { directories } = useDirectories();
  const { recentDirectoriesAccessed } = useRecentDirectories();

  return (
    <Container>
      <Navigation />

      <PageContent>
        <Wrapper>
          <TextContainer>
            <img src="/plus-circle.svg" />
            <Typography $variant="p" fontWeight="bold">
              Create new directory
            </Typography>
          </TextContainer>

          <CreateFolder onClick={() => console.log("opa")} />
        </Wrapper>

        <Wrapper>
          <TextContainer>
            <img src="/clock.svg" />
            <Typography $variant="p" fontWeight="bold">
              Recent accesses
            </Typography>
          </TextContainer>

          <DirectoriesList
            directories={recentDirectoriesAccessed}
            variant="recent-access"
          />
        </Wrapper>

        <Wrapper>
          <TextContainer>
            <Typography $variant="p" fontWeight="bold">
              All directories
            </Typography>
          </TextContainer>

          <DirectoriesList directories={directories} variant="all" />
        </Wrapper>
      </PageContent>
    </Container>
  );
};
