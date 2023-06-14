import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarElementProps } from "../../../components/Sidebar/Element";
import "../../../components/Sidebar/Element";
import { CandyElementControl, meta } from "./ElementMeta";

type Story = StoryObj<CandySidebarElementProps & CandyElementControl>;

const icon = "fa-solid fa-candy-cane";

const renderElement = (
  args: CandySidebarElementProps & CandyElementControl
) => html`<candy-sidebar-element
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
  ?collapsed=${args.collapsed}
>
  ${args.hasIcon ? html`<fa-icon slot="icon" class=${icon} size="2em"></fa-icon>` : null}
  ${args.hasOptions
    ? html`<fa-icon slot="options" class="fa-solid fa-location-crosshairs"></fa-icon
      ><fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>`
    : null}
</candy-sidebar-element>`;

export default {
  ...meta,
  title: "Components/Sidebar/Element",
  render: renderElement,
} as Meta<CandySidebarElementProps & CandyElementControl>;

export const Element: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: false,
  },
};

export const ElementWithIcon: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: true,
    hasOptions: false,
  },
};

export const ElementWithOptions: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: true,
    hasOptions: true,
  },
};