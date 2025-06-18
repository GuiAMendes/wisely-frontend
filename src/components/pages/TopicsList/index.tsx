// External Libraries
import React, { useRef } from "react";

// Components
import { Typography } from "@components/tookit/Typography";
import { Navigation } from "@components/structure/Navigation";

// Hooks
import { useTopicsList } from "./hooks/useTopicsList";

// Styles
import {
  Card,
  Container,
  PageContent,
  TitleContainer,
  TopicsWrapper,
  EmptyState,
} from "./styles";
import { FaFolderOpen } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { EmptyMessage } from "./components/EmptyMessage";
import { Topic } from "@services/topic";
import { ManageTopicModalMethods } from "./modals/ManageTopicModal/types";
import { ManageTopicModal } from "./modals/ManageTopicModal";

export const TopicsList: React.FC = () => {
  // Refs
  const modalRef = useRef<ManageTopicModalMethods>(null);
  // Hooks
  const { topics, mutate } = useTopicsList({});

  const hasTopics = !!topics?.length;

  function openModal(topic?: Topic) {
    modalRef.current?.open(topic);
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
            {hasTopics ? (
              <TopicsWrapper
                key="topics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <ul>
                  {topics.map((topic, index) => (
                    <li key={index}>{topic.props.topicName}</li>
                  ))}
                </ul>
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
    </Container>
  );
};
