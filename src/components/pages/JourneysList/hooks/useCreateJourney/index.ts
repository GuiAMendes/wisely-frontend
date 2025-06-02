// External library
import { useRouter } from "next/router";

// Service
import { createJourney } from "@services/journey/directory.[directoryId].journey.post";

// Types
import type { CreateJourneyInput } from "../types/createJourney";

// Utils
import { areValidFields } from "@utils/helpers/validateFields";

export function useCreateJourney() {
  // Hooks
  const { query } = useRouter();

  const directoryId = query.id as string;

  async function create({ name, typeOfJourney }: CreateJourneyInput) {
    if (areValidFields([name, typeOfJourney as string])) return;

    try {
      return createJourney({
        directoryId,
        name,
        typeOfJourney,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return {
    create,
  };
}
