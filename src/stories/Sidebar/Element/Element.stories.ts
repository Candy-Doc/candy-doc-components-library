import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarElementProps } from "../../../components/Sidebar/Element";
import "../../../components/Sidebar/Element";

type Story = StoryObj<CandySidebarElementProps>;

const renderElement = (args: CandySidebarElementProps) => html`<candy-sidebar-element
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
></candy-sidebar-element>`;

export default {
  title: "Components/Sidebar/Element",
  component: "candy-sidebar-element",
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
    disabled: {
      name: "?disabled",
      description: "Is the item disabled",
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
} as Meta<CandySidebarElementProps>;

export const Element: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
  },
};
