export const meta = {
  component: "candy-input",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **input**",
      },
    },
  },
  argTypes: {
    label: {
      description: "Title of the input",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Quick search",
        },
      },
    },
    placeholder: {
      description: "Placeholder of the input",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Search",
        },
      },
    },
    shortCut: {
      description: "Shortcut string to focus on the input",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "⌘K",
        },
      },
    },
    value: {
      description: "Input value",
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
    input: {
      name: "input",
      description:
        "Event fired when typing inside the input. Access the value by `event.target.value`",
      table: {
        category: "events",
        type: {
          summary: "Function",
        },
      },
    },
  },
};
