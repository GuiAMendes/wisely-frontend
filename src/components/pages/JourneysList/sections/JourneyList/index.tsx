// External Libraries
import React from "react";
import { useRouter } from "next/router";

// Components
import { Journey } from "@services/journey/types";
import { EmptyMessage } from "@components/structure/EmptyMessage";
import { JourneyFile } from "@components/structure/JourneyFile";

// Styles
import { Container } from "./styles";

// Types
interface Props {
  isLoading?: boolean;
  variant: "recent-access" | "all";
  journeys?: Journey[];
}

export const JourneyList: React.FC<Props> = ({ variant, journeys }) => {
  // Hooks
  const { push } = useRouter();

  // Functions
  function renderContent() {
    if (!journeys?.length)
      return <EmptyMessage variant={variant} typeOfPageVariant="journey" />;

    return journeys.map((journey) => (
      <JourneyFile
        key={journey.props.id}
        name={journey.props.journeyName}
        onClick={() => push(`/directory/${journey.props.id}/journey`)}
      />
    ));
  }

  return <Container>{renderContent()}</Container>;
};
