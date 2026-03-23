import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Wrap = styled.label<{ $disabled: boolean }>`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(p) => (p.$disabled ? 0.75 : 1)};
  user-select: none;
`;

const Input = styled.input<{
  $disabled: boolean;
  $accent: string;
  $daccent: string;
}>`
  width: 18px;
  height: 18px;
  accent-color: ${(p) => (p.$disabled ? p.$daccent : p.$accent)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
`;

const TextLabel = styled.span<{ $disabled: boolean }>`
  font-weight: 700;
  color: ${(p) => (p.$disabled ? "#94a3b8" : "#0f172a")};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  checked = false,
  disabled = false,
  onChange,
  accentColor = "#2563eb",
  disabledAccentColor = "#94a3b8",
}) => (
  <Wrap $disabled={disabled}>
    <Input
      type="radio"
      name={name}
      aria-label={label}
      checked={checked}
      disabled={disabled}
      $disabled={disabled}
      $accent={accentColor}
      $daccent={disabledAccentColor}
      onChange={(e) => onChange?.(e.target.checked)}
    />
    <TextLabel $disabled={disabled}>{label}</TextLabel>
  </Wrap>
);
