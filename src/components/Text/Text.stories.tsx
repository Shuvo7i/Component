import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  args: {
    value: "Some text content",
    disabled: false,
    color: "#334155",
    disabledColor: "#94a3b8",
    size: "md",
  },
  argTypes: {
    color: { control: "color" },
    disabledColor: { control: "color" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
