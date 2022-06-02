import { Story } from "@storybook/web-components";
import { html } from "lit";

import "../../components/Drawing/Circle/Circle";

export default {
  title: "Circle",
  component: "candy-circle",
};

const Template: Story = () => {
  return html` <candy-circle></candy-circle> `;
};

export const Circle = Template.bind({});
