import styled from "styled-components";

export const Container = styled.div`
  width: 12rem;
  height: 8rem;

  background: linear-gradient(to bottom, #ffeef2, #ffd9e1);
  border-radius: 0.75rem;

  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    padding: 0 0.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const MoreButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 70%;
  right: 0.25rem;

  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;