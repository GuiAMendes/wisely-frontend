import { toast } from "sonner";
import {
  editContentOfSummary,
  findSummary,
  renameTitleOfSummary,
} from "@services/summary";

import { useRouter } from "next/router";
import useSWR from "swr";

export function useNote() {
  // Hooks
  const { query } = useRouter();

  const idTopic = query["topic-id"] as string;

  const { data, mutate } = useSWR(`/topic/${idTopic}/summary`, fetchSummary, {
    revalidateOnFocus: false,
  });

  async function fetchSummary() {
    try {
      if (!idTopic) return;

      return findSummary({ idTopic });
    } catch (error) {
      console.log(error);
      toast.error("Erro para listar jornadas");
    }
  }

  async function handleEditSummaryContent(newContent: string) {
    try {
      const idSummary = data?.props.id;
      if (!idSummary) return;

      await editContentOfSummary({
        idSummary,
        newContent,
      });

      toast.success("Summary updated");
      mutate();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update summary content");
    }
  }

  async function handleRenameSummaryTitle(newTitle: string) {
    try {
      const idSummary = data?.props.id;
      if (!idSummary) return;

      return await renameTitleOfSummary({
        idSummary,
        newTitle,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to update summary content");
    }
  }

  return {
    summary: data,
    handleEditSummaryContent,
    handleRenameSummaryTitle,
  };
}
