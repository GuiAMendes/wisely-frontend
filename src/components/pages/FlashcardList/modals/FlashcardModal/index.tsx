import React, { useImperativeHandle } from "react";
import { FaBrain } from "react-icons/fa";

// Hooks
import { useFlashcard } from "./hooks/useFlashcard";

// Types
import { FlashcardModalProps, FlashcardModalMethods } from "./types";

// Styles
import { Container, CardContent, Wrapper } from "./styles";
import { Modal } from "@components/tookit/Modal";
import { Typography } from "@components/tookit/Typography";
import { Button } from "@components/tookit/buttons/Button";
import { launchPinkConfetti } from "@utils/confetti";

export const FlashcardModal = React.forwardRef<
  FlashcardModalMethods,
  FlashcardModalProps
>((props, ref) => {
  const {
    flashcardInfos,
    showAnswer,
    visible,
    handleClose,
    toggleView,
    handleRefMethods,
  } = useFlashcard(props);

  useImperativeHandle(ref, handleRefMethods);

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      title="View the flashcard"
      icon={<FaBrain size={20} />}
    >
      <Container>
        <CardContent>
          <strong>{showAnswer ? "Answer" : "Question"}</strong>
          <Typography $variant="p">
            {showAnswer ? flashcardInfos?.response : flashcardInfos?.question}
          </Typography>
        </CardContent>

        {showAnswer ? (
          <Wrapper>
            <Button
              label="I got it right"
              onClick={() => {
                launchPinkConfetti();
                handleClose();
              }}
            />

            <Button label="View Question" onClick={toggleView} />
          </Wrapper>
        ) : (
          <Button label="View Response" onClick={toggleView} />
        )}
      </Container>
    </Modal>
  );
});

FlashcardModal.displayName = "FlashcardModal";
