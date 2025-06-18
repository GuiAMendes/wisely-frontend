export interface TopicProps {
  id: string;
  idJourney: string;
  topicName: string;
  createdAt: string;
  updatedAt: string;
  completedAt: string;
  isActive: boolean;
  isConcluded: boolean;
}

export interface Topic {
  props: TopicProps;
}
