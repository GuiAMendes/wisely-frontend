import React from "react";
import ReactDOM from "react-dom";
import {
  Backdrop,
  ModalContainer,
  ModalContent,
  CloseButton,
  Header,
  TextContainer,
} from "./styles";
import { IoClose } from "react-icons/io5";
import { Typography } from "../Typography";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  title,
  icon,
}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <TextContainer>
            {icon && <span className="icon">{icon}</span>}
            <Typography $variant={"h5"} fontWeight="bold">
              {title}
            </Typography>
          </TextContainer>

          <CloseButton onClick={onClose}>
            <IoClose size={20} />
          </CloseButton>
        </Header>

        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Backdrop>,
    document.body
  );
};
