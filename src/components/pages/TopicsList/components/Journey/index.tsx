// External Libraries
import React from "react";

// Components
import { Node } from "./components/Node";
import { CreateNodeButton } from "./components/CreateNodeButton";

// Types
import type { BaseNode, Props } from "./types/types";

// Styles
import { Container, VerticalLine } from "./styles";

export const Journey = <TNode extends BaseNode, TAction extends string>(
  props: Props<TNode, TAction>
) => {
  // Constants
  const { nodes, ...rest } = props;

  // Functions
  function renderNodes() {
    return nodes.map((node, index) => {
      return (
        <>
          <Node node={node} index={index} {...rest} />

          {index < nodes.length - 1 ? (
            <VerticalLine key={`line_${index}`} />
          ) : null}
        </>
      );
    });
  }

  function renderCreateButton() {
    if (!props?.onClickCreateNode) return null;

    return (
      <>
        <VerticalLine />
        {props.journeyIsCompleted ? null : (
          <CreateNodeButton onClick={props?.onClickCreateNode} />
        )}
      </>
    );
  }

  return (
    <Container>
      {renderNodes()}

      {renderCreateButton()}
    </Container>
  );
};
