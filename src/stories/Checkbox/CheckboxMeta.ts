export const meta = {
  component: "candy-checkbox",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **checkbox**",
      },
    },
  },
  argTypes: {
    checked: {
      description: "State of the checkbox",
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
    label: {
      description: "Right-side text of the checkbox",
      table: {
        category: "props",
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
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
    onChange: {
      description:
        "Custom event fired when clicking the checkbox. Access the value using `event.detail.value`",
      table: {
        category: "events",
        type: {
          summary: "Function",
        },
      },
    },
  },
};
