import styled from "styled-components";
import { TypographyProps } from "./types";

export const Container = styled.div<TypographyProps>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ $textAlign }) => $textAlign};
`;
