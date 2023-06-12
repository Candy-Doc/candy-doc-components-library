export const meta = {
  component: "candy-sidebar-doc-element",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **doc-element**",
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
    candyIcon: {
      name: "candyIcon",
      description: "Show the icon of selected element as a candy",
      table: {
        category: "props",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "True",
        },
      },
    },
  },
};
