export type JourneyProgressSummary = {
  journeyName: string;
  completedTopics: number;
  totalTopics: number;
  completionPercentage: number;
};

export type ResumeStatistics = {
  totalJourneys: number;
  completedJourneys: number;
  totalTopics: number;
  completedTopics: number;
  completionPercentage: number;
  journeysProgress: JourneyProgressSummary[];
};
