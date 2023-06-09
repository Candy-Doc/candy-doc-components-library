import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { meta } from "./TopbarElementMeta";
import type { CandyTopbarElementProps } from "../../../components/Topbar/Element";
import "../../../components/Topbar/Element";

type Story = StoryObj<CandyTopbarElementProps>;

const renderTopBarElement = (args: CandyTopbarElementProps) => html`<candy-topbar-element
  label=${args.label}
>
  <fa-icon slot="icon" class="fa-brands fa-github"></fa-icon>
</candy-topbar-element> `;

export default {
  ...meta,
  title: "Components/Topbar/ElementWithIcon",
  render: renderTopBarElement,
} as Meta<CandyTopbarElementProps>;

export const TopbarElement: Story = {
  args: {
    label: "Github",
  },
};
