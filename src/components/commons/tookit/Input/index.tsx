// External Libraries
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import {
  Container,
  InputMessageWrapper,
  InputWrapper,
  StyledInput,
  ToggleIcon,
} from "./styles";
import { theme } from "@globals/theme";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: string;
  onChangeText: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  errors,
  onChangeText,
  ...props
}) => {
  // States
  const [showPassword, setShowPassword] = useState(false);

  // Constants
  const inputType =
    props.type === "password" && showPassword ? "text" : props.type;

  // Functions
  function handleTogglePassword() {
    setShowPassword((prev) => !prev);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChangeText(e.target.value);
  }

  return (
    <Container>
      <Typography $variant="p" fontWeight="bold">
        {label}
      </Typography>

      <InputMessageWrapper>
        {errors ? (
          <Typography $variant="p" color={theme.colors.borders.error}>
            {errors}
          </Typography>
        ) : null}

        <InputWrapper>
          <StyledInput
            {...props}
            $hasError={!!errors}
            type={inputType}
            onChange={handleChange}
          />

          {props.type === "password" && (
            <ToggleIcon onClick={handleTogglePassword}>
              {showPassword ? (
                <FaEyeSlash color={theme.colors.text.secondary} />
              ) : (
                <FaEye color={theme.colors.text.secondary} />
              )}
            </ToggleIcon>
          )}
        </InputWrapper>
      </InputMessageWrapper>
    </Container>
  );
};
