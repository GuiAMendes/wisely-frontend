// External library
import useSWR from "swr";
import { toast } from "sonner";
import { useRouter } from "next/router";

// Service
import { listAllFlashcards } from "@services/flashcard";

export function useFlashCard() {
  // Hooks
  const { query } = useRouter();

  const idTopic = query["topic-id"] as string;

  const { data, isLoading, mutate } = useSWR(
    `/topic/${idTopic}/flashcard`,
    fetchFlashCard,
    {
      revalidateOnFocus: false,
    }
  );

  async function fetchFlashCard() {
    try {
      if (!idTopic) return;

      return listAllFlashcards({ idTopic });
    } catch (error) {
      console.log(error);
      toast.error("Erro para listar flashCards");
    }
  }

  return {
    flashCardList: data,
    isLoading,
    mutate,
  };
}
