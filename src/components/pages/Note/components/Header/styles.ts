import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkWrapper = styled.div`
  display: flex;

  gap: 0.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  & > * {
    color: ${({ theme }) => theme.colors.text.primary};
    transition: color 0.2s;
  }

  &:hover > *,
  &:focus > *,
  &:active > * {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
