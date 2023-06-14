import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyButtonProps, ButtonSizes, ButtonTypes } from "../../components/Button";
import "../../components/Button";
import { meta, type ButtonControl } from "./ButtonMeta";

type Story = StoryObj<CandyButtonProps & ButtonControl>;

const renderButton = (args: CandyButtonProps & ButtonControl) =>
  html`<candy-button label=${args.label} size=${args.size} type=${args.type}>
    ${args.hasIcon
      ? html`<fa-icon slot="icon" class="fa-solid fa-house"></fa-icon>` 
      : null}
  </candy-button>`;

export default {
  ...meta,
  title: "Components/Buttons",
  render: renderButton,
} as Meta<CandyButtonProps & ButtonControl>;

export const Button: Story = {
  args: {
    label: "Button",
    type: ButtonTypes.Primary,
    size: ButtonSizes.md,
    hasIcon: false,
  },
};

export const ButtonOnlyIcon: Story = {
  args: {
    label: "",
    type: ButtonTypes.Primary,
    size: ButtonSizes.md,
    hasIcon: true,
  },
};

export const ButtonWithIcon: Story = {
  args: {
    label: "Button",
    type: ButtonTypes.Primary,
    size: ButtonSizes.md,
    hasIcon: true,
  },
};
