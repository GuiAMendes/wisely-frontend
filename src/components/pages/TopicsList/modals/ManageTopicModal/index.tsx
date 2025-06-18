// External Libraries
import React, { useImperativeHandle } from "react";

// Components
import { Modal } from "@components/tookit/Modal";
import { Input } from "@components/tookit/Input";
import { Button } from "@components/tookit/buttons/Button";

// Hooks
import { useManageTopic } from "./hooks/useManageTopic";

// Types
import { ManageTopicModalProps, ManageTopicModalMethods } from "./types";

// Styles
import { Container } from "./styles";

import Image from "next/image";

export const ManageTopicModal = React.forwardRef<
  ManageTopicModalMethods,
  ManageTopicModalProps
>((props, ref) => {
  // Hooks
  const {
    isEditing,
    errors,
    topicInfos,
    visible,
    handleClose,
    handleRefMethods,
    handleManageTopic,
    handleTopicInfosChange,
  } = useManageTopic(props);
  useImperativeHandle(ref, handleRefMethods);

  // Functions{
  function handleSubmit(event?: React.FormEvent) {
    event?.preventDefault();
    handleManageTopic();
  }

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      title={isEditing ? "Edit topic" : "Create new topic"}
      icon={
        <Image
          width={24}
          height={24}
          src="/ball-of-wool 1.svg"
          alt="ball of wool icon"
        />
      }
    >
      <Container onSubmit={handleSubmit}>
        <Input
          label="Name:"
          errors={errors.name}
          placeholder="Enter name of topic"
          value={topicInfos.name}
          onChangeText={(v) => handleTopicInfosChange({ name: v })}
        />

        <Button
          type="submit"
          label={isEditing ? "Edit topic" : "Create topic"}
        />
      </Container>
    </Modal>
  );
});

ManageTopicModal.displayName = "ManageTopicModal";
