export type CandySideBarDocElement = {
  label: string;
  active: boolean;
  childrens?: Array<CandySideBarDocElement>;
};

export type CandySideBarDocControl = {
  elements: Array<CandySideBarDocElement>;
};

export const meta = {
  component: "candy-sidebar-doc",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **doc-sidebar**",
      },
    },
  },
  argTypes: {
    elements: {
      table: {
        disable: true,
      },
    },
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
