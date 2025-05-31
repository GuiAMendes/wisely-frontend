// External library
import useSWR from "swr";
import { useParams } from "next/navigation";

// Service
import { getJourneys } from "@services/journey/[directoryId].journey.get";

export function useDirectories() {
  const params = useParams<{ directoryId: string }>();

  const { data, error, isLoading, mutate } = useSWR(
    `/${params.directoryId}/journey`,
    fetchDirectories,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchDirectories() {
    try {
      return getJourneys({ directoryId: params.directoryId });
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
