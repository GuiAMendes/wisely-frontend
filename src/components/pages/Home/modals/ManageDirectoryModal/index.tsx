// External Libraries
import React, { useImperativeHandle } from "react";

// Components
import { Modal } from "@components/tookit/Modal";
import { Input } from "@components/tookit/Input";
import { Button } from "@components/tookit/buttons/Button";

// Hooks
import { useManageDirectory } from "./hooks/useManageDirectory";

// Types
import {
  ManageDirectoryModalProps,
  ManageDirectoryModalMethods,
} from "./types";

// Styles
import { Container } from "./styles";
import { FaRegFolderOpen } from "react-icons/fa";

export const ManageDirectoryModal = React.forwardRef<
  ManageDirectoryModalMethods,
  ManageDirectoryModalProps
>((props, ref) => {
  // Hooks
  const {
    isEditing,
    errors,
    directoryInfos,
    visible,
    handleClose,
    handleRefMethods,
    handleUserInfosChange,
    handleCreateDirectory,
  } = useManageDirectory(props);
  useImperativeHandle(ref, handleRefMethods);

  // Functions{
  function handleSubmit(event?: React.FormEvent) {
    event?.preventDefault();
    handleCreateDirectory();
  }

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      title={isEditing ? "Edit directory" : "Create new directory"}
      icon={<FaRegFolderOpen size={24} />}
    >
      <Container onSubmit={handleSubmit}>
        <Input
          label="Name:"
          errors={errors.name}
          placeholder="Enter name of directory"
          value={directoryInfos.name}
          onChangeText={(v) => handleUserInfosChange({ name: v })}
        />

        <Button
          type="submit"
          label={isEditing ? "Edit directory" : "Create directory"}
          onClick={handleCreateDirectory}
        />
      </Container>
    </Modal>
  );
});

ManageDirectoryModal.displayName = "ManageDirectoryModal";
