// External Libraries
import { useState } from "react";
import { useRouter } from "next/router";

// Utils
import { checkErrors, makeInitialErrors, makeInitialUserInfos } from "./utils";

// Services
import { createJourney } from "@services/journey";

// Types
import { UseManageJourneyParams } from "./types";
import { JourneyErros, JourneyInfos } from "./types/journeyInfos";

export function useManageJourney({ refresh }: UseManageJourneyParams) {
  // States
  const [visible, setVisible] = useState(false);
  const [journeyInfos, setJourneyInfos] =
    useState<JourneyInfos>(makeInitialUserInfos);
  const [errors, setErros] = useState<JourneyErros>(makeInitialErrors);

  // Hooks
  const { query } = useRouter();

  // Constants
  const directoryId = query.id as string;

  // Functions
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose };
  }

  function handleUserInfosChange(changes: Partial<JourneyInfos>) {
    setErros(makeInitialErrors);
    setJourneyInfos({ ...journeyInfos, ...changes });
  }

  async function handleCreateJourney() {
    if (!directoryId) return;

    const errors = checkErrors(journeyInfos);

    setErros(errors);
    if (Object.values(errors).some((e) => e)) return;

    try {
      createJourney({
        directoryId,
        name: journeyInfos.name,
        typeOfJourney: journeyInfos.type,
      });

      handleClose();
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
