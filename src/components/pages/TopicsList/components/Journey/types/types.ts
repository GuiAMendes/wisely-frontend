// External Libraries
import { ReactNode } from "react";

export interface TopicAction<TAction extends string> {
  id: TAction;
  label: string;
  icon?: ReactNode;
}

export interface BaseNode {
  id: string;
  label: string;
  isCompleted: boolean;
}

export interface Props<TNode extends BaseNode, TAction extends string> {
  nodes: TNode[];
  actions?: TopicAction<TAction>[];
  journeyIsCompleted: boolean;
  onClickCreateNode?: () => void;
  onClickNode: (node: TNode) => void;
  onClickAction: (action: TAction, node: TNode) => void;
}
