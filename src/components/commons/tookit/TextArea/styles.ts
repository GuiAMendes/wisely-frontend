import styled from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const StyledTextArea = styled.textarea<{ $hasError: boolean }>`
  all: unset;
  outline: none;

  width: 100%;
  min-height: 7rem;
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
