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
};
