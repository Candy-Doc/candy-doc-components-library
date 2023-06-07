import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarElementProps } from "../../../components/Sidebar/Element";
import "../../../components/Sidebar/Element";
import { meta } from "./ElementWithIconMeta";

type Story = StoryObj<CandySidebarElementProps>;

const icon = "fa-solid fa-candy-cane";

const renderIconElement = (args: CandySidebarElementProps) => html`<candy-sidebar-element
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
>
  <fa-icon slot="icon" class=${icon} size="2em"></fa-icon>
</candy-sidebar-element>`;

export default {
  ...meta,
  title: "Components/Sidebar/ElementWithIcon",
  render: renderIconElement,
} as Meta<CandySidebarElementProps>;

export const ElementWithIcon: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
  },
};
