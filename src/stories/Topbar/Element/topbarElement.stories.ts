import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { meta } from "./TopbarElementMeta";
import type { CandyTopbarElementProps } from "../../../components/Topbar/Element";
import "../../../components/Topbar/Element";

type Story = StoryObj<CandyTopbarElementProps>;

const renderTopBarElement = (args: CandyTopbarElementProps) => html` <candy-topbar-element
  label=${args.label}
></candy-topbar-element>`;

export default {
  ...meta,
  title: "Components/Topbar/Element",
  render: renderTopBarElement,
} as Meta<CandyTopbarElementProps>;

export const TopbarElement: Story = {
  args: {
    label: "toto",
  },
};
