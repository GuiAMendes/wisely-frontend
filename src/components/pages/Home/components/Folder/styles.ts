import styled from "styled-components";

export const Container = styled.div`
  width: 14rem;
  height: 10rem;

  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem 0.25rem;

  position: relative;
  cursor: pointer;

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Tab = styled.div`
  position: absolute;

  top: -1rem;
  left: 0.5rem;

  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  z-index: 2;
`;

export const Content = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
  top: 0.75rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
