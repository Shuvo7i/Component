import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
    disabled: false,
    backgroundColor: "#2563eb",
    disabledBackgroundColor: "#cbd5e1",
    textColor: "#ffffff",
    
  },
   parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    disabledBackgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const On: Story = {};
export const Off: Story = { args: {
  disabled: true,
  
} };