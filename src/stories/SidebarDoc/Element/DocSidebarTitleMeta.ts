export const meta = {
  component: "candy-sidebar-doc-title",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **doc-title**",
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
      description: "Is the item the selected one",
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
        category: "slots",
        type: {
          summary: "HTMLElement",
        },
      },
    },
  },
};
