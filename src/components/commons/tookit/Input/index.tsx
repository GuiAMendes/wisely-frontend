// External Libraries
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Components
import { Typography } from "@components/tookit/Typography";


// Styles
import { Container, StyledInput, ToggleIcon } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  // States
  const [showPassword, setShowPassword] = useState(false);

  // Constants
  const inputType =
    props.type === "password" && showPassword ? "text" : props.type;

  // Functions
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container>
      <Typography variant="p">{label}</Typography>

      <StyledInput {...props} type={inputType} />

      {props.type === "password" && (
        <ToggleIcon onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </ToggleIcon>
      )}
    </Container>
  );
};
