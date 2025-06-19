import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 2rem;

  padding: 2rem;
`;

export const Firula = styled.div`
  display: flex;

  width: 100%;

  gap: 1rem;

  height: calc(100vh - 10rem);
`;

export const Column = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImage = styled.div`
  width: 13.5rem;
  height: 100%;

  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  border-radius: ${({ theme }) => theme.borderRadius.card};

  position: relative;
`;

export const Card = styled.div`
  display: flex;

  min-width: 13.5rem;

  align-items: center;

  height: 13.5rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 30px;
`;
