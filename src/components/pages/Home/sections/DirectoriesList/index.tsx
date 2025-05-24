// External Libraries
import React from "react";
import { useRouter } from "next/router";

// Components
import { Directory } from "@services/directories/types";
import { Folder } from "@pages/Home/components/Folder";

// Styles
import { Container } from "./styles";
import { EmptyMessage } from "@pages/Home/components/EmptyMessage";

interface Props {
  isLoading?: boolean;
  variant: "recent-access" | "all";
  directories?: Directory[];
}

export const DirectoriesList: React.FC<Props> = ({ variant, directories }) => {
  // Hooks
  const { push } = useRouter();

  // Functions
  function renderContent() {
    if (!directories?.length) return <EmptyMessage variant={variant} />;

    return directories.map((directory) => (
      <Folder
        key={directory.props.id}
        name={directory.props.directoryName}
        onClick={() => push(`/directories/${directory.props.id}`)}
      />
    ));
  }

  return <Container>{renderContent()}</Container>;
};
