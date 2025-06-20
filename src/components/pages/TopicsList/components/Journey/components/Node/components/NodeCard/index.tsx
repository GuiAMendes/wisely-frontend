// External Libraries
import React from "react";
import { AnimatePresence } from "framer-motion";

// Components
import { ActionsDropDown } from "@components/tookit/ActionsDropDown";

// Hooks
import { useNodeCard } from "./hooks/useNodeCard";

// Types
import type {
  BaseNode,
  TopicAction,
} from "@pages/TopicsList/components/Journey/types/types";

// Styles
import {
  Container,
  ContainerActions,
  ContainerCard,
  HorizontalLine,
} from "./styles";
import { CompletedFlag } from "./components/CompletedFlag";

interface Props<TNode extends BaseNode, TAction extends string> {
  node: TNode;
  actions?: TopicAction<TAction>[];
  direction: Direction;
  onClickNode: (node: TNode) => void;
  onClickAction: (action: TAction, node: TNode) => void;
}

export type Direction = "left" | "right";

export const NodeCard = <TNode extends BaseNode, TAction extends string>(
  props: Props<TNode, TAction>
) => {
  // Constants
  const { node, direction, onClickNode } = props;

  // Hooks
  const { isOpen, actionsOptions, changeIsOpen } = useNodeCard(props);

  return (
    <Container $direction={direction} onClick={() => onClickNode(node)}>
      {props.direction === "right" ? <HorizontalLine /> : null}

      <ContainerCard
        onMouseEnter={() => changeIsOpen(true)}
        onMouseLeave={() => changeIsOpen(false)}
      >
        {props.node.label}

        <CompletedFlag isCompleted={props.node.isCompleted} />

        {isOpen && actionsOptions ? (
          <AnimatePresence>
            <ContainerActions
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ActionsDropDown actions={actionsOptions} />
            </ContainerActions>
          </AnimatePresence>
        ) : null}
      </ContainerCard>

      {props.direction === "left" ? <HorizontalLine /> : null}
    </Container>
  );
};
