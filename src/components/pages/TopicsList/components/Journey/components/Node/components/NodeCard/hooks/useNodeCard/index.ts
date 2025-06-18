// External Libraries
import { useState } from "react";

// Types
import type { UseNodeCardParams } from "./types";
import type { ActionOption } from "@components/tookit/ActionsDropDown/types";
import type { BaseNode } from "@pages/TopicsList/components/Journey/types/types";

export function useNodeCard<TNode extends BaseNode, TAction extends string>({
  node,
  actions,
  onClickAction,
}: UseNodeCardParams<TNode, TAction>) {
  // States
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  function buildActions(): ActionOption[] {
    if (!actions) return [];

    return actions.map((action) => {
      return {
        icon: action.icon,
        id: action.id,
        label: action.label,
        onClick: () => onClickAction(action.id, node),
      };
    });
  }

  return {
    isOpen,
    actionsOptions: buildActions(),
    toggleDropdown,
    changeIsOpen: setIsOpen,
  };
}
