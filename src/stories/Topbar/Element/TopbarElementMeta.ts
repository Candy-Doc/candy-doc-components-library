export const meta = {
  component: "candy-topbar-element",
  argTypes: {
    label: {
      description: "Title of the navbar item",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "''",
        },
      },
    },
    iconSlot: {
      name: "icon",
      description: "Slot for the topbar element's icon",
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
  },
};
