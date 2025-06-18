// External Libraries
import React from "react";
import { useRouter } from "next/router";

// Components
import { Journey } from "@services/journey/types";
import { EmptyMessage } from "@components/structure/EmptyMessage";
import { JourneyFile } from "@components/structure/JourneyFile";

// Styles
import { Container } from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDirectoriesList } from "./hooks/useDirectoriesList";

// Types
interface Props {
  isLoading?: boolean;
  variant: "recent-access" | "all";
  journeys?: Journey[];
  refresh: () => void;
  refreshRecentsAccess: () => void;
  openManageJourney: (journey?: Journey) => void;
}

export const JourneyList: React.FC<Props> = ({
  variant,
  journeys,
  refresh,
  refreshRecentsAccess,
  openManageJourney,
}) => {
  // Hooks
  const { push, query } = useRouter();
  const { handleRemoveJourney } = useDirectoriesList({
    refresh,
    refreshRecentsAccess,
  });

  // Functions
  function getFolderActions(journey: Journey) {
    return [
      {
        id: "edit",
        icon: <FaEdit />,
        label: "Renomear",
        onClick: () => {
          openManageJourney(journey);
        },
      },
      {
        id: "delete",
        icon: <FaTrash />,
        label: "Excluir",
        onClick: () => handleRemoveJourney(journey),
      },
    ];
  }
  function renderContent() {
    if (!journeys?.length)
      return <EmptyMessage variant={variant} typeOfPageVariant="journey" />;

    return journeys.map((journey) => (
      <JourneyFile
        key={journey.props.id}
        name={journey.props.journeyName}
        actionsOptions={getFolderActions(journey)}
        onClick={() =>
          push(`/directories/${query.id}/journeys/${journey.props.id}/topics`)
        }
      />
    ));
  }

  return <Container>{renderContent()}</Container>;
};
