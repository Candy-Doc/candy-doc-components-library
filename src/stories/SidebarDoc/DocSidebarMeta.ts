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
  argTypes: {
    elements: {
      description:
        "List of sidebar elements information. /!\\ This argument is to build the items and is not passed inside the sidebar.",
      table: {
        type: {
          summary: "object[]",
        },
        defaultValue: {
          summary: "[]",
        },
      },
    },
  },
};
