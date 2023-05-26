import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarDocTitleProps } from "../../../components/SidebarDoc/DocTitle";
import "../../../components/SidebarDoc/DocElement";
import "../../../components/SidebarDoc/DocTitle";

type Story = StoryObj<CandySidebarDocTitleProps>;

const renderElement = (args: CandySidebarDocTitleProps) => html`<candy-sidebar-doc-title
  label=${args.label}
  ?active=${args.active}
>
  <candy-sidebar-doc-element label="Getting started"></candy-sidebar-doc-element>
</candy-sidebar-doc-title>`;

export default {
  title: "Components/SidebarDoc/DocTitle",
  component: "candy-sidebar-doc-title",
  render: renderElement,
  argTypes: {
    label: {
      description: "Label of the element",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Home",
        },
      },
    },
    active: {
      name: "?active",
      description: "Is the item the selected one",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "False",
        },
      },
    },
  },
} as Meta<CandySidebarDocTitleProps>;

export const Title: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
  },
};
