import { StoryObj, Meta } from "@storybook/web-components";

import "../../components/Breadcrumb";
import "../../components/Breadcrumb/Element";
import { CandyBreadcrumbControl, meta } from "./BreadcrumbMeta";
import { renderBreadcrumb } from "./renderBreadcrumb";

type Story = StoryObj<CandyBreadcrumbControl>;

export default {
  ...meta,
  title: "Components/Breadcrumb",
  render: renderBreadcrumb,
} as Meta<CandyBreadcrumbControl>;

export const Breadcrumb: Story = {
  args: {
    elements: [{ label: "Home" }, { label: "Page" }, { label: "Subpage", last: true }],
  },
};
