import { motion } from "framer-motion";
import styled from "styled-components";
export const Container = styled.div`
  position: relative;
`;

interface Props {
  $secundaryColor: string;
}

export const UserIdentificationContant = styled.button<Props>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: ${({ $secundaryColor }) => $secundaryColor};
`;

export const DropDown = styled.div`
  min-width: 5rem;
  width: 14rem;

  position: absolute;
  top: 100%;
  right: 0;

  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 10;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  align-items: center;
`;

export const AvatarGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
`;

export const Wrapper = styled(motion.div)``;
