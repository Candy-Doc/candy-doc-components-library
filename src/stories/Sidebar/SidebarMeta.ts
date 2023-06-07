import { Meta } from "@storybook/web-components";

import type { CandySidebarProps } from "../../components/Sidebar";
import "../../components/Sidebar";
import "../../components/Sidebar/Element";
import "../../components/Accordion";

export type CandySideBarElement = {
  label: string;
  active: boolean;
  icon?: string;
  optionsIcons?: Array<string>;
  childrens: Array<CandySideBarElement>;
};

export type CandySideBarControl = {
  elements: Array<CandySideBarElement>;
  isCollapse: boolean,
};

export const meta: Meta<CandySidebarProps & CandySideBarControl> = {
  component: "candy-sidebar",
  argTypes: {
    canCollapse: {
      name: "?canCollapse",
      description: "Show collapse icon",
      table: {
        type: {
          summary: "Boolean",
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    elements: {
      description:
        "List of sidebar elements information. /!\\ This argument is to build the items and is not passed inside the sidebar.",
      table: {
        type: {
          summary: "object[]",
        },
        defaultValue: {
          summary: "[]",
        },
      },
    },
    onCollapse: {
      description:
        "Event occured when the sidebar is being collapsed. Access the value by <strong><i>event.detail.value</i></strong>",
      table: {
        type: {
          summary: "Function",
        },
        defaultValue: {
          summary: "(e: CustomEvent) => void"
        }
      }
    }
  },
};
