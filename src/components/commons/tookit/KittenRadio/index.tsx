// External Libraries
import { FaHeart } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

// Styles
import { Container, CustomRadio, IconWrapper, Label } from "./styles";
import { theme } from "@globals/theme";

interface Props {
  label: string;
  value: string;
  selected: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const KittenRadio: React.FC<Props> = ({
  label,
  value,
  selected,
  onChange,
  disabled = false,
}) => {
  const isSelected = selected === value;

  return (
    <Container
      onClick={() => !disabled && onChange(value)}
      disabled={disabled}
    >
      <CustomRadio
        isSelected={isSelected}
        animate={{
          backgroundColor: isSelected
            ? theme.colors.primary
            : "transparent",
          borderColor: isSelected
            ? theme.colors.primary
            : theme.colors.borders.gray,
        }}
        transition={{ duration: 0.3 }}
        disabled={disabled}
      >
        <AnimatePresence>
          {isSelected ? (
            <IconWrapper
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <FaHeart size={10} />
            </IconWrapper>
          ) : null}
        </AnimatePresence>
      </CustomRadio>
      <Label>{label}</Label>
    </Container>
  );
};
