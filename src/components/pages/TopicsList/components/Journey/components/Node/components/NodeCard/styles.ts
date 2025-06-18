import styled from "styled-components";
import { css } from "styled-components";
import { Direction } from ".";
import { motion } from "framer-motion";

// Types

interface ContainerProps {
  $direction: Direction;
}

const RIGHT_VARIANT = css`
  right: 100%;
`;

const LEFT_VARIANT = css`
  left: 100%;
`;

export const Container = styled.div<ContainerProps>`
  height: 8rem;

  display: flex;
  align-items: center;

  position: absolute;
  ${({ $direction }) => ($direction === "left" ? RIGHT_VARIANT : LEFT_VARIANT)};
  top: calc(50% - 4rem);

  & > div:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

export const HorizontalLine = styled.div`
  width: 4rem;
  height: 2px;

  background-color: ${({ theme }) => theme.colors.borders.gray};

  z-index: 1;
`;

export const ContainerCard = styled.div`
  width: max-content;
  max-width: 20rem;
  background-color: ${({ theme }) => theme.colors.white};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  z-index: 2;

  border-radius: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.borders.gray};

  transition: 0.5s;
  cursor: pointer;
`;

export const ContainerActions = styled(motion.div)``;
