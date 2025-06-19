import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardContent = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  font-size: 0.95rem;

  strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    line-height: 1.4;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;
