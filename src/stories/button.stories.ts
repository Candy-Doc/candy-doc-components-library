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
    label: {
      description: "Text displayed on the button",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Button",
        },
      },
      control: { type: "text" },
    },
    type: {
      description: "Define the color scheme of the button",
      options: Object.values(ButtonTypes),
      control: { type: "radio" },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: ButtonTypes.Primary,
        },
      },
    },
    size: {
      description: "Define the size of the button",
      options: Object.values(ButtonSizes),
      control: { type: "radio" },
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: ButtonSizes.md,
        },
      },
    },
  },
  render: renderButton,
} as Meta<CandyButtonProps>;

export const Buttons: Story = {
  args: {
    label: "Button",
    type: ButtonTypes.Primary,
    size: ButtonSizes.md,
  },
};
