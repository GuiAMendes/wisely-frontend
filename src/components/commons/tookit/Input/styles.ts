import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const StyledInput = styled.input`
  all: unset;
  outline: none;

  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;

  position: relative;

  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    font-size: 0.875rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  border-radius: ${({ theme }) => theme.borderRadius.input};

  &:focus {
    border-color: ${({ theme }) => theme.colors.borders.focus};
  }
`;

export const ToggleIcon = styled.div`
  position: absolute;

  width: 2rem;
  height: 3.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  left: calc(100% - 2rem);
  top: 50%;
`;
