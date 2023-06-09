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
  isCollapse: boolean;
};

export const meta: Meta<CandySidebarProps & CandySideBarControl> = {
  component: "candy-sidebar",
  argTypes: {
    canCollapse: {
      name: "canCollapse",
      description: "Show collapse icon",
      table: {
        category: "props",
        type: {
          summary: "Boolean",
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    onCollapse: {
      description:
        "Event occured when the sidebar is being collapsed. Access the value by <strong><i>event.detail.value</i></strong>",
      table: {
        category: "events",
        type: {
          summary: "Function",
        },
      },
    },
    elements: {
      table: {
        disable: true,
      },
    },
    defaultSlot: {
      name: "default",
      description: "Default slot containing children of the component",
      table: {
        category: "slots",
        type: {
          summary: "HTMLElement",
        },
      },
    },
  },
};
