// External Libraries
import React from "react";

// Components

// Styles
import { Container, LinkWrapper, StyledLink } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { Typography } from "@components/tookit/Typography";

export const Header: React.FC = () => {
  const { pathname, query } = useRouter();

  return (
    <Container>
      <Image width={50} height={80} src={"/images/note.png"} alt="note" />

      <LinkWrapper>
        <StyledLink
          href={{
            pathname: `${pathname}/flashcards`,
            query,
          }}
        >
          <Typography $variant="p" fontWeight="bold">
            FlashCards
          </Typography>
        </StyledLink>

        <StyledLink
          href={{
            pathname: `${pathname}/files`,
            query,
          }}
        >
          <Typography $variant="p" fontWeight="bold">
            File
          </Typography>
        </StyledLink>
      </LinkWrapper>
    </Container>
  );
};
