// External Libraries
import React from "react";

// Components
import { Direction, NodeCard } from "./components/NodeCard";

// Assets
import YarnBlue from "public/images/novelos/blue.png";
import YarnPinks from "public/images/novelos/pink.png";
import YarnOrange from "public/images/novelos/orange.png";

// Types
import type { BaseNode, TopicAction } from "../../types/types";

// Styles
import { Container, YarnImage } from "./styles";

interface Props<TNode, TAction extends string> {
  node: TNode;
  index: number;
  actions?: TopicAction<TAction>[];
  onClickNode: (node: TNode) => void;
  onClickAction: (action: TAction, node: TNode) => void;
}

const YARNS = [YarnBlue, YarnPinks, YarnOrange];

export const Node = <TNode extends BaseNode, TAction extends string>(
  props: Props<TNode, TAction>
) => {
  // Constants
  const direction: Direction = props.index % 2 === 0 ? "left" : "right";

  // Functions
  function getImage() {
    return YARNS[props.index % YARNS.length].src;
  }

  return (
    <Container>
      <YarnImage
        alt="yarn ball"
        draggable={false}
        src={getImage()}
        style={{ objectFit: "contain", pointerEvents: "none" }}
      />

      <NodeCard {...props} direction={direction} />
    </Container>
  );
};
