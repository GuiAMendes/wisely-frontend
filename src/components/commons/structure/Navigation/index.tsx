// External Libraries
import React from "react";
import Image from "next/image";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import {
  Container,
  LinkWrapper,
  LogoWrapper,
  StyledLink,
  WiselyInfos,
} from "./styles";
import { UserIdentification } from "@components/tookit/UserIdentification";

export const Navigation: React.FC = () => {
  return (
    <Container>
      <WiselyInfos>
        <LogoWrapper>
          <Image
            fill
            priority
            sizes="10rem"
            src="/images/gatinho.webp"
            alt="Cute kitten looking forward"
            style={{ objectFit: "cover" }}
          />
        </LogoWrapper>

        <Typography $variant="p" fontWeight="bold">
          Wisely
        </Typography>
      </WiselyInfos>

      <LinkWrapper>
        <StyledLink href="/directories">
          <Typography $variant="p" fontWeight="bold">
            Directories
          </Typography>
        </StyledLink>

        <StyledLink href="/progress">
          <Typography $variant="p" fontWeight="bold">
            Progress
          </Typography>
        </StyledLink>

        {/* <StyledLink href="/conquest">
          <Typography $variant="p" fontWeight="bold">
            Conquest
          </Typography>
        </StyledLink>

        <StyledLink href="/about-us">
          <Typography $variant="p" fontWeight="bold">
            About us
          </Typography>
        </StyledLink> */}
      </LinkWrapper>

      <UserIdentification />
    </Container>
  );
};
