// External library
import useSWR from "swr";
import { useParams } from "next/navigation";

// Service
import { getJourneys } from "@services/journey/directory.[directoryId].journey.get";

export function useJourneys() {
  const params = useParams<{ directoryId: string }>();

  const directoryId = params?.directoryId;

  const shouldFetch = Boolean(directoryId);

  const { data, error, isLoading, mutate } = useSWR(
    shouldFetch ? `/${directoryId}/journey` : null,
    fetchJourneys,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchJourneys() {
    try {
      return getJourneys({ directoryId });
    } catch (error) {
      console.log(error);
    }
  }

  return {
    journeys: data,
    isLoading,
    error,
    mutate,
  };
}
