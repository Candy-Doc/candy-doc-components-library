import { StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarElementProps } from "../../../components/Sidebar/Element";
import { CandyElementControl, meta } from "./ElementMeta";
import { sidebarElementWithOptionsTesting } from "./Element.test";
import { PopoverSide } from "../../../components/Popover";
import "../../../components/Sidebar/Element";

type Story = StoryObj<CandySidebarElementProps & CandyElementControl>;

const icon = "fa-solid fa-candy-cane";

const renderElement = (
  args: CandySidebarElementProps & CandyElementControl
) => html`<candy-sidebar-element
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
  ?collapsed=${args.collapsed}
  ?minimizeOptions=${args.minimizeOptions}
  optionsPopoverSide=${args.position}
>
  ${args.hasIcon ? html`<fa-icon slot="icon" class=${icon} size="2em"></fa-icon>` : null}
  ${args.hasOptions
    ? html`<fa-icon slot="options" class="fa-solid fa-location-crosshairs"></fa-icon
        ><fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>`
    : null}
</candy-sidebar-element>`;

export default {
  ...meta,
  title: "Components/Sidebar/Sidebar Element",
  render: renderElement,
};

export const SidebarElement: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: false,
  },
};

export const SidebarElementWithIcon: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: true,
    hasOptions: false,
  },
};

export const SidebarElementWithOptions: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    collapsed: false,
    hasIcon: true,
    hasOptions: true,
    minimizeOptions: true,
    position: PopoverSide.Left,
  },
  play: ({ canvasElement, step }) => sidebarElementWithOptionsTesting({ canvasElement, step }),
};
