import styled from "styled-components";

export const Container = styled.div`
  min-width: 10rem;
  min-height: 8rem;

  width: 12rem;
  height: 8rem;

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

  width: 3rem;
  height: 2rem;

  top: -1rem;
  left: 0.5rem;

  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  z-index: 2;

  p {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
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
