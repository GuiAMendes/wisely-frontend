// External library
import useSWR from "swr";
import { useRouter } from "next/router";

// Service
import { getRecentJourneysAccessed } from "@services/journey/directory.[directoryId].journey.recents.get";

export function useRecentJourneys() {
  // Hooks
  const { query } = useRouter();

  const directoryId = query.id as string;

  const { data, error, isLoading, mutate } = useSWR(
    `/${directoryId}/journey/recents`,
    fetchRecentAccessed,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchRecentAccessed() {
    if (!directoryId) return;

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
