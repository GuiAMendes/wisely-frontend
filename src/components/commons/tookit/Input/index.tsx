// External Libraries
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Components
import { Typography } from "@components/tookit/Typography";

// Styles
import { Container, StyledInput, ToggleIcon } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChangeText: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
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
      <Typography $variant="p">{label}</Typography>

      <StyledInput {...props} type={inputType} onChange={handleChange} />

      {props.type === "password" && (
        <ToggleIcon onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </ToggleIcon>
      )}
    </Container>
  );
};
