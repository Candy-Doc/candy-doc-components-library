import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyButtonProps, ButtonSizes, ButtonTypes } from "../../components/Button";
import "../../components/Button";
import { meta } from "./ButtonMeta";

type Story = StoryObj<CandyButtonProps>;

const renderButton = (args: CandyButtonProps) =>
  html`<candy-button label=${args.label} size=${args.size} type=${args.type}></candy-button>`;

export default {
  ...meta,
  title: "Components/Buttons",
  render: renderButton,
} as Meta<CandyButtonProps>;

export const Buttons: Story = {
  args: {
    label: "Button",
    type: ButtonTypes.Primary,
    size: ButtonSizes.md,
  },
};
