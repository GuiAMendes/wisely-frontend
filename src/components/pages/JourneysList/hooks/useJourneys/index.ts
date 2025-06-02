// External library
import useSWR from "swr";
import { toast } from "sonner";
import { useRouter } from "next/router";

// Service
import { getJourneys } from "@services/journey/directory.[directoryId].journey.get";

export function useJourneys() {
  // Hooks
  const { query } = useRouter();

  const directoryId = query.id as string;

  const { data, isLoading, mutate } = useSWR(
    `/${directoryId}/journey`,
    fetchJourneys,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchJourneys() {
    try {
      if (!directoryId) return;

      return getJourneys({ directoryId });
    } catch (error) {
      console.log(error);
      toast.error("Erro para listar jornadas");
    }
  }

  return {
    journeys: data,
    isLoading,
    mutate,
  };
}
