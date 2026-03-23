import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{
  $disabled: boolean;
  $bg: string;
  $dbg: string;
  $color: string;
}>`
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 700;

  max-width: 100%;
  background: ${(p) => (p.$disabled ? p.$dbg : p.$bg)};
  color: ${(p) => p.$color};
  opacity: ${(p) => (p.$disabled ? 0.75 : 1)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  backgroundColor = "#2563eb",
  disabledBackgroundColor = "#cbd5e1",
  textColor = "#ffffff",
  onClick,
}) => {
  return (
    <StyledButton
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      $disabled={disabled}
      $bg={backgroundColor}
      $dbg={disabledBackgroundColor}
      $color={textColor}
    >
      {label}
    </StyledButton>
  );
};
const x = 11