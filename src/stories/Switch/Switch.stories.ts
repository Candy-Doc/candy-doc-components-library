import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySwitchProps } from "../../components/Switch";
import { meta } from "./SwitchMeta";
import { playFunction } from "./Switch.test";
import "../../components/Switch";

type Story = StoryObj<CandySwitchProps>;

const isActive = { value: false };

const renderSwitch = (args: CandySwitchProps) =>
  html`<candy-switch
    ?activated=${args.activated}
    @onChange=${({ detail }: CustomEvent) => (isActive.value = detail.value)}
  ></candy-switch>`;

export default {
  ...meta,
  title: "Components/Switch",
  render: renderSwitch,
} as Meta<CandySwitchProps>;

export const Switch: Story = {
  args: {
    activated: false,
  },
  play: async ({ args, canvasElement, step }) =>
    playFunction({ args, canvasElement, step }, isActive),
};
