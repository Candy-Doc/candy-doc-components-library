import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Breadcrumb/breadcrumb";
import { CandyBreadcrumbProps } from "../components/Breadcrumb/breadcrumb";

export default {
  title: "Breadcrumb",
  component: "candy-breadcrumb",
  args: {
    items: ["Home", "Page 1"],
  },
} as Meta<CandyBreadcrumbProps>;

const Template: Story<CandyBreadcrumbProps> = (args) => {
  return html`<candy-breadcrumb .items=${args.items}></candy-breadcrumb>`;
};

export const Breadcrumb = Template.bind({});
