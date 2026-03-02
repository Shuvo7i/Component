import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const sizeMap = { sm: "0.9rem", md: "1rem", lg: "1.1rem" };

const StyledText = styled.p<{
  $disabled: boolean;
  $color: string;
  $dcolor: string;
  $size: "sm" | "md" | "lg";
}>`
  margin: 0;
  max-width: 100%;
  line-height: 1.5;
  font-size: ${(p) => sizeMap[p.$size]};
  color: ${(p) => (p.$disabled ? p.$dcolor : p.$color)};
  opacity: ${(p) => (p.$disabled ? 0.75 : 1)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "text")};
  word-break: break-word;
`;

export const Text: React.FC<TextProps> = ({
  value,
  disabled = false,
  color = "#334155",
  disabledColor = "#94a3b8",
  size = "md",
}) => (
  <StyledText $disabled={disabled} $color={color} $dcolor={disabledColor} $size={size}>
    {value}
  </StyledText>
);