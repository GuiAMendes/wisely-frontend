// External Libraries
import React from "react";

// Components
import { EmptyMessage } from "@components/structure/EmptyMessage";
import { JourneyFile } from "@components/structure/JourneyFile";

// Styles
import { Container } from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useFlashcardList } from "./hooks/useDirectoriesList";
import { Flashcard } from "@services/flashcard";

// Types
interface Props {
  isLoading?: boolean;
  flashCards: Flashcard[];
  refresh: () => void;
  openManage: (flashcard?: Flashcard) => void;
}

export const FlashcardList: React.FC<Props> = ({
  flashCards,
  refresh,

  openManage,
}) => {
  // Hooks
  const { handleRemoveFlashcard } = useFlashcardList({
    refresh,
  });

  // Functions
  function getFolderActions(flashcard: Flashcard) {
    return [
      {
        id: "edit",
        icon: <FaEdit />,
        label: "Edit",
        onClick: () => {
          openManage(flashcard);
        },
      },
      {
        id: "delete",
        icon: <FaTrash />,
        label: "Remove",
        onClick: () => handleRemoveFlashcard(flashcard),
      },
    ];
  }
  function renderContent() {
    if (!flashCards?.length)
      return <EmptyMessage variant={"all"} typeOfPageVariant="flashcard" />;

    return flashCards.map((flashcard) => (
      <JourneyFile
        key={flashcard.props.id}
        name={flashcard.props.question.props.value}
        actionsOptions={getFolderActions(flashcard)}
        onClick={() => console.log()}
      />
    ));
  }

  return <Container>{renderContent()}</Container>;
};
