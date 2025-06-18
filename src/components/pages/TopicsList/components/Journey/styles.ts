import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 8rem;

  background-color: ${({ theme }) => theme.colors.borders.gray};

  z-index: 1;
`;
