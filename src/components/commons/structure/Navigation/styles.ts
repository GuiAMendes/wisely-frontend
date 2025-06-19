import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.5rem;
`;

export const WiselyInfos = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

export const LogoWrapper = styled.div`
  width: 2rem;
  height: 2rem;

  position: relative;
  border-radius: 50%;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.primary};

  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
`;

export const LinkWrapper = styled.div`
  display: flex;

  gap: 2rem;
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
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
