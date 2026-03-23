import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./Table.types";

const Td = styled.td<{
  $disabled: boolean;
  $bg: string;
  $dbg: string;
  $align: string;
}>`
  text-align: ${(p) => p.$align};
  background: ${(p) => (p.$disabled ? p.$dbg : p.$bg)};
  color: ${(p) => (p.$disabled ? "#64748b" : "#0f172a")};
`;

export const TableCell: React.FC<TableCellProps> = ({
  disabled = false,
  backgroundColor = "transparent",
  disabledBackgroundColor = "#e2e8f0",
  align = "left",
  children,
}) => (
  <Td
    $disabled={disabled}
    $bg={backgroundColor}
    $dbg={disabledBackgroundColor}
    $align={align}
  >
    {children}
  </Td>
);
