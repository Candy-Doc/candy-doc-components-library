export const meta = {
  component: "candy-breadcrumb-element",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **breadcrumb-element**",
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
    isLast: {
      description: "Is the element the last one in the breadcrumb?",
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
  },
};
