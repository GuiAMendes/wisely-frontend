import { DirectoryErros, DirectoryInfos } from "../types/directoryInfos";
import { makeInitialErrors } from "./makeInitialErrors";

export function checkErrors(directory: DirectoryInfos): DirectoryErros {
  const errors = makeInitialErrors();
  if (!directory.name) errors.name = `Required field`;
  if (directory.name.length < 8)
    errors.name = "The directory name must be at least 8 characters long";
  return errors;
}
