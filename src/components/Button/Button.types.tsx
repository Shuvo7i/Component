import React from "react";

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  textColor?: string;
  
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};