export type TableProps = {
  disabled?: boolean;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  children: React.ReactNode;
};

export type TableSectionProps = {
  disabled?: boolean;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  children: React.ReactNode;
};

export type TableCellProps = {
  disabled?: boolean;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  children: React.ReactNode;
  align?: "left" | "center" | "right";
};