import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { CandyBreadcrumbProps } from "../components/Breadcrumb";
import "../components/Breadcrumb";

type Story = StoryObj<CandyBreadcrumbProps>;

const renderBreadcrumb = (args: CandyBreadcrumbProps) =>
  html`<candy-breadcrumb .items=${args.items}></candy-breadcrumb>`;

export default {
  title: "Components/Breadcrumb",
  component: "candy-breadcrumb",
  render: renderBreadcrumb,
} as Meta<CandyBreadcrumbProps>;

export const Breadcrumb: Story = {
  args: {
    items: ["Home", "Page", "Subpage"],
  },
};
