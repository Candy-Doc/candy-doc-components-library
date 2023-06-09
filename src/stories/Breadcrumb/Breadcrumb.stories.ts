import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyBreadcrumbProps } from "../../components/Breadcrumb";
import "../../components/Breadcrumb";
import { meta } from "./BreadcrumbMeta";

type Story = StoryObj<CandyBreadcrumbProps>;

const renderBreadcrumb = (args: CandyBreadcrumbProps) =>
  html`<candy-breadcrumb .items=${args.items}></candy-breadcrumb>`;

export default {
  ...meta,
  title: "Components/Breadcrumb",
  render: renderBreadcrumb,
} as Meta<CandyBreadcrumbProps>;

export const Breadcrumb: Story = {
  args: {
    items: ["Home", "Page", "Subpage"],
  },
};
