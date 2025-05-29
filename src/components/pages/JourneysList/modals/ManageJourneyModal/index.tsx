// External Libraries
import React, { useImperativeHandle } from "react";

// Components
import { Modal } from "@components/tookit/Modal";
import { Input } from "@components/tookit/Input";
import { Button } from "@components/tookit/buttons/Button";

// Hooks
import { useManageDirectory } from "./hooks/useManageDirectory";

// Types
import { ManageJourneyModalProps, ManageJourneyModalMethods } from "./types";

// Styles
import { Container } from "./styles";
import { FaRegFolderOpen } from "react-icons/fa";

export const ManageJourneyModal = React.forwardRef<
  ManageJourneyModalMethods,
  ManageJourneyModalProps
>((props, ref) => {
  // Hooks
  const {
    errors,
    journeyInfos,
    visible,
    handleClose,
    handleRefMethods,
    handleUserInfosChange,
    handleCreateJourney,
  } = useManageDirectory(props);
  useImperativeHandle(ref, handleRefMethods);

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      title="Create new journey"
      icon={<FaRegFolderOpen size={24} />}
    >
      <Container>
        <Input
          label="Name:"
          errors={errors.name}
          placeholder="Enter name of journey"
          value={journeyInfos.name}
          onChangeText={(v) => handleUserInfosChange({ name: v })}
        />

        <Button label="Create Journey" onClick={handleCreateJourney} />
      </Container>
    </Modal>
  );
});

ManageJourneyModal.displayName = "ManageJourneyModal";
