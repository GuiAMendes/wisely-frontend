import React from "react";
import { toast } from "sonner";
import { Button } from "@components/tookit/buttons/Button";
import { CreateFileInput } from "@services/file/topic.[topicId].file.post/response";
import { ButtonContainer, Container } from "./styles";

type FileUploaderProps = {
  idTopic: string;
  onUpload: (file: CreateFileInput) => void;
};

export const FileInput: React.FC<FileUploaderProps> = ({
  idTopic,
  onUpload,
}) => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isValidType =
      file.type === "application/pdf" || file.type === "text/plain";
    if (!isValidType) {
      toast.error("Apenas arquivos .txt ou .pdf são permitidos");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast.error("Arquivo muito grande (limite de 5MB)");
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = (reader.result as string).split(",")[1];
      onUpload({
        idTopic,
        fileName: file.name,
        fileType: file.type,
        fileContent: base64,
      });
    };

    reader.onerror = () => {
      toast.error("Erro ao ler o arquivo");
    };

    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    document.getElementById("hidden-file-input")?.click();
  };

  return (
    <Container>
      <input
        id="hidden-file-input"
        type="file"
        accept=".txt,application/pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <ButtonContainer>
        <Button label="Upload File" onClick={handleClick} />
      </ButtonContainer>
    </Container>
  );
};
