import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 10rem);

  background-color: white;
  padding-inline: 2rem;
  border-radius: 16px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const EditorWrapper = styled.div`
  .ProseMirror {
    outline: none;
    min-height: 400px;

    h1 {
      font-size: 28px;
      font-weight: 700;
      margin: 1rem 0;
    }

    h2 {
      font-size: 22px;
      font-weight: 600;
      margin: 1rem 0;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    strong {
      font-weight: bold;
    }
  }
`;

export const Button = styled.button`
  background-color: #f3f3f3;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  margin: 0 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    font-size: 16px;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const BubbleMenuWrapper = styled.div`
  display: flex;
  background: white;
  border: 1px solid #ddd;
  padding: 6px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;
