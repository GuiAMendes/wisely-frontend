// External library
import { useParams } from "next/navigation";

// Service
import { createJourney } from "@services/journey/directory.[directoryId].journey.post";

// Types
import type { CreateJourneyInput } from "../types/createJourney";

// Utils
import { areValidFields } from "@utils/helpers/validateFields";

export function useCreateJourney() {
  const params = useParams<{ directoryId: string }>();

  async function create({ name, typeOfJourney }: CreateJourneyInput) {
    if (areValidFields([name, typeOfJourney as string])) return;

    try {
      return createJourney({
        directoryId: params.directoryId,
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
