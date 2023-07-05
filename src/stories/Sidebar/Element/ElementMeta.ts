export type CandyElementControl = {
  hasIcon: boolean;
  hasOptions: boolean;
};

export const meta = {
  component: "candy-sidebar-element",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: \n- **sidebar-element**\n- **sidebar-element-text**",
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
          summary: "",
        },
      },
    },
    active: {
      name: "active",
      description: "Is the item the selected one",
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
    collapsed: {
      description: "Turn the element to a collapsed version. Only the icon is still displayed",
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
    iconSlot: {
      name: "icon",
      description: "Slot for the element's icon",
      table: {
        category: "slots",
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
      description: "Slot for the element's options icon",
      table: {
        category: "slots",
        type: {
          summary: "HTMLElement",
        },
        defaultValue: {
          summary: "options",
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
