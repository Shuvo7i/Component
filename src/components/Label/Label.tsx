import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.span<{
  $disabled: boolean;
  $color: string;
  $dcolor: string;
}>`
  font-size: 5rem;

  color: ${(p) => (p.$disabled ? p.$dcolor : p.$color)};
  opacity: ${(p) => (p.$disabled ? 0.7 : 1)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
`;

export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  color = "#0f172a",
  disabledColor = "#94a3b8",
}) => (
  <StyledLabel $disabled={disabled} $color={color} $dcolor={disabledColor}>
    {text}
  </StyledLabel>
);
