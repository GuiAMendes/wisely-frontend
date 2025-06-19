import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 40rem;

  gap: 2rem;

  padding: 2rem;
`;

export const Firula = styled.div`
  display: flex;

  width: 100%;

  gap: 1rem;

  height: calc(100vh - 10rem);

  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImage = styled.div`
  width: 13.5rem;
  height: 48%;

  position: relative;
`;

export const Card = styled.div`
  width: 13.5rem;
  height: 48%;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 30px;
`;
