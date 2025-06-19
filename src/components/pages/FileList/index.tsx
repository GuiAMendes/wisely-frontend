// External Libraries
import React from "react";

// Components

// Hooks
import { useFileList } from "./hooks/useFileList";

// Styles
import { Container } from "./styles";

export const FileList: React.FC = () => {
  // Hooks
  const {} = useFileList({});

  return <Container>{/* Code */}</Container>;
};
