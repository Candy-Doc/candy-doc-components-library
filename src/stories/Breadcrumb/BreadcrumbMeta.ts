export const meta = {
  component: "candy-breadcrumb",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **breadcrumb**",
      },
    },
  },
  argTypes: {
    items: {
      name: "items",
      description: "List of page's title",
      table: {
        category: "props",
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
