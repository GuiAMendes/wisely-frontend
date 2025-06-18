// External Libraries
import React from "react";

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

export const TopicsList: React.FC = () => {
  // Hooks
  const {} = useTopicsList({});
  const topics: string[] = [];
  const hasTopics = !!topics.length;

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
                    <li key={index}>{topic}</li>
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
                <EmptyMessage onAddNewTopic={console.log} />
              </EmptyState>
            )}
          </AnimatePresence>
        </Card>
      </PageContent>
    </Container>
  );
};
