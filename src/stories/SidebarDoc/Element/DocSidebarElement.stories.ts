import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarDocElementProps } from "../../../components/SidebarDoc/DocElement";
import "../../../components/SidebarDoc/DocElement";

type Story = StoryObj<CandySidebarDocElementProps>;

const renderElement = (args: CandySidebarDocElementProps) => html`<candy-sidebar-doc-element
  label=${args.label}
  ?active=${args.active}
></candy-sidebar-doc-element>`;

export default {
  title: "Components/SidebarDoc/DocElement",
  component: "candy-sidebar-doc-element",
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
} as Meta<CandySidebarDocElementProps>;

export const Element: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
  },
};
