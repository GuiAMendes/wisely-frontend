import { useLogin } from "@contexts/AuthContext";
import { resumeStatistics } from "@services/progress";
import { toast } from "sonner";
import useSWR from "swr";

// Types
export function useProgress() {
  // States
  const { user } = useLogin();

  const userId = user?.id;

  // Functions
  const { data, isLoading, mutate } = useSWR(
    `/user/${user?.id}/progress/resumeStatistics`,
    fetchStatistics,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchStatistics() {
    if (!userId) return;
    try {
      return resumeStatistics({ userId });
    } catch {
      toast.error("Erro ao recuperar dados");
    }
  }

  return {
    statistics: data,
    isLoading,
    mutate
  };
}
