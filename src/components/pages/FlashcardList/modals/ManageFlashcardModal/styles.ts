import styled from "styled-components";

export const Container = styled.form`
  display: flex;

  flex-direction: column;
  gap: 0.5rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 0.5rem;
`;
