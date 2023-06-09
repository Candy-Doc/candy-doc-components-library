import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyBadgeProps } from "../../components/Badge";
import "../../components/Badge";
import { meta } from "./BadgeMeta";

type Story = StoryObj<CandyBadgeProps>;

const renderBadge = (args: CandyBadgeProps) =>
  html`<candy-badge label=${args.label}></candy-badge>`;

export default {
  ...meta,
  title: "Components/Badge",
  render: renderBadge,
} as Meta<CandyBadgeProps>;

export const Badge: Story = {
  args: {
    label: "Badge",
  },
};
