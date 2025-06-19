import React from "react";
import { TextAreaContainer, StyledTextArea } from "./styles";
import { Typography } from "../Typography";
import { theme } from "@globals/theme";

interface TextAreaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  errors?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  errors,
}) => {
  return (
    <TextAreaContainer>
      <Typography $variant="p" fontWeight="bold">
        {label}
      </Typography>

      <StyledTextArea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        $hasError={!!errors}
      />

      {errors && (
        <Typography $variant="p" color={theme.colors.borders.error}>
          {errors}
        </Typography>
      )}
    </TextAreaContainer>
  );
};
