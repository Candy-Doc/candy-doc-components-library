import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyBreadcrumbElementProps } from "../../../components/Breadcrumb/Element";
import "../../../components/Breadcrumb/Element";
import { meta } from "./ElementMeta";

type Story = StoryObj<CandyBreadcrumbElementProps>;

const renderElement = (args: CandyBreadcrumbElementProps) => html`<candy-breadcrumb-element
  label=${args.label}
  ?isLast=${args.isLast}
>
</candy-breadcrumb-element>`;

export default {
  ...meta,
  title: "Components/Breadcrumb/Breadcrumb Element",
  render: renderElement,
} as Meta<CandyBreadcrumbElementProps>;

export const Element: Story = {
  args: {
    label: "Home",
    isLast: false,
  },
};
