import { Meta } from "@storybook/web-components";

import { CandyAccordionProps } from "../../components/Accordion";
import { PopoverSide } from "../../components/Popover";

export type AccordionControl = {
  hasIcon: boolean;
  hasOptions: boolean;
  onChange: () => void;
  disabled: boolean;
  iconSlot: string;
  optionsSlot: string;
  defaultSlot: string;
};

export const meta: Meta<CandyAccordionProps & AccordionControl> = {
  component: "candy-accordion",
  parameters: {
    docs: {
      description: {
        component:
          "CSS part selector: \n- **accordion**\n- **accordion-button**\n- **accordion-text**\n- **accordion-chevron**",
      },
    },
  },
  argTypes: {
    label: {
      description: "Label of the element",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Home",
        },
      },
    },
    active: {
      name: "active",
      description: "Expand the accordion",
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
    disabled: {
      name: "disabled",
      description: "Is the item disabled",
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
    minimizeOptions: {
      description:
        "Replace the options slots by a menu icon and put the options content inside a popover",
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
    optionsPopoverSide: {
      description: "Side of the options' popover",
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
    onChange: {
      name: "onChange",
      description:
        "Custom event fired when clicking on the component. Access the value using `event.detail.value`",
      table: {
        category: "events",
        type: {
          summary: "Function",
        },
      },
    },
    iconSlot: {
      name: "icon",
      description: "Slot to set an icon at the left of the accordion",
      table: {
        category: "Slots",
        type: {
          summary: "HTMLElement",
        },
        defaultValue: {
          summary: "icon",
        },
      },
    },
    optionsSlot: {
      name: "options",
      description: "Slot to set icon(s) at the end of the accordion before the arrow icon",
      table: {
        category: "Slots",
        type: {
          summary: "HTMLElement",
        },
        defaultValue: {
          summary: "options",
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
    hasIcon: {
      table: {
        disable: true,
      },
    },
    hasOptions: {
      table: {
        disable: true,
      },
    },
  },
};
