// External Libraries
import { useState } from "react";

// Utils
import { checkErrors, makeInitialErrors, makeInitialUserInfos } from "./utils";

// Services
import { createDirectory } from "@services/directories";

import { useLogin } from "@contexts/AuthContext";

// Types
import { UseManageDirectoryParams } from "./types";
import { JourneyInfos } from "./types/journeyInfos";

export function useManageDirectory({ refresh }: UseManageDirectoryParams) {
  // States
  const [visible, setVisible] = useState(false);
  const [journeyInfos, setJourneyInfos] =
    useState<JourneyInfos>(makeInitialUserInfos);
  const [errors, setErros] = useState<JourneyInfos>(makeInitialErrors);

  const { user } = useLogin();

  // Functions
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose };
  }

  function handleUserInfosChange(changes: Partial<JourneyInfos>) {
    setErros(makeInitialErrors);
    setJourneyInfos({ ...journeyInfos, ...changes });
  }

  async function handleCreateJourney() {
    if (!user) return;

    const errors = checkErrors(journeyInfos);

    setErros(errors);
    if (Object.values(errors).some((e) => e)) return;

    try {
      createDirectory({
        userId: user.id,
        name: journeyInfos.name,
        isTemplate: false,
      });

      handleClose();
      refresh();
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpen() {
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
  }

  return {
    errors,
    visible,
    handleClose,
    journeyInfos,
    handleRefMethods,
    handleUserInfosChange,
    handleCreateJourney,
  };
}
