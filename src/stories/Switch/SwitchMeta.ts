export const meta = {
  component: "candy-switch",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **switch**",
      },
    },
  },
  argTypes: {
    activated: {
      description: "Boolean value of the switch",
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
    onChange: {
      description:
        "Custom event fired when clicking on the component. Access the value using `event.detail.value`",
      table: {
        category: "events",
        type: {
          summary: "Function",
        },
      },
    },
  },
};
