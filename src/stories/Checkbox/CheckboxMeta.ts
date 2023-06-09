export const meta = {
  component: "candy-checkbox",
  argTypes: {
    checked: {
      description: "State of the checkbox",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "False",
        },
      },
    },
    label: {
      description: "Right-side text of the checkbox",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Checkbox",
        },
      },
    },
    description: {
      description: "Text to add more information about the checkbox",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
  },
};
