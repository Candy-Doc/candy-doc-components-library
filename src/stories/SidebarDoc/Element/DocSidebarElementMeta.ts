export const meta = {
  component: "candy-sidebar-doc-element",
  argTypes: {
    label: {
      description: "Label of the element",
      table: {
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
