// External Libraries
import React from "react";
import { AnimatePresence } from "framer-motion";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import { Container, Flag, Wrapper } from "./styles";

interface Props {
  isCompleted: boolean;
}

export const CompletedFlag: React.FC<Props> = ({ isCompleted }) => {
  return (
    <Container>
      {isCompleted ? (
        <AnimatePresence>
          <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Flag>
              <Typography $variant="p" fontWeight="bold">
                Completed
              </Typography>
            </Flag>
          </Wrapper>
        </AnimatePresence>
      ) : null}
    </Container>
  );
};
