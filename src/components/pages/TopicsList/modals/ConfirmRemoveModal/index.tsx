// External Libraries
import React, { useImperativeHandle } from "react";
import { FaTrashAlt } from "react-icons/fa";

// Components
import { Modal } from "@components/tookit/Modal";

// Hooks
import { useConfirmRemove } from "./hooks/useConfirmRemove";

// Types
import { ConfirmRemoveModalProps, ConfirmRemoveModalMethods } from "./types";

// Styles
import { ButtonContainer, Container } from "./styles";
import { Typography } from "@components/tookit/Typography";
import { Button } from "@components/tookit/buttons/Button";

export const ConfirmRemoveModal = React.forwardRef<
  ConfirmRemoveModalMethods,
  ConfirmRemoveModalProps
>((props, ref) => {
  // Hooks
  const {
    topicInfos,
    visible,
    handleClose,
    handleRefMethods,
    handleRemoveInfo,
    cancelAction,
  } = useConfirmRemove(props);
  useImperativeHandle(ref, handleRefMethods);

  function handleSubmit(event?: React.FormEvent) {
    event?.preventDefault();
    cancelAction();
  }

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      title={`Remove topic ${topicInfos.name}`}
      icon={<FaTrashAlt size={24} />}
    >
      <Container onSubmit={(e) => handleSubmit(e)}>
        <Typography
          $variant="h5"
          fontWeight="bold"
        >{`Are you sure you want to remove the topic ${topicInfos?.name}?`}</Typography>
        <Typography $variant="p" color="#c1121f">
          *This action is harmful to the system, do you want to continue
          removing this directory and its aggregates?
        </Typography>

        <ButtonContainer>
          <Button label="Cancel" type="submit" />
          <Button label="Remove" onClick={handleRemoveInfo} />
        </ButtonContainer>
      </Container>
    </Modal>
  );
});

ConfirmRemoveModal.displayName = "ConfirmRemoveModal";
