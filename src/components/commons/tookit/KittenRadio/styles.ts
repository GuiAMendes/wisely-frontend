import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
  padding: 0.35rem;

  cursor: pointer;
  user-select: none;

  border-radius: ${({ theme }) => theme.borderRadius.button};
  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  transition: border 0.2s;
`;

export const CustomRadio = styled(motion.div)<{ isSelected: boolean }>`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary : theme.colors.borders.gray};
  cursor: pointer;
`;

export const IconWrapper = styled(motion.div)`
  color: white;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
