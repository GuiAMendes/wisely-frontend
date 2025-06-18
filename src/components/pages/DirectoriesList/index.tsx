/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// External Libraries
import React, { useRef } from "react";

// Components
import { Navigation } from "@components/structure/Navigation";
import { DirectoryItems } from "./sections/DirectoriesItems";

// Styles
import { Container, PageContent, TextContainer, Wrapper } from "./styles";
import { useDirectories } from "./hooks/useDirectories";
import { useRecentDirectories } from "./hooks/useRecentDirectories";
import { Typography } from "@components/tookit/Typography";
import { ManageDirectoryModal } from "./modals/ManageDirectoryModal";
import { ManageDirectoryModalMethods } from "./modals/ManageDirectoryModal/types";
import { CreateFolder } from "@components/structure/CreateFolder";
import { Directory } from "@services/directories";

export const DirectoriesList: React.FC = () => {
  // Refs
  const modalRef = useRef<ManageDirectoryModalMethods>(null);

  // Hooks
  const { directories, mutate } = useDirectories();
  const { recentDirectoriesAccessed, refreshRecentAccess } =
    useRecentDirectories();

  // Functions
  function handleManegeDirectoryModal(directory?: Directory) {
    modalRef.current?.open(directory);
  }

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

          <CreateFolder onClick={() => handleManegeDirectoryModal()} />
        </Wrapper>

        <Wrapper>
          <TextContainer>
            <img src="/clock.svg" />
            <Typography $variant="p" fontWeight="bold">
              Recent accesses
            </Typography>
          </TextContainer>

          <DirectoryItems
            variant="recent-access"
            refresh={mutate}
            refreshRecentsAccess={refreshRecentAccess}
            directories={recentDirectoriesAccessed}
            openManageDirectory={handleManegeDirectoryModal}
          />
        </Wrapper>

        <Wrapper>
          <TextContainer>
            <Typography $variant="p" fontWeight="bold">
              All directories
            </Typography>
          </TextContainer>

          <DirectoryItems
            variant="all"
            directories={directories}
            refresh={mutate}
            refreshRecentsAccess={refreshRecentAccess}
            openManageDirectory={handleManegeDirectoryModal}
          />
        </Wrapper>
      </PageContent>

      <ManageDirectoryModal
        ref={modalRef}
        refresh={mutate}
        refreshRecentsAccess={refreshRecentAccess}
      />
    </Container>
  );
};
