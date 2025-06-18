import { Directory } from "@services/directories";
import { DirectoryInfos } from "../types/directoryInfos";

export function buildDirectoryInfos(directory: Directory): DirectoryInfos {
  return {
    name: directory.props.directoryName,
  };
}
