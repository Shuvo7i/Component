import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  args: {
    title: "Title",
    subtitle: "A short subtitle goes here",
    imageUrl: "https://picsum.photos/1200/600",
    disabled: false,
    overlayColor: "rgba(15, 23, 42, 1)",
    disabledOverlayColor: "rgba(148, 163, 184, 1)",
  },

  parameters: {
    layout: "centered",
  },
  argTypes: {
    overlayColor: { control: "text" },
    disabledOverlayColor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const On: Story = {};
export const Off: Story = { args: { disabled: true } };