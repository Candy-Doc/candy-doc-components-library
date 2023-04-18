import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandySidebarElementProps } from "../../../components/Sidebar/Element";
import "../../../components/Sidebar/Element";

type Story = StoryObj<CandySidebarElementProps>;

const renderIconElement = (args: CandySidebarElementProps) => html`<candy-sidebar-element
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
  icon=${args.icon}
>
  <fa-icon slot="icon" class=${args.icon} size="2em"></fa-icon>
</candy-sidebar-element>`;

export default {
  title: "Components/Sidebar/ElementWithIcon",
  component: "candy-sidebar-element",
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
    icon: {
      description:
        "Fontawesome icon classess <br/> Icon not directly included in the candy-element you have to manually wrap it inside <candy-sidebar-element> using slot='icon' attribute on the fa-icon",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
  },
  render: renderIconElement,
} as Meta<CandySidebarElementProps>;

export const ElementWithIcon: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    icon: "fa-solid fa-candy-cane",
  },
};
