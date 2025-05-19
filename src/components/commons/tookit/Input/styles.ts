import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  position: relative;

  padding: 1rem;
  width: 15rem;

  border: 2px solid #ccc;
  border-radius: 0.5rem;

  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #cce8f5;
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