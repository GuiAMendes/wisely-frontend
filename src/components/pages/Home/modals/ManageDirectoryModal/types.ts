import { Directory } from "@services/directories";

export interface ManageDirectoryModalMethods {
  open: (directory?: Directory) => void;
  close: () => void;
}

export interface ManageDirectoryModalProps {
  refresh: () => void;
  refreshRecentsAccess: () => void;
}
