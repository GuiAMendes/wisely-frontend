import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface StyledInputProps {
  $hasError: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
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

  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.borders.error : theme.colors.borders.gray};
  border-radius: ${({ theme }) => theme.borderRadius.input};

  &:focus {
    border-color: ${({ theme }) => theme.colors.borders.focus};
  }
`;

export const ToggleIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;
`;
