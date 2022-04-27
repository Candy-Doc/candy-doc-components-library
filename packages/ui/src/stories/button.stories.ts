import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Button/Button";
import { CandyButtonProps } from "../components/Button/Button";
import { ButtonSizes, ButtonTypes } from "../components/Button/Buttons";

export default {
  title: "Button",
  component: "candy-button",
  args: {
    label: "Click me",
  },
  argTypes: {
    size: {
      options: Object.values(ButtonSizes),
      control: { type: "select" },
      defaultValue: ButtonSizes.md,
    },
    type: {
      options: Object.values(ButtonTypes),
      control: { type: "select" },
      defaultValue: ButtonTypes.Primary,
    },
  },
} as Meta<CandyButtonProps>;

const Template: Story<CandyButtonProps> = (args) =>
  html`<candy-button label=${args.label} size=${args.size} type=${args.type}></candy-button>`;

export const Button = Template.bind({});
