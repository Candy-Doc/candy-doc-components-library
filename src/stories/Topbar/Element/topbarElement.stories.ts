import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { meta, type TopbarElementControl } from "./TopbarElementMeta";
import type { CandyTopbarElementProps } from "../../../components/Topbar/Element";
import "../../../components/Topbar/Element";

type Story = StoryObj<CandyTopbarElementProps & TopbarElementControl>;

const renderTopBarElement = (
  args: CandyTopbarElementProps & TopbarElementControl
) => html` <candy-topbar-element label=${args.label}>
  ${args.hasIcon
    ? html` <a slot="icon" href="https://github.com/Candy-Doc/candy-doc-components-library">
        <fa-icon class="fa-brands fa-github"></fa-icon>
      </a>`
    : null}
</candy-topbar-element>`;

export default {
  ...meta,
  title: "Components/Topbar/Element",
  render: renderTopBarElement,
} as Meta<CandyTopbarElementProps & TopbarElementControl>;

export const TopbarElement: Story = {
  args: {
    label: "toto",
    hasIcon: false,
  },
};

export const TopbarElementOnlyIcon: Story = {
  args: {
    label: "",
    hasIcon: true,
  },
};

export const TopbarElementWithIcon: Story = {
  args: {
    label: "toto",
    hasIcon: true,
  },
};
