import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.white}
  );
`;
