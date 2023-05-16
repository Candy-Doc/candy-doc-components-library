import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySwitchProps } from "../components/Switch";
import "../components/Switch";

type Story = StoryObj<CandySwitchProps>;

const renderSwitch = (args: CandySwitchProps) =>
  html`<candy-switch ?activated=${args.activated}></candy-switch>`;

export default {
  title: "Components/Switch",
  component: "candy-switch",
  render: renderSwitch,
  argTypes: {
    activated: {
      description: "Boolean value of the switch",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "False",
        },
      },
    },
  },
} as Meta<CandySwitchProps>;

export const Switch: Story = {
  args: {
    activated: false,
  },
};
