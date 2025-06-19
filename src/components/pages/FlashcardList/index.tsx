// External Libraries
import React, { useRef } from "react";

// Components
import { Navigation } from "@components/structure/Navigation";

import { Typography } from "@components/tookit/Typography";
import { CreateJourney } from "@components/structure/CreateJourney";
import { ManageFlashcardModal } from "./modals/ManageFlashcardModal";

// Hooks
import { useFlashCard } from "./hooks/useFlashCardList";

// Styles
import { Container, PageContent, TextContainer, Wrapper } from "./styles";

// Types
import type { ManageFlashcardModalMethods } from "./modals/ManageFlashcardModal/types";
import { Flashcard } from "@services/flashcard";
import { FlashcardList } from "./sections/JourneyList";

export const FlashCardList: React.FC = () => {
  // Refs
  const modalRef = useRef<ManageFlashcardModalMethods>(null);

  const { flashCardList, mutate } = useFlashCard();

  function openModal(flashcard?: Flashcard) {
    modalRef.current?.open(flashcard);
  }

  return (
    <Container>
      <Navigation />

      <PageContent>
        <Wrapper>
          <TextContainer>
            <img src="/plus-circle.svg" />
            <Typography $variant="p" fontWeight="bold">
              Create new flashcard
            </Typography>
          </TextContainer>

          <CreateJourney onClick={() => openModal()} />
        </Wrapper>

        <Wrapper>
          <TextContainer>
            <Typography $variant="p" fontWeight="bold">
              All flashcards
            </Typography>
          </TextContainer>

          <FlashcardList
            refresh={mutate}
            flashCards={flashCardList ?? []}
            openManage={openModal}
          />
        </Wrapper>
      </PageContent>

      <ManageFlashcardModal ref={modalRef} refresh={mutate} />
    </Container>
  );
};
