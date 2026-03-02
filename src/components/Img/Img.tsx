import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{
  $disabled: boolean;
  $w: string;
  $h: string;
  $r: string;
  $opacity: number;
  $dopacity: number;
}>`
  display: block;
  max-width: 100%;
  width: ${(p) => p.$w};
  height: ${(p) => p.$h};
  object-fit: cover;
  border-radius: ${(p) => p.$r};
  opacity: ${(p) => (p.$disabled ? p.$dopacity : p.$opacity)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  width = "320px",
  height = "180px",
  borderRadius = "16px",
  opacity = 1,
  disabledOpacity = 0.5,
}) => (
  <StyledImg
    src={src}
    alt={alt}
    $disabled={disabled}
    $w={width}
    $h={height}
    $r={borderRadius}
    $opacity={opacity}
    $dopacity={disabledOpacity}
  />
);