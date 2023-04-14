import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { CandyButtonProps, ButtonSizes, ButtonTypes } from "../components/Button";
import "../components/Button";

type Story = StoryObj<CandyButtonProps>;

const renderButton = (args: CandyButtonProps) =>
  html`<candy-button label=${args.label} size=${args.size} type=${args.type}></candy-button>`;

export default {
  title: "Components/Buttons",
  component: "candy-button",
  argTypes: {
    type: {
      options: [ButtonTypes.Primary, ButtonTypes.Secondary, ButtonTypes.Warn, ButtonTypes.Danger],
      control: { type: "radio" },
    },
    size: {
      options: [ButtonSizes.sm, ButtonSizes.md, ButtonSizes.xl],
      control: { type: "radio" },
    },
  },
  render: renderButton,
} as Meta<CandyButtonProps>;

export const Buttons: Story = {
  args: {
    label: "Click me!",
    type: ButtonTypes.Primary,
    size: ButtonSizes.md,
  },
};
