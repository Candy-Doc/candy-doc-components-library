import { PopoverSide } from "../../components/Popover";

export const meta = {
  component: "candy-popover",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector:  \n- **popover**\n- **popover-arrow**\n- **popover-box**\n",
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
    contentSlot: {
      name: "content",
      description: "Slot containing elements inside the popover",
      table: {
        category: "Slots",
        type: {
          summary: "HTMLElement",
        },
      },
    },
  },
};
