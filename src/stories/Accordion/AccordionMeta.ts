export type AccordionControl = {
  hasIcon: boolean;
};

export const meta = {
  component: "candy-accordion",
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
          summary: "False",
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
          summary: "False",
        },
      },
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
  },
};
