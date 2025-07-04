import React, { useMemo } from "react";
import Image from "next/image";

// Components
import { DonutChart } from "@components/tookit/charts/DonutChart";
import { Navigation } from "@components/structure/Navigation";

// Hooks
import { useProgress } from "./hooks/useProgress";

// Styles
import {
  BarCard,
  Card,
  CardImage,
  Column,
  Container,
  Firula,
  PageContent,
  Wrapper,
} from "./styles";
import { Typography } from "@components/tookit/Typography";
import { BarChart } from "@components/tookit/charts/BarChart";

export const Progress: React.FC = () => {
  const { statistics, isLoading } = useProgress();

  const journeySeries = useMemo(() => {
    if (
      !statistics ||
      typeof statistics.completedJourneys !== "number" ||
      typeof statistics.totalJourneys !== "number" ||
      statistics.totalJourneys <= 0
    ) {
      return [];
    }

    return [
      statistics.completedJourneys,
      statistics.totalJourneys - statistics.completedJourneys,
    ];
  }, [statistics]);

  const topicSeries = useMemo(() => {
    if (
      !statistics ||
      typeof statistics.completedTopics !== "number" ||
      typeof statistics.totalTopics !== "number" ||
      statistics.totalTopics <= 0
    ) {
      return [];
    }

    return [
      statistics.completedTopics,
      statistics.totalTopics - statistics.completedTopics,
    ];
  }, [statistics]);

  const journeyCategories = useMemo(() => ["Completas", "Incompletas"], []);
  const topicCategories = useMemo(() => ["Completos", "Incompletos"], []);

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

        <Column>
          <Wrapper>
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
          </Wrapper>

          <BarCard>
            <Typography $variant="p" fontWeight="bold">
              Progresso por Jornada
            </Typography>

            <BarChart
              isLoading={isLoading}
              categories={
                statistics?.journeysProgress.map((j) => j.journeyName) ?? []
              }
              series={[
                {
                  name: "Completos",
                  data:
                    statistics?.journeysProgress.map((j) => ({
                      x: j.journeyName,
                      y: j.completedTopics,
                    })) ?? [],
                },
                {
                  name: "Incompletos",
                  data:
                    statistics?.journeysProgress.map((j) => ({
                      x: j.journeyName,
                      y: j.totalTopics - j.completedTopics,
                    })) ?? [],
                },
              ]}
            />
          </BarCard>
        </Column>
      </PageContent>
    </Container>
  );
};
