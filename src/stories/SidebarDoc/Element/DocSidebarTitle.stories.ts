import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarDocTitleProps } from "../../../components/SidebarDoc/DocTitle";
import "../../../components/SidebarDoc/DocElement";
import "../../../components/SidebarDoc/DocTitle";
import { meta } from "../DocSidebarMeta";

type Story = StoryObj<CandySidebarDocTitleProps>;

const renderElement = (args: CandySidebarDocTitleProps) => html`<candy-sidebar-doc-title
  label=${args.label}
  ?active=${args.active}
>
  <candy-sidebar-doc-element label="Getting started"></candy-sidebar-doc-element>
</candy-sidebar-doc-title>`;

export default {
  ...meta,
  title: "Components/SidebarDoc/DocTitle",
  render: renderElement,
} as Meta<CandySidebarDocTitleProps>;

export const Title: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
  },
};
