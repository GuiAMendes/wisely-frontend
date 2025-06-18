import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border: 2px solid ${({ theme }) => theme.colors.borders.gray};
  border-radius: 50%;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
