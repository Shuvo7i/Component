export type DropdownOption = { label: string; value: string };

export type DropdownProps = {
  label?: string;
  options: DropdownOption[];
  value?: string;
  disabled?: boolean;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  onChange?: (value: string) => void;
};
