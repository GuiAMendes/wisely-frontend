// External Libraries
import React from "react";
import { useRouter } from "next/router";

// Components
import { Directory } from "@services/directories/types";
import { Folder } from "@components/structure/Folder";

// Styles
import { Container } from "./styles";
import { EmptyMessage } from "@components/structure/EmptyMessage";
import { updatedLastAccess } from "@services/directories/directory.id.updatLastAccess.patch";
import { getFolderActions } from "./utils";

interface Props {
  isLoading?: boolean;
  variant: "recent-access" | "all";
  directories?: Directory[];
}

export const DirectoriesList: React.FC<Props> = ({ variant, directories }) => {
  // Hooks
  const { push } = useRouter();

  // Functions
  async function handleFolderClick(directoryId: string) {
    await updatedLastAccess({ directoryId });
    push(`/directories/${directoryId}/journeys`);
  }

  function renderContent() {
    if (!directories?.length)
      return <EmptyMessage variant={variant} typeOfPageVariant="directory" />;

    return directories.map((directory) => (
      <Folder
        key={directory.props.id}
        actionsOptions={getFolderActions()}
        name={directory.props.directoryName}
        onClick={() => handleFolderClick(directory.props.id)}
      />
    ));
  }

  return <Container>{renderContent()}</Container>;
};
