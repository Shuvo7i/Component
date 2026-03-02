import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const Wrap = styled.div`
  width: min(420px, 100%);
`;

const LabelText = styled.label<{ $disabled: boolean }>`
  color: ${(p) => (p.$disabled ? "#94a3b8" : "#0f172a")};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
`;

const Select = styled.select<{
  $disabled: boolean;
  $bg: string;
  $dbg: string;
}>`
  width: 100%;
  padding: 12px;
  background: ${(p) => (p.$disabled ? p.$dbg : p.$bg)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(p) => (p.$disabled ? 0.8 : 1)};
  font-size: 1rem;

`;

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  disabled = false,
  backgroundColor = "#ffffff",
  disabledBackgroundColor = "#e2e8f0",
  onChange,
}) => (
  <Wrap>
    {label ? <LabelText $disabled={disabled}>{label}</LabelText> : null}
    <Select
      aria-label={label ?? "dropdown"}
      value={value ?? ""}
      disabled={disabled}
      $disabled={disabled}
      $bg={backgroundColor}
      $dbg={disabledBackgroundColor}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </Select>
  </Wrap>
);