import { PopoverSide } from "../../components/Popover";

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
    targetId: {
      description: "Id of the target which the component will anchor to",
      table: {
        category: "props",
        type: {
          summary: "string",
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
      description:
        "State of the parent container. Allow popover to hide while being active if a container is being hidden",
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
    isTargetInShadowRoot: {
      description:
        "Meant to be defined when the popover is being used inside a ShadowRoot context. When true, the component will search for the targetId inside the parent's ShadowRoot if existing",
      table: {
        category: "props",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
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
