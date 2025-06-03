// External Libraries
import React, { useImperativeHandle } from "react";
import { FaRegFolderOpen } from "react-icons/fa";

// Components
import { Modal } from "@components/tookit/Modal";
import { Input } from "@components/tookit/Input";
import { Button } from "@components/tookit/buttons/Button";
import { TypeOfJourney } from "./hooks/useManageDirectory/types/journeyInfos";

// Hooks
import { useManageJourney } from "./hooks/useManageDirectory";

// Types
import { ManageJourneyModalProps, ManageJourneyModalMethods } from "./types";

// Styles
import { Container } from "./styles";
import { KittenRadio } from "@components/tookit/KittenRadio";

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

        <Button label="Create Journey" onClick={handleCreateJourney} />
      </Container>
    </Modal>
  );
});

ManageJourneyModal.displayName = "ManageJourneyModal";
