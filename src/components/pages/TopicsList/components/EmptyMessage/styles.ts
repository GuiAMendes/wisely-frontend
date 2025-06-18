import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  gap: 0.5rem;
`;

export const YarnBallContainer = styled.button`
  position: relative;
  width: 4rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  &:hover .image-wrapper {
    animation: ${rotate} 0.6s linear;
  }
`;
