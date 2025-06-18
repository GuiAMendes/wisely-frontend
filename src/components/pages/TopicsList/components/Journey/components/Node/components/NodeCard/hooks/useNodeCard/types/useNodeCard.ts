// Types
import type {
  BaseNode,
  TopicAction,
} from "@pages/TopicsList/components/Journey/types/types";

export interface UseNodeCardParams<
  TNode extends BaseNode,
  TAction extends string
> {
  node: TNode;
  actions?: TopicAction<TAction>[];
  onClickNode: (node: TNode) => void;
  onClickAction: (action: TAction, node: TNode) => void;
}
