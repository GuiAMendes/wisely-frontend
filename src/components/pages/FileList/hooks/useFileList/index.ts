// Types
import useSWR from "swr";

import { useRouter } from "next/router";
import { createFile, deactivateFile, File, listAllFiles } from "@services/file";
import { toast } from "sonner";
import { CreateFileInput } from "@services/file/topic.[topicId].file.post/response";

export function useFileList() {
  // Hooks
  const { query } = useRouter();

  const idTopic = query["topic-id"] as string;

  // Functions
  const { data, mutate } = useSWR(`/topic/${idTopic}/file`, fetchJourneys, {
    revalidateOnFocus: false,
  });

  async function fetchJourneys() {
    try {
      if (!idTopic) return;

      return listAllFiles({ idTopic });
    } catch (error) {
      console.log(error);
      toast.error("Erro para listar jornadas");
    }
  }

  async function handleRemoveFile(file: File) {
    try {
      await deactivateFile({ idFile: file.props.id });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("arquivo deletado");
      mutate();
    } catch {
      toast.error("Erro ao deletar arquivo");
    }
  }

  async function handleAddFile(createFileInput: CreateFileInput) {
    if (!createFileInput.idTopic) return;
    try {
      await createFile(createFileInput);
      toast.success("Arquivo adicionado");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      mutate();
    } catch {}
  }

  function downloadBase64File(
    base64: string,
    fileName: string,
    fileType: string
  ) {
    const byteCharacters = atob(base64);
    const byteNumbers = Array.from(byteCharacters).map((char) =>
      char.charCodeAt(0)
    );
    const byteArray = new Uint8Array(byteNumbers);

    const blob = new Blob([byteArray], { type: fileType });
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(blobUrl);
  }

  return {
    idTopic,
    files: data,
    downloadBase64File,
    handleRemoveFile,
    handleAddFile,
    mutate,
  };
}
