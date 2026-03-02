import React from "react";
import styled from "styled-components";
import { TableSectionProps } from "./Table.types";

const Tfoot = styled.tfoot<{
  $disabled: boolean;
  $bg: string;
  $dbg: string;
}>`
  background: ${(p) => (p.$disabled ? p.$dbg : p.$bg)};
  color: ${(p) => (p.$disabled ? "#64748b" : "#0f172a")};
  font-weight: 600;
`;

export const TableFooter: React.FC<TableSectionProps> = ({
  disabled = false,
  backgroundColor = "#f8fafc",
  disabledBackgroundColor = "#cbd5e1",
  children,
}) => (
  <Tfoot $disabled={disabled} $bg={backgroundColor} $dbg={disabledBackgroundColor}>
    {children}
  </Tfoot>
);