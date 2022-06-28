import { Story } from "@storybook/web-components";
import { html } from "lit";

import "../components/Test/Test";

export default {
  title: "Test",
  component: "candy-test",
};

export const Test: Story = () => {
  return html`<candy-test></candy-test>`;
};
