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
    errors,
    directoryInfos,
    visible,
    handleClose,
    handleRefMethods,
    handleUserInfosChange,
    handleCreateDirectory,
  } = useManageDirectory(props);
  useImperativeHandle(ref, handleRefMethods);

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      title="Create new directory"
      icon={<FaRegFolderOpen size={24} />}
    >
      <Container>
        <Input
          label="Name:"
          errors={errors.name}
          placeholder="Enter name of directory"
          value={directoryInfos.name}
          onChangeText={(v) => handleUserInfosChange({ name: v })}
        />

        <Button label="Create Directory" onClick={handleCreateDirectory} />
      </Container>
    </Modal>
  );
});

ManageDirectoryModal.displayName = "ManageDirectoryModal";
