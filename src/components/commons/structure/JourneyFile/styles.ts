import styled from "styled-components";

export const Container = styled.div`
  width: 12rem;
  height: 8rem;

  background: linear-gradient(to bottom, #ffeef2, #ffd9e1);
  border-radius: 0.75rem;

  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    padding: 0 0.5rem;
  }
`;
