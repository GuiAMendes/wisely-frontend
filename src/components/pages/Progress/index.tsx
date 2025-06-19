import React from "react";
import Image from "next/image";

// Components
import { DonutChart } from "@components/tookit/charts/DonutChart";
import { Navigation } from "@components/structure/Navigation";

// Hooks
import { useProgress } from "./hooks/useProgress";

// Styles
import {
  Card,
  CardImage,
  Column,
  Container,
  Firula,
  PageContent,
} from "./styles";
import { Typography } from "@components/tookit/Typography";

export const Progress: React.FC = () => {
  const { statistics, isLoading } = useProgress();

  const hasJourneyData =
    !!statistics?.totalJourneys && statistics.totalJourneys > 0;
  const hasTopicData = !!statistics?.totalTopics && statistics.totalTopics > 0;

  const journeySeries = hasJourneyData
    ? [
        statistics.completedJourneys,
        statistics.totalJourneys - statistics.completedJourneys,
      ]
    : [];

  const topicSeries = hasTopicData
    ? [
        statistics.completedTopics,
        statistics.totalTopics - statistics.completedTopics,
      ]
    : [];

  const journeyCategories = ["Completas", "Incompletas"];
  const topicCategories = ["Completos", "Incompletos"];

  return (
    <Container>
      <Navigation />
      <PageContent>
        <></>

        <Firula>
          <Column>
            <CardImage>
              <Image
                src="/images/progress.png"
                alt="progress"
                fill
                style={{ objectFit: "contain", pointerEvents: "none" }}
              />
            </CardImage>
          </Column>
        </Firula>
        <Card>
          <Typography $variant="p" fontWeight="bold">
            Progresso das Jornadas
          </Typography>
          <DonutChart
            isLoading={isLoading}
            series={journeySeries}
            categories={journeyCategories}
          />
        </Card>

        <Card>
          <Typography $variant="p" fontWeight="bold">
            Progresso dos Tópicos
          </Typography>
          <DonutChart
            isLoading={isLoading}
            series={topicSeries}
            categories={topicCategories}
          />
        </Card>
      </PageContent>
    </Container>
  );
};
