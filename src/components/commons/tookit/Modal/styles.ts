import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 192, 203, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 24px;
  padding: 32px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  margin-top: 24px;
`;

export const CloseButton = styled.button`
  background-color: #ffe5ec;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  .icon {
    display: flex;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
`;
