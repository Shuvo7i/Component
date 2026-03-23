import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const Wrap = styled.article<{
  $disabled: boolean;
  $bg: string;
  $dbg: string;
}>`
  width: min(520px, 100%);
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 6px 20px rgba(2, 6, 23, 0.08);
  background: ${(p) => (p.$disabled ? p.$dbg : p.$bg)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
  opacity: ${(p) => (p.$disabled ? 0.5 : 1)};
`;

const Title = styled.h3`
  text-align: center;
`;

const Body = styled.p`
  text-align: center;
`;

export const Card: React.FC<CardProps> = ({
  title,
  body,
  disabled = false,
  backgroundColor = "#ffffff",
  disabledBackgroundColor = "#2c2e30",
}) => (
  <Wrap
    $disabled={disabled}
    $bg={backgroundColor}
    $dbg={disabledBackgroundColor}
  >
    <Title>{title}</Title>
    <Body>{body}</Body>
  </Wrap>
);
