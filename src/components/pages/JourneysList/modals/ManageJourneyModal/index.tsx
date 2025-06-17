// External Libraries
import React, { useImperativeHandle } from "react";
import { FaRegFolderOpen } from "react-icons/fa";

// Components
import { Modal } from "@components/tookit/Modal";
import { Input } from "@components/tookit/Input";
import { Button } from "@components/tookit/buttons/Button";
import { KittenRadio } from "@components/tookit/KittenRadio";

// Hooks
import { useManageJourney } from "./hooks/useManageDirectory";

// Types
import type {
  ManageJourneyModalProps,
  ManageJourneyModalMethods,
} from "./types";
import type { TypeOfJourney } from "./hooks/useManageDirectory/types/journeyInfos";

// Styles
import { Container } from "./styles";

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
  } = useManageJourney(props);
  useImperativeHandle(ref, handleRefMethods);

  function handleSubmit(event?: React.FormEvent) {
    event?.preventDefault();
    handleCreateJourney();
  }

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      title="Create new journey"
      icon={<FaRegFolderOpen size={24} />}
    >
      <Container onSubmit={handleSubmit}>
        <Input
          label="Name:"
          errors={errors.name}
          placeholder="Enter name of journey"
          value={journeyInfos.name}
          onChangeText={(v) => handleUserInfosChange({ name: v })}
        />

        <KittenRadio
          label="Full"
          value="full"
          selected={journeyInfos.type}
          onChange={(value) =>
            handleUserInfosChange({ type: value as TypeOfJourney })
          }
        />

        <KittenRadio
          label="Free"
          value="free"
          selected={journeyInfos.type}
          onChange={(value) =>
            handleUserInfosChange({ type: value as TypeOfJourney })
          }
        />

        <Button label="Create Journey" type="submit" />
      </Container>
    </Modal>
  );
});

ManageJourneyModal.displayName = "ManageJourneyModal";
