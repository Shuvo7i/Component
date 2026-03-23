import React from "react";
import styled from "styled-components";
import { TableSectionProps } from "./Table.types";

const Tr = styled.tr<{ $disabled: boolean }>`
  opacity: ${(p) => (p.$disabled ? 0.8 : 1)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
`;

export const TableRow: React.FC<TableSectionProps> = ({
  disabled = false,
  children,
}) => <Tr $disabled={disabled}>{children}</Tr>;
