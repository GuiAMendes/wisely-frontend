// External Libraries
import React from "react";
import { useRouter } from "next/router";

// Components
import { Directory } from "@services/directories/types";

// Styles
import { Container } from "./styles";
import { EmptyMessage } from "@components/structure/EmptyMessage";
import { JourneyFile } from "@components/structure/JourneyFile";

interface Props {
  isLoading?: boolean;
  variant: "recent-access" | "all";
  directories?: Directory[];
}

export const JourneyList: React.FC<Props> = ({ variant, directories }) => {
  // Hooks
  const { push } = useRouter();

  // Functions
  function renderContent() {
    if (!directories?.length) return <EmptyMessage variant={variant} />;

    return directories.map((directory) => (
      <JourneyFile
        key={directory.props.id}
        name={directory.props.directoryName}
        onClick={() => push(`/directories/${directory.props.id}/journeys`)}
      />
    ));
  }

  return <Container>{renderContent()}</Container>;
};
