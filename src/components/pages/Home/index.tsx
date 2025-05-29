// External Libraries
import React, { useRef } from "react";

// Components
import { Navigation } from "@components/structure/Navigation";
import { DirectoriesList } from "./sections/DirectoriesList";

// Styles
import { Container, PageContent, TextContainer, Wrapper } from "./styles";
import { useDirectories } from "./hooks/useDirectories";
import { useRecentDirectories } from "./hooks/useRecentDirectories";
import { Typography } from "@components/tookit/Typography";
import { CreateFolder } from "./components/CreateFolder";
import { ManageDirectoryModal } from "./modals/ManageDirectoryModal";
import { ManageDirectoryModalMethods } from "./modals/ManageDirectoryModal/types";

export const Home: React.FC = () => {
  // Refs
  const modalRef = useRef<ManageDirectoryModalMethods>(null);

  const { directories, mutate } = useDirectories();
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

          <CreateFolder onClick={() => modalRef.current?.open()} />
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

      <ManageDirectoryModal ref={modalRef} refresh={mutate} />
    </Container>
  );
};
