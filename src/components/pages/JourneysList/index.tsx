// External Libraries
import React, { useRef } from "react";

// Components
import { Navigation } from "@components/structure/Navigation";
import { JourneyList } from "./sections/JourneyList";
import { Typography } from "@components/tookit/Typography";
import { CreateJourney } from "@components/structure/CreateJourney";
import { ManageJourneyModal } from "./modals/ManageJourneyModal";

// Hooks
import { useJourneys } from "./hooks/useJourneys";
import { useRecentJourneys } from "./hooks/useRecentJourneys";

// Styles
import { Container, PageContent, TextContainer, Wrapper } from "./styles";

// Types
import type { ManageJourneyModalMethods } from "./modals/ManageJourneyModal/types";

export const JourneysList: React.FC = () => {
  // Refs
  const modalRef = useRef<ManageJourneyModalMethods>(null);

  const { journeys, mutate } = useJourneys();
  const { recentJourneysAccessed } = useRecentJourneys();

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
            journeys={recentJourneysAccessed}
            variant="recent-access"
          />
        </Wrapper>

        <Wrapper>
          <TextContainer>
            <Typography $variant="p" fontWeight="bold">
              All journeys
            </Typography>
          </TextContainer>

          <JourneyList journeys={journeys} variant="all" />
        </Wrapper>
      </PageContent>

      <ManageJourneyModal ref={modalRef} refresh={mutate} />
    </Container>
  );
};
