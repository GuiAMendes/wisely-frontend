import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div``;

export const Flag = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0.25rem;

  border-radius: 25px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled(motion.div)``;
