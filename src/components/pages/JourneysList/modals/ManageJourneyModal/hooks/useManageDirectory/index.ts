// External Libraries
import { useState } from "react";
import { useRouter } from "next/router";

// Utils
import {
  checkErrors,
  makeInitialErrors,
  makeInitialJourneyInfos,
} from "./utils";

// Services
import { createJourney, Journey } from "@services/journey";

// Types
import { UseManageJourneyParams } from "./types";
import { JourneyErros, JourneyInfos } from "./types/journeyInfos";
import { buildJourneyInfos } from "./utils/buildJourneyInfos";
import { RenameJourney } from "@services/journey/journey.id.rename.patch";

export function useManageJourney({
  refresh,
  refreshRecents,
}: UseManageJourneyParams) {
  // States
  const [visible, setVisible] = useState(false);
  const [journeyInfos, setJourneyInfos] = useState<JourneyInfos>(
    makeInitialJourneyInfos
  );
  const [journeyId, setJourneyId] = useState<string>();
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
      if (journeyId)
        RenameJourney({ journeyId, newJourneyName: journeyInfos.name });
      else {
        createJourney({
          directoryId,
          name: journeyInfos.name,
          typeOfJourney: journeyInfos.type,
        });
      }

      handleClose();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      refresh();
      refreshRecents();
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpen(journey?: Journey) {
    if (journey) {
      setJourneyId(journey.props.id);
      setJourneyInfos(buildJourneyInfos(journey));
    }
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
    setJourneyId(undefined);
    setJourneyInfos(makeInitialJourneyInfos);
  }

  return {
    errors,
    journeyId,
    isEditing: !!journeyId,
    visible,
    handleClose,
    journeyInfos,
    handleRefMethods,
    handleUserInfosChange,
    handleCreateJourney,
  };
}
