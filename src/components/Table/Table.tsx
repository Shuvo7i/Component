import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const Wrap = styled.div`
  width: min(980px, 100%);
  overflow-x: auto;
`;

const StyledTable = styled.table<{
  $disabled: boolean;
  $bg: string;
  $dbg: string;
}>`
  width: 100%;
  border-collapse: collapse;
  min-width: 520px;
  background: ${(p) => (p.$disabled ? p.$dbg : p.$bg)};
  opacity: ${(p) => (p.$disabled ? 0.85 : 1)};
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "default")};
  border-radius: 16px;
  overflow: hidden;

  th, td {
    border-bottom: 1px solid #e2e8f0;
    padding: 12px;
  }

  @media (max-width: 480px) {
    min-width: 420px;
    th, td { padding: 10px; }
  }
`;

export const Table: React.FC<TableProps> = ({
  disabled = false,
  backgroundColor = "#ffffff",
  disabledBackgroundColor = "#e2e8f0",
  children,
}) => (
  <Wrap>
    <StyledTable
      role="table"
      $disabled={disabled}
      $bg={backgroundColor}
      $dbg={disabledBackgroundColor}
    >
      {children}
    </StyledTable>
  </Wrap>
);