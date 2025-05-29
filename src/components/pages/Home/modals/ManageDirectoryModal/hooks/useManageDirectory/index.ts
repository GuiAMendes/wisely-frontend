// External Libraries
import { useState } from "react";

// Utils
import { checkErrors, makeInitialErrors, makeInitialUserInfos } from "./utils";

// Services
import { createDirectory } from "@services/directories";

import { useLogin } from "@contexts/AuthContext";

// Types
import { UseManageDirectoryParams } from "./types";
import { DirectoryInfos } from "./types/directoryInfos";

export function useManageDirectory({ refresh }: UseManageDirectoryParams) {
  // States
  const [visible, setVisible] = useState(false);
  const [directoryInfos, setDirectoryInfos] =
    useState<DirectoryInfos>(makeInitialUserInfos);
  const [errors, setErros] = useState<DirectoryInfos>(makeInitialErrors);

  const { user } = useLogin();

  // Functions
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose };
  }

  function handleUserInfosChange(changes: Partial<DirectoryInfos>) {
    setErros(makeInitialErrors);
    setDirectoryInfos({ ...directoryInfos, ...changes });
  }

  async function handleCreateDirectory() {
    if (!user) return;

    const errors = checkErrors(directoryInfos);

    setErros(errors);
    if (Object.values(errors).some((e) => e)) return;

    try {
      createDirectory({
        userId: user.id,
        name: directoryInfos.name,
        isTemplate: false,
      });

      handleClose();
      refresh();
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpen() {
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
  }

  return {
    errors,
    visible,
    handleClose,
    directoryInfos,
    handleRefMethods,
    handleUserInfosChange,
    handleCreateDirectory,
  };
}
