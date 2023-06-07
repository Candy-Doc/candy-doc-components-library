import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarDocElementProps } from "../../../components/SidebarDoc/DocElement";
import "../../../components/SidebarDoc/DocElement";
import { meta } from "../DocSidebarMeta";

type Story = StoryObj<CandySidebarDocElementProps>;

const renderElement = (args: CandySidebarDocElementProps) => html`<candy-sidebar-doc-element
  label=${args.label}
  ?active=${args.active}
></candy-sidebar-doc-element>`;

export default {
  ...meta,
  title: "Components/SidebarDoc/DocElement",
  render: renderElement,
} as Meta<CandySidebarDocElementProps>;

export const Element: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
  },
};
