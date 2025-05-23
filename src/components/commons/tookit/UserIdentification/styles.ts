import styled from "styled-components";

export const Container = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.primary};
`;
