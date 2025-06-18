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
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDirectoriesList } from "./hooks/useDirectoriesList";

interface Props {
  isLoading?: boolean;
  variant: "recent-access" | "all";
  directories?: Directory[];
  refresh: () => void;
  refreshRecentsAccess: () => void;
  openManageDirectory: (directory?: Directory) => void;
}

export const DirectoryItems: React.FC<Props> = ({
  variant,
  directories,
  refresh,
  refreshRecentsAccess,
  openManageDirectory,
}) => {
  // Hooks
  const { push } = useRouter();

  const { handleRemoveDirectory } = useDirectoriesList({
    refresh,
    refreshRecentsAccess,
  });

  // Functions
  async function handleFolderClick(directoryId: string) {
    await updatedLastAccess({ directoryId });
    push(`/directories/${directoryId}/journeys`);
  }

  function getFolderActions(directory: Directory) {
    return [
      {
        id: "edit",
        icon: <FaEdit />,
        label: "Renomear",
        onClick: () => {
          openManageDirectory(directory);
        },
      },
      {
        id: "delete",
        icon: <FaTrash />,
        label: "Excluir",
        onClick: () => handleRemoveDirectory(directory),
      },
    ];
  }

  function renderContent() {
    if (!directories?.length)
      return <EmptyMessage variant={variant} typeOfPageVariant="directory" />;

    return directories.map((directory) => (
      <Folder
        key={directory.props.id}
        actionsOptions={getFolderActions(directory)}
        name={directory.props.directoryName}
        onClick={() => handleFolderClick(directory.props.id)}
      />
    ));
  }

  return <Container>{renderContent()}</Container>;
};
