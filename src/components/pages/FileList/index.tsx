// External Libraries
import React from "react";

// Components

// Hooks
import { useFileList } from "./hooks/useFileList";

// Styles
import {
  ButtonContainer,
  Container,
  ListContainer,
  PageContent,
  Wrapper,
} from "./styles";
import { Navigation } from "@components/structure/Navigation";
import { File } from "@services/file";
import { FaTrash } from "react-icons/fa";
import { EmptyMessage } from "@components/structure/EmptyMessage";
import { JourneyFile } from "@components/structure/JourneyFile";
import { Typography } from "@components/tookit/Typography";
import { Button } from "@components/tookit/buttons/Button";

export const FileList: React.FC = () => {
  // Hooks
  const { files, handleRemoveFile } = useFileList({});
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
        onClick={() => console.log()}
      />
    ));
  }

  return (
    <Container>
      <Navigation />
      <PageContent>
        <ButtonContainer>
          <Button label={"Add new file"} />
        </ButtonContainer>

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
