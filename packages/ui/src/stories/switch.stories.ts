import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySwitchProps } from "../components/Switch/Switch";
import "../components/Switch/Switch";

export default {
  title: "Switch",
  component: "candy-switch",
  args: {
    activated: false,
  },
} as Meta<CandySwitchProps>;

const Template: Story<CandySwitchProps> = (args) =>
  html`<candy-switch ?activated=${args.activated} />`;

export const Switch = Template.bind({});
