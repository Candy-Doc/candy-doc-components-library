import { CandySideBarElement } from "../Sidebar/SidebarMeta";
import { PopoverSide } from "../../components/Popover";

export type PopoverControl = {
  elements: CandySideBarElement;
};

export const meta = {
  component: "candy-popover",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **popover**",
      },
    },
  },
  argTypes: {
    side: {
      description: "Side of the content from the anchored element",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: PopoverSide.Right,
        },
      },
      options: Object.values(PopoverSide),
      control: { type: "radio" },
    },
    target: {
      description: "Target which the component will anchor to",
      table: {
        category: "props",
        type: {
          summary: "HTMLElement",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    isActive: {
      description: "State of the component. Determine if it is visible or not",
      table: {
        category: "props",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
    },
    isParentVisible: {
      description: "State of the parent container. Allow popover to hide while being active if a container is being hidden",
      table: {
        category: "props",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
    },
    defaultSlot: {
      name: "default",
      description: "Default slot containing children of the component",
      table: {
        category: "Slots",
        type: {
          summary: "HTMLElement",
        },
      },
    },
  },
};
