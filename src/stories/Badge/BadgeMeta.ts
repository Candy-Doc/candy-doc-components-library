export const meta = {
  component: "candy-badge",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **badge**"
      },
    },
  },
  argTypes: {
    label: {
      description: "Text displayed inside the badge",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Badge",
        },
      },
    },
  },
};
