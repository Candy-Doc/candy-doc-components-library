import { Story } from "@storybook/web-components";
import { html } from "lit";

import "../../components/Graph/Graph";

export default {
  title: "Graph",
  component: "candy-graph",
};

const Template: Story = () => {
  return html`<candy-graph></candy-graph>`;
};

export const Graph = Template.bind({});
