import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Badge/Badge";
import { CandyBadgeProps } from "../components/Badge/Badge";

export default {
  title: "Badge",
  component: "candy-badge",
  args: {
    label: "Badge",
  },
} as Meta<CandyBadgeProps>;

const Template: Story<CandyBadgeProps> = (args) => {
  return html`<candy-badge label=${args.label}></candy-badge>`;
};

export const Badge = Template.bind({});
