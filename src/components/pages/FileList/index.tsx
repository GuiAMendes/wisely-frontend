// External Libraries
import React from "react";

// Components

// Hooks
import { useFileList } from "./hooks/useFileList";

// Styles
import { Container, ListContainer, PageContent, Wrapper } from "./styles";
import { Navigation } from "@components/structure/Navigation";
import { File } from "@services/file";
import { FaTrash } from "react-icons/fa";
import { EmptyMessage } from "@components/structure/EmptyMessage";
import { JourneyFile } from "@components/structure/JourneyFile";
import { Typography } from "@components/tookit/Typography";

import { FileInput } from "@components/tookit/FileInput";

export const FileList: React.FC = () => {
  // Hooks
  const {
    files,
    idTopic,
    handleRemoveFile,
    handleAddFile,
    downloadBase64File,
  } = useFileList();
  function getFolderActions(file: File) {
    return [
      {
        id: "delete",
        icon: <FaTrash />,
        label: "Remove",
        onClick: () => handleRemoveFile(file),
      },
    ];
  }

  function renderContent() {
    if (!files?.length)
      return <EmptyMessage variant={"all"} typeOfPageVariant="file" />;

    return files.map((file) => (
      <JourneyFile
        key={file.props.id}
        name={file.props.fileName}
        actionsOptions={getFolderActions(file)}
        onClick={() =>
          downloadBase64File(
            file.props.filePath.props.encoded,
            file.props.fileName,
            file.props.fileType
          )
        }
      />
    ));
  }

  return (
    <Container>
      <Navigation />
      <PageContent>
        <FileInput idTopic={idTopic} onUpload={handleAddFile} />

        <Wrapper>
          <Typography $variant="p" fontWeight="bold">
            All files
          </Typography>
          <ListContainer>{renderContent()}</ListContainer>
        </Wrapper>
      </PageContent>
    </Container>
  );
};
