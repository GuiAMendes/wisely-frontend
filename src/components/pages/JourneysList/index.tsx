// External Libraries
import React, { useRef } from "react";

// Components
import { Navigation } from "@components/structure/Navigation";
import { JourneyList } from "./sections/JourneyList";

// Styles
import { Container, PageContent, TextContainer, Wrapper } from "./styles";
import { useDirectories } from "./hooks/useDirectories";
import { useRecentDirectories } from "./hooks/useRecentDirectories";
import { Typography } from "@components/tookit/Typography";
import { ManageJourneyModal } from "./modals/ManageJourneyModal";
import { ManageJourneyModalMethods } from "./modals/ManageJourneyModal/types";
import { CreateJourney } from "@components/structure/CreateJourney";

export const JourneysList: React.FC = () => {
  // Refs
  const modalRef = useRef<ManageJourneyModalMethods>(null);

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
              Create new journey
            </Typography>
          </TextContainer>

          <CreateJourney onClick={() => modalRef.current?.open()} />
        </Wrapper>

        <Wrapper>
          <TextContainer>
            <img src="/clock.svg" />
            <Typography $variant="p" fontWeight="bold">
              Recent accesses
            </Typography>
          </TextContainer>

          <JourneyList
            directories={recentDirectoriesAccessed}
            variant="recent-access"
          />
        </Wrapper>

        <Wrapper>
          <TextContainer>
            <Typography $variant="p" fontWeight="bold">
              All journeys
            </Typography>
          </TextContainer>

          <JourneyList directories={directories} variant="all" />
        </Wrapper>
      </PageContent>

      <ManageJourneyModal ref={modalRef} refresh={mutate} />
    </Container>
  );
};
