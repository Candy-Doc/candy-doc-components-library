import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySwitchProps } from "../../components/Switch";
import "../../components/Switch";
import { meta } from "./SwitchMeta";

type Story = StoryObj<CandySwitchProps>;

const renderSwitch = (args: CandySwitchProps) =>
  html`<candy-switch ?activated=${args.activated}></candy-switch>`;

export default {
  ...meta,
  title: "Components/Switch",
  render: renderSwitch,
} as Meta<CandySwitchProps>;

export const Switch: Story = {
  args: {
    activated: false,
  },
};
