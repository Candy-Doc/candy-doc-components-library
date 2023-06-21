import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../components/FloatingButton";
import { CandyFloatingButtonProps } from "../../components/FloatingButton/FloatingButton";
import { ButtonSizes } from "../../components/Button";
import { FloatingButtonsPosition } from "../../components/FloatingButton/FloatingButtons";
import { meta } from "./FloatingButtonMeta";

type Story = StoryObj<CandyFloatingButtonProps>;

const renderButton = (args: CandyFloatingButtonProps) =>
  html`
    <div style="height: 120px; overflow-y: scroll">
      <div style="height: 1000px; background-image: linear-gradient(to bottom, #ddd, #aaa)">
        <candy-floating-button
          label=${args.label ? args.label : null}
          size=${args.size}
          color=${args.color}
          position=${args.position}
        >
          <fa-icon slot="icon" class="fa-solid fa-arrow-up"></fa-icon>
        </candy-floating-button>
      </div>
    </div>
  `;

export default {
  ...meta,
  title: "Components/FloatingButton",
  render: renderButton,
} as Meta<CandyFloatingButtonProps>;

export const FloatingButton: Story = {
  args: {
    size: ButtonSizes.md,
    color: "#2563EBFF",
    position: FloatingButtonsPosition.br,
  },
};

export const FloatingButtonWithText: Story = {
  args: {
    label: "Click on me",
    color: "#2563EBFF",
    size: ButtonSizes.md,
    position: FloatingButtonsPosition.br,
  },
};
