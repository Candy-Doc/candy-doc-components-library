import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../components/FloatingButton";
import { CandyFloatingButtonProps } from "../../components/FloatingButton/FloatingButton";
import { ButtonSizes } from "../../components/Button";
import {
  FloatingButtonAnchor,
  FloatingButtonsPosition,
} from "../../components/FloatingButton/FloatingButtons";
import { meta } from "./FloatingButtonMeta";

type Story = StoryObj<CandyFloatingButtonProps>;

const scrollTopParent = (event: PointerEvent) => {
  const target = event.target as HTMLElement;
  const parent = target.parentNode?.parentNode as HTMLElement;
  parent.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollTopWindow = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const renderButton = (args: CandyFloatingButtonProps) =>
  html`
    <div style="height: 120px; overflow-y: scroll">
      <div
        id="divParent"
        style="height: 1000px; background-image: linear-gradient(to bottom, #ddd, #aaa)"
      >
        <candy-floating-button
          @click=${args.anchor === FloatingButtonAnchor.window ? scrollTopWindow : scrollTopParent}
          label=${args.label ? args.label : null}
          size=${args.size}
          color=${args.color}
          position=${args.position}
          anchor=${args.anchor}
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
    color: "#2563EBFF",
    size: ButtonSizes.md,
    position: FloatingButtonsPosition.br,
    anchor: FloatingButtonAnchor.parent,
  },
};
export const FloatingButtonWithText: Story = {
  args: {
    label: "Click on it",
    color: "#2563EBFF",
    size: ButtonSizes.md,
    position: FloatingButtonsPosition.bl,
    anchor: FloatingButtonAnchor.parent,
  },
};
export const FloatingButtonWithWindowAnchor: Story = {
  args: {
    color: "#2563EBFF",
    size: ButtonSizes.md,
    position: FloatingButtonsPosition.br,
    anchor: FloatingButtonAnchor.window,
  },
};
