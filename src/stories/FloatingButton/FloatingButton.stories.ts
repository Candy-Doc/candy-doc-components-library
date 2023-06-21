import {FloatingButtonControl, meta} from "./FloatingButtonMeta";
import {Meta, StoryObj} from "@storybook/web-components";

import {html} from "lit";
import "../../components/FloatingButton"
import {CandyFloatingButtonProps} from "../../components/FloatingButton/FloatingButton";
import {ButtonSizes, ButtonTypes} from "../../components/Button";
import {FloatingButtonsPosition} from "../../components/FloatingButton/FloatingButtons";

type Story = StoryObj<CandyFloatingButtonProps & FloatingButtonControl>

const renderButton = (args: CandyFloatingButtonProps & FloatingButtonControl) =>
html`
  <div style="height: 120px; overflow-y: scroll">
    <div style="height: 1000px; background-image: linear-gradient(to bottom, #7BC6CC, #BE93C5)">
      <candy-floating-button label=${args.label ? args.label : null} size=${args.size} color=${args.color} position=${args.position}>
        ${args.hasIcon
            ? html`<fa-icon slot="icon" class="fa-solid fa-arrow-up"></fa-icon>`
            : null}
      </candy-floating-button>
    </div>
  </div>
`;

export default {
  ...meta,
  title: "Components/FloatingButton",
  render:renderButton
} as Meta<CandyFloatingButtonProps & FloatingButtonControl>

export const FloatingButton: Story = {
  args: {
    size: ButtonSizes.md,
    color: "#f0f",
    position: FloatingButtonsPosition.br,
    hasIcon: true
  }
};

export const FloatingButtonWithText: Story = {
  args: {
    label: "Click on me",
    color: "#f0f",
    size: ButtonSizes.md,
    position: FloatingButtonsPosition.br,
    hasIcon: true
  }
};

export const FloatingButtonWithTextOnly: Story = {
  args: {
    label: "Click on me",
    size: ButtonSizes.md,
    color: "#f0f",
    position: FloatingButtonsPosition.br,
    hasIcon: false
  }
};