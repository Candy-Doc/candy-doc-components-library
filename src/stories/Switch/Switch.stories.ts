import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";
import { getByShadowRole } from "shadow-dom-testing-library";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { CandySwitchProps } from "../../components/Switch";
import { meta } from "./SwitchMeta";
import "../../components/Switch";

type Story = StoryObj<CandySwitchProps>;

let isActive = false;

const renderSwitch = (args: CandySwitchProps) =>
  html`<candy-switch ?activated=${args.activated} @onChange=${({ detail }: CustomEvent) => isActive = detail.value}></candy-switch>`;

export default {
  ...meta,
  title: "Components/Switch",
  render: renderSwitch,
} as Meta<CandySwitchProps>;

export const Switch: Story = {
  args: {
    activated: false,
  },
  play: async ({ args, canvasElement, step }) => {
    const button = getByShadowRole(canvasElement, "switch");
    const initialSwitchState = args.activated;

    await step("Active", async () => {
      await userEvent.click(button);
      await expect(isActive).toEqual(!initialSwitchState);
    });
    await step("Disactive", async () => {
      await userEvent.click(button);
      await expect(isActive).toEqual(initialSwitchState);
    });
  },
};
