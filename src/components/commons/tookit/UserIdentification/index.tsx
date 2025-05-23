// External Libraries
import React from "react";

// Components
import { Typography } from "../Typography";

// Utils
import { getInitialsUserName } from "./utils";

// Styles
import { Container } from "./styles";
import { theme } from "@globals/theme";

interface Props {
  userName: string;
}

export const UserIdentification: React.FC<Props> = ({ userName }) => {
  return (
    <Container>
      <Typography $variant="p" color={theme.colors.secondary}>
        {getInitialsUserName(userName)}
      </Typography>
    </Container>
  );
};
