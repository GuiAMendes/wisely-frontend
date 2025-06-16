// Types
import { DeactivateDirectory } from "@services/directories/directory.id.deactivate.patch";
import { UseDirectoriesListParams } from "./types";
import { Directory } from "@services/directories";

export function useDirectoriesList({
  refresh,
  refreshRecentsAccess,
}: UseDirectoriesListParams) {
  // States

  // Functions
  async function handleRemoveDirectory(directory: Directory) {
    try {
      await DeactivateDirectory({ directoryId: directory.props.id });
      refresh();
      refreshRecentsAccess();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    handleRemoveDirectory,
  };
}
