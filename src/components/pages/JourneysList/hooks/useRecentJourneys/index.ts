// External library
import useSWR from "swr";
import { useParams } from "next/navigation";

// Service
import { getRecentJourneysAccessed } from "@services/journey/directory.[directoryId].journey.recents.get";

export function useRecentJourneys() {
  const params = useParams<{ directoryId: string }>();

  const directoryId = params?.directoryId;

  const shouldFetch = Boolean(directoryId);

  const { data, error, isLoading, mutate } = useSWR(
    shouldFetch ? `/${directoryId}/journey/recents` : null,
    fetchRecentAccessed,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchRecentAccessed() {
    try {
      return getRecentJourneysAccessed({ directoryId });
    } catch (error) {
      console.log(error);
    }
  }

  return {
    recentJourneysAccessed: data,
    isLoading,
    error,
    mutate,
  };
}
