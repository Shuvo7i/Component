import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    title: " Title",
    body: " Content goes here.",
    disabled: false,
    backgroundColor: "#ffffff",
    disabledBackgroundColor: "#e2e8f0",
  },

  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    disabledBackgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const On: Story = {};
export const Off: Story = { args: { disabled: true } };
