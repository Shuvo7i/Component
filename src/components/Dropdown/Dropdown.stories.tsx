import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    label: "Which one you like?",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
    ],
    value: "",
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
type Story = StoryObj<typeof Dropdown>;

export const On: Story = {};
export const Off: Story = { args: { disabled: true } };
