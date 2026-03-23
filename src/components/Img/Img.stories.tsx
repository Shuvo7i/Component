import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  args: {
    src: "https://picsum.photos/800/450",
    alt: "Random",
    disabled: false,
    width: "320px",
    height: "180px",
    borderRadius: "16px",
    opacity: 1,
    disabledOpacity: 0.5,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const On: Story = {};
export const Off: Story = { args: { disabled: true } };
