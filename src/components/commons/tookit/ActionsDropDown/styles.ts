import styled from "styled-components";

export const Container = styled.div`
  min-width: 5rem;

  position: absolute;
  top: 100%;
  right: 0;

  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
