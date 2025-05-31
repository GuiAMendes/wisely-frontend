// External library
import useSWR from "swr";
import { useParams } from "next/navigation";

// Service
import { getRecentJourneysAccessed } from "@services/journey/[directoryId].journey.recents.get";

export function useRecentDirectories() {
  const params = useParams<{ directoryId: string }>();

  const { data, error, isLoading, mutate } = useSWR(
    `/${params.directoryId}/journey/recents`,
    fetchRecentAccessed,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchRecentAccessed() {
    try {
      return getRecentJourneysAccessed({ directoryId: params.directoryId });
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
