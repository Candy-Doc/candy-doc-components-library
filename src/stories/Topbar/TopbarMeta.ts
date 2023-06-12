export const meta = {
  component: "candy-topbar",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **topbar**"
      },
    },
  },
  argTypes: {
    defaultSlot: {
      name: "default",
      description: "Default slot containing children of the component",
      table: {
        category: "slots",
        type: {
          summary: "HTMLElement",
        },
      },
    },
  },
};
