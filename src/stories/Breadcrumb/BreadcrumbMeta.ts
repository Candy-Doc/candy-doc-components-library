export const meta = {
  component: "candy-breadcrumb",
  argTypes: {
    items: {
      name: ".items",
      description: "List of page's title",
      table: {
        type: {
          summary: "string[]",
        },
        defaultValue: {
          summary: ["Home", "Page 1", "Subpage 1"],
        },
      },
    },
  },
};
