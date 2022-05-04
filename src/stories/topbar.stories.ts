import { html } from "lit";
import { Story } from "@storybook/web-components";

import "../components/Topbar/Topbar";

export default {
  title: "Topbar",
  component: "candy-topbar",
};

const Template: Story = () => html`<candy-topbar> </candy-topbar>`;

export const Topbar = Template.bind({});
