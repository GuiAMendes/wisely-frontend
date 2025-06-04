import { ReactNode } from "react";

export interface ActionOption {
  id: string;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}
