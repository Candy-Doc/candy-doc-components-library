import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../components/Icon/Icon";
import { CandyBadgeProps } from "../components/Badge/Badge";

export default {
  title: "Icon",
  component: "candy-icon",
} as Meta<CandyBadgeProps>;

const Template: Story<CandyBadgeProps> = () => {
  return html`<div>
    <candy-icon size="sm">
      <fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon
    ></candy-icon>
    <candy-icon size="md">
      <fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon
    ></candy-icon>
    <candy-icon size="xl">
      <fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon
    ></candy-icon>
  </div> `;
};

export const Icon = Template.bind({});
