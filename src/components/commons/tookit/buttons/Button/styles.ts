import styled from "styled-components";

export const Container = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 0.5rem;

  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.button};
`;
