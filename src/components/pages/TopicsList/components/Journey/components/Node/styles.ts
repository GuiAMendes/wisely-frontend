// External Libraries
import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  border: 2px solid ${({ theme }) => theme.colors.borders.gray};
  border-radius: 50%;
`;

export const YarnImage = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  height: 6rem;
  width: 6rem;
  object-fit: contain;
`;
