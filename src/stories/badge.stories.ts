import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyBadgeProps } from "../components/Badge";
import "../components/Badge";

type Story = StoryObj<CandyBadgeProps>;

const renderBadge = (args: CandyBadgeProps) =>
  html`<candy-badge label=${args.label}></candy-badge>`;

export default {
  title: "Components/Badge",
  component: "candy-badge",
  argTypes: {
    label: {
      description: "Text displayed inside the badge",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Badge",
        },
      },
    },
  },
  render: renderBadge,
} as Meta<CandyBadgeProps>;

export const Badge: Story = {
  args: {
    label: "Badge",
  },
};
