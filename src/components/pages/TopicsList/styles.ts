import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  gap: 2rem;

  padding: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;

  gap: 0.25rem;
`;

const animateBorder = keyframes`
  0% {
    border: 2px dotted #aaa;
  }
  100% {
    border: 2px solid #FEDBE2;
  }
`;

export interface Props {
  $hasTopics: boolean;
}

export const Card = styled.div<Props>`
  width: 100%;

  flex: 1;

  padding: 1rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};
  transition: border 0.3s ease;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  ${({ $hasTopics, theme }) =>
    $hasTopics
      ? css`
          animation: ${animateBorder} 1s forwards;
        `
      : css`
          border: 2px dotted ${theme.colors.borders.gray};
        `}
`;

export const TopicsWrapper = styled(motion.div)`
  margin-top: 1rem;

  ul {
    list-style: disc;
    margin-left: 1.25rem;
    color: #333;
  }
`;
export const EmptyState = styled(motion.div)`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
