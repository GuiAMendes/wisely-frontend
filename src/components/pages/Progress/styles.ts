import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.div`
  display: flex;

  gap: 2rem;

  padding: 2rem;
`;

export const Firula = styled.div`
  display: flex;

  gap: 1rem;

  height: calc(100vh - 10rem);
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;

  gap: 1rem;

  box-sizing: border-box;
`;

export const CardImage = styled.div`
  width: 13.5rem;
  height: 100%;

  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  border-radius: ${({ theme }) => theme.borderRadius.card};

  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  border-radius: 30px;
`;

export const BarCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 25rem;

  align-items: center;
  justify-content: center;

  padding: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;

  position: relative;
`;
