// External Libraries
import React, { useImperativeHandle } from "react";
import { FaRegStickyNote } from "react-icons/fa";

// Components
import { Modal } from "@components/tookit/Modal";
import { Button } from "@components/tookit/buttons/Button";

// Hooks
import { useManageFlashcard } from "./hooks/useManageDirectory";

// Types
import type {
  ManageFlashcardModalProps,
  ManageFlashcardModalMethods,
} from "./types";

// Styles
import { Container, GridContainer } from "./styles";
import { TextArea } from "@components/tookit/TextArea";

export const ManageFlashcardModal = React.forwardRef<
  ManageFlashcardModalMethods,
  ManageFlashcardModalProps
>((props, ref) => {
  // Hooks
  const {
    errors,
    flashCardInfos,
    isEditing,
    visible,
    handleClose,
    handleRefMethods,
    handleFlashcardChanges,
    handleManageFlashCard,
  } = useManageFlashcard(props);
  useImperativeHandle(ref, handleRefMethods);

  function handleSubmit(event?: React.FormEvent) {
    event?.preventDefault();
    handleManageFlashCard();
  }

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      title={isEditing ? "Edit Flashcard" : "Create new Flashcard"}
      icon={<FaRegStickyNote size={24} />}
    >
      <Container onSubmit={handleSubmit}>
        <GridContainer>
          <TextArea
            label="Question"
            errors={errors.question}
            placeholder="Enter the new question to Flashcard"
            value={flashCardInfos.question}
            onChangeText={(v) => handleFlashcardChanges({ question: v })}
          />

          <TextArea
            label="Response"
            errors={errors.response}
            placeholder="Enter the new response to Flashcard"
            value={flashCardInfos.response}
            onChangeText={(v) => handleFlashcardChanges({ response: v })}
          />
        </GridContainer>

        <Button
          label={isEditing ? "Edit Flashcard" : "Create Flashcard"}
          type="submit"
        />
      </Container>
    </Modal>
  );
});

ManageFlashcardModal.displayName = "ManageJourneyModal";
