import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const Wrap = styled.section<{
  $img: string;
  $disabled: boolean;
  $overlay: string;
  $doverlay: string;
}>`
  position: relative;
  background-image: url(${(p) => p.$img});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(p) => (p.$disabled ? p.$doverlay : p.$overlay)};
    opacity: ${(p) => (p.$disabled ? 0.7 : 0.55)};
  }
`;

const Content = styled.div<{ $disabled: boolean }>`
  position: relative;
  padding: 52px;
  color: #fff;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
  opacity: ${(p) => (p.$disabled ? 0.85 : 1)};
`;

const Title = styled.h2`
  margin: 0 0 6px 0;
  font-size: 1.6rem;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.95;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  title,
  subtitle,
  imageUrl,
  disabled = false,
  overlayColor = "rgba(15, 23, 42, 1)",
  disabledOverlayColor = "rgba(148, 163, 184, 1)",
}) => (
  <Wrap
    $img={imageUrl}
    $disabled={disabled}
    $overlay={overlayColor}
    $doverlay={disabledOverlayColor}
    aria-disabled={disabled}
  >
    <Content $disabled={disabled}>
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    </Content>
  </Wrap>
);
