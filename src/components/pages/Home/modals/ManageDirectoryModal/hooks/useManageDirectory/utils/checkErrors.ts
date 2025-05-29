import { DirectoryErros, DirectoryInfos } from "../types/directoryInfos";

export function checkErrors(directory: DirectoryInfos): DirectoryErros {
  return {
    name: directory.name ? `` : `Campo obrigatorio`,
  };
}
