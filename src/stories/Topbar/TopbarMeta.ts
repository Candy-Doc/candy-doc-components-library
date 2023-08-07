import { Meta } from "@storybook/web-components";
import { CandyTopbarProps } from "../../components/Topbar";

export type CandyTopbarControl = {
  onChange: () => void;
  drawerContentSlot: string;
  defaultSlot: string;
};

export const meta: Meta<CandyTopbarProps & CandyTopbarControl> = {
  component: "candy-topbar",
  parameters: {
    docs: {
      description: {
        component:
          "CSS part selector: \n- **topbar** \n- **tobpar-burger** \n- **tobpar-drawer** \n- **tobpar-drawer-content** \n- **tobpar-drawer-box**",
      },
    },
  },
  argTypes: {
    isopen: {
      description: "Handle opening of the topbar's drawer when in mobile view.",
      table: {
        category: "props",
        type: {
          summary: "Boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    onChange: {
      name: "onchange",
      description: "Custom event triggered on new open value. It returns the new open value",
      table: {
        category: "events",
        type: {
          summary: "Function",
        },
      },
    },
    drawerContentSlot: {
      name: "drawer-content",
      description: "Slot containing the additional content for mobile view",
      table: {
        category: "Slots",
        type: {
          summary: "HTMLElement",
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
