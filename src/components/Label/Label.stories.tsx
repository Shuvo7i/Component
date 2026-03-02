import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  args: {
    text: "Label text",
    disabled: false,
    color: "#0f172a",
    disabledColor: "#94a3b8",
  },
  argTypes: {
    color: { control: "color" },
    disabledColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };