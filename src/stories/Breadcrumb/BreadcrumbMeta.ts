import { CandyBreadcrumbElementProps } from "../../components/Breadcrumb/Element";

export type CandyBreadcrumbControl = {
  elements: Array<CandyBreadcrumbElementProps>;
};

export const meta = {
  component: "candy-breadcrumb",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **breadcrumb**",
      },
    },
  },
  argTypes: {
    elements: {
      name: "elements",
      description: "-",
      table: {
        category: "Controls",
      },
    },
    defaultSlot: {
      name: "default",
      description: "Default slot containing children of the component",
      table: {
        category: "Slots",
        type: {
          summary: "HTMLElement",
        },
      },
    },
  },
};
