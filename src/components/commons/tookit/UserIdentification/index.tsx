// External Libraries
import React from "react";
import { AnimatePresence } from "framer-motion";

// Components
import { Typography } from "../Typography";

// Utils
import { getInitialsUserName } from "./utils";

// Styles
import {
  Container,
  DropDown,
  AvatarGrid,
  UserIdentificationContant,
  Wrapper,
} from "./styles";

// Context & Hooks
import { useLogin } from "@contexts/AuthContext";
import { useUserSettings } from "./hooks/useUserSettings";
import { theme } from "@globals/theme";
import { colorOptions } from "./utils/getColorsOptions";
import { Button } from "../buttons/Button";

export const UserIdentification: React.FC = () => {
  const { user, logout } = useLogin();
  const { data, isOpen, onOpenChange, updateSettingsPatch } = useUserSettings({
    userId: user?.id,
  });

  const primaryColor = data?.colorSchema.primaryColor || theme.colors.secondary;
  const secondaryColor =
    data?.colorSchema.secondaryColor || theme.colors.primary;

  return (
    <Container
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <UserIdentificationContant $secundaryColor={secondaryColor}>
        <Typography $variant="p" color={primaryColor}>
          {getInitialsUserName(user?.email)}
        </Typography>
      </UserIdentificationContant>

      <AnimatePresence>
        {isOpen && (
          <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DropDown>
              <Typography $variant="p" fontWeight="bold">
                Change your avatar
              </Typography>

              <AvatarGrid>
                {colorOptions.map((option, index) => (
                  <UserIdentificationContant
                    key={index}
                    $secundaryColor={option.secondary}
                    onClick={() =>
                      updateSettingsPatch(option.primary, option.secondary)
                    }
                    style={{ width: "2.5rem", height: "2.5rem" }} // aumentar visualmente
                  >
                    <Typography $variant="p" color={option.primary}>
                      {getInitialsUserName(user?.email)}
                    </Typography>
                  </UserIdentificationContant>
                ))}
              </AvatarGrid>
              <Button label="Logout" onClick={logout} />
            </DropDown>
          </Wrapper>
        )}
      </AnimatePresence>
    </Container>
  );
};
