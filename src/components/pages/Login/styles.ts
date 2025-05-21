import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.white}
  );
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -6rem;
  left: 50%;
  transform: translateX(-50%);

  width: 10rem;
  height: 10rem;

  overflow: hidden;

  z-index: 0;

  @media (min-width: 768px) {
    top: -10rem;
    width: 15rem;
    height: 15rem;
  }
`;

export const Card = styled.div`
  width: 22vw;
  min-width: fit-content;

  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  white-space: nowrap;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const TextLinkWrapper = styled.div`
  width: 100%;

  justify-content: center;
  display: flex;
  gap: 0.25rem;

  white-space: nowrap;
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
