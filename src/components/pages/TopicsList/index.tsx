// External Libraries
import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

// Components
import { Journey } from "./components/Journey";
import { EmptyMessage } from "./components/EmptyMessage";
import { Typography } from "@components/tookit/Typography";
import { ManageTopicModal } from "./modals/ManageTopicModal";
import { Navigation } from "@components/structure/Navigation";
import { ConfirmRemoveModal } from "./modals/ConfirmRemoveModal";

// Hooks
import { useTopicsList } from "./hooks/useTopicsList";

// Styles
import {
  Card,
  Container,
  EmptyState,
  PageContent,
  TopicsWrapper,
  TitleContainer,
  ButtonContainer,
} from "./styles";

// MOCK

import { ActionTypes, NodeTopic } from "./types";
import { ACTIONS } from "./constants";
import { Button } from "@components/tookit/buttons/Button";

export const TopicsList: React.FC = () => {
  // Hooks
  const {
    nodes,
    topics,
    mutate,
    modalRef,
    removeModalRef,
    openModal,
    handleClickAction,
    completJourneyPatch,
    handleClickNode,
  } = useTopicsList();

  const hasTopics = !!topics?.length;

  return (
    <Container>
      <Navigation />

      <PageContent>
        <TitleContainer>
          <FaFolderOpen />

          <Typography $variant="p" fontWeight="bold">
            Your Topics
          </Typography>
        </TitleContainer>

        <Card $hasTopics={hasTopics}>
          <AnimatePresence>
            {hasTopics ? (
              <TopicsWrapper
                key="topics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Journey<NodeTopic, ActionTypes>
                  nodes={nodes}
                  actions={ACTIONS}
                  journeyIsCompleted={false}
                  onClickNode={handleClickNode}
                  onClickAction={handleClickAction}
                  onClickCreateNode={() => openModal()}
                />
                <ButtonContainer>
                  <Button
                    label="Complet this journey"
                    onClick={completJourneyPatch}
                  />
                </ButtonContainer>
              </TopicsWrapper>
            ) : (
              <EmptyState
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <EmptyMessage onAddNewTopic={() => openModal()} />
              </EmptyState>
            )}
          </AnimatePresence>
        </Card>
      </PageContent>

      <ManageTopicModal ref={modalRef} refresh={mutate} />
      <ConfirmRemoveModal ref={removeModalRef} refresh={mutate} />
    </Container>
  );
};
