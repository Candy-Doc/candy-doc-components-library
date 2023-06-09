import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarElementProps } from "../../../components/Sidebar/Element";
import "../../../components/Sidebar/Element";
import { meta } from "./ElementMeta";

type Story = StoryObj<CandySidebarElementProps>;

const renderElement = (args: CandySidebarElementProps) => html`<candy-sidebar-element
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
></candy-sidebar-element>`;

export default {
  ...meta,
  title: "Components/Sidebar/Element",
  render: renderElement,
} as Meta<CandySidebarElementProps>;

export const Element: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
  },
};
