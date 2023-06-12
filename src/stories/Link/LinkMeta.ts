export const meta = {
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **link**"
      },
    },
  },
  argTypes: {
    label: {
      description: "Text holding the link",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Click me",
        },
      },
    },
    url: {
      description: "Url",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "https://candy-doc.com",
        },
      },
    },
    target: {
      description: "Target of the `<a>` element",
      table: {
        category: "props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "_blank",
        },
      },
    },
  },
};
