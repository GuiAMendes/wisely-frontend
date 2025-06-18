// External Libraries
import React, { useRef } from "react";
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

// Types
import type { Topic } from "@services/topic";
import type { ManageTopicModalMethods } from "./modals/ManageTopicModal/types";
import type { ConfirmRemoveModalMethods } from "./modals/ConfirmRemoveModal/types";

// Styles
import {
  Card,
  Container,
  EmptyState,
  PageContent,
  TopicsWrapper,
  TitleContainer,
} from "./styles";

// MOCK
import { ACTIONS_MOCK, ActionTypesMock, NodeDtoMock, NODES_MOCK } from "./mock";

export const TopicsList: React.FC = () => {
  // Refs
  const modalRef = useRef<ManageTopicModalMethods>(null);
  const removeModalRef = useRef<ConfirmRemoveModalMethods>(null);
  // Hooks
  const { topics, mutate } = useTopicsList();

  const hasTopics = !!topics?.length;

  function openModal(topic?: Topic) {
    modalRef.current?.open(topic);
  }

  // Functions
  function handleClickNode(node: NodeDtoMock) {
    console.log(`Node clicked: ${node.id} - ${node.label}`);
  }

  function handleClickAction(action: ActionTypesMock, node: NodeDtoMock) {
    switch (action) {
      case "conclude":
        return console.log(`Conclude action on node: ${node.label}`);
      case "edit":
        return console.log(`Edit action on node: ${node.label}`);
      case "delete":
        return console.log(`Delete action on node: ${node.label}`);
      case "teste":
        return console.log(`Test action on node: ${node.label}`);
    }
  }

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
            {!hasTopics ? (
              <TopicsWrapper
                key="topics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Journey<NodeDtoMock, ActionTypesMock>
                  nodes={NODES_MOCK}
                  actions={ACTIONS_MOCK}
                  onClickNode={handleClickNode}
                  onClickAction={handleClickAction}
                  onClickCreateNode={() =>
                    console.log("Open management node modal")
                  }
                />
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
