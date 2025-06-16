import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 200px;
  cursor: pointer;
`;

interface CardInnerProps {
  flipped: boolean;
}

export const CardInner = styled.div<CardInnerProps>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CardFront = styled(CardFace)`
  background-color: #ffffff;
  color: #333;
`;

export const CardBack = styled(CardFace)`
  background-color: #0077cc;
  color: #fff;
  transform: rotateY(180deg);
`;
