// External Libraries
import { useState } from "react";

// Utils
import {
  buildDirectoryInfos,
  checkErrors,
  makeInitialErrors,
  makeInitialUserInfos,
} from "./utils";

// Services
import { createDirectory, Directory } from "@services/directories";

import { useLogin } from "@contexts/AuthContext";

// Types
import { UseManageDirectoryParams } from "./types";
import { DirectoryInfos } from "./types/directoryInfos";
import { toast } from "sonner";
import { RenameDirectory } from "@services/directories/directory.id.rename.patch";

export function useManageDirectory({
  refresh,
  refreshRecentsAccess,
}: UseManageDirectoryParams) {
  // States
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [directoryInfos, setDirectoryInfos] =
    useState<DirectoryInfos>(makeInitialUserInfos);
  const [directoryId, setDirectoryId] = useState<string>();
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

  async function handleManageDirectory() {
    if (!user) return;

    const errors = checkErrors(directoryInfos);

    setErros(errors);
    if (Object.values(errors).some((e) => e)) return;

    try {
      if (isEditing) {
        await RenameDirectory({
          directoryId: directoryId as string,
          newDirectoryName: directoryInfos.name,
        });
        toast.success(`${directoryInfos.name} foi editado com sucesso`);
      } else {
        await createDirectory({
          userId: user.id,
          name: directoryInfos.name,
          isTemplate: false,
        });
        toast.success(`${directoryInfos.name} foi criado com sucesso`);
      }

      handleClose();

      await new Promise((resolve) => setTimeout(resolve, 1000));
      await refresh();
      await refreshRecentsAccess();
    } catch (error) {
      const directoryError = error as Error;
      toast.error(directoryError.message);
    }
  }

  function handleOpen(directory?: Directory) {
    if (directory) {
      setDirectoryId(directory.props.id);
      setIsEditing(true);
      setDirectoryInfos(buildDirectoryInfos(directory));
    }
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
    setIsEditing(false);
    setDirectoryId(undefined);
    setDirectoryInfos(makeInitialUserInfos);
  }

  return {
    errors,
    visible,
    isEditing,
    directoryInfos,
    handleClose,
    handleRefMethods,
    handleUserInfosChange,
    handleCreateDirectory: handleManageDirectory,
  };
}
