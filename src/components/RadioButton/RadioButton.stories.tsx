import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  args: {
    name: "demo",
    label: "Option A",
    checked: false,
    disabled: false,
    accentColor: "#2563eb",
    disabledAccentColor: "#94a3b8",
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const On: Story = {};
export const Selected: Story = { args: { checked: true } };
export const Off: Story = { args: { disabled: true } };