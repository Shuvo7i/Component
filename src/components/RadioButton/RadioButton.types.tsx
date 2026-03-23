export type RadioButtonProps = {
  name: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  accentColor?: string;
  disabledAccentColor?: string;
};
