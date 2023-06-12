import { StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../components/Divider";

type Story = StoryObj;

const style =
  "text-align: center; background-color: rgb(240,240,240); border-radius: 6px; margin: 0;";

const renderDivider = () => html` <p style=${style}>Above</p>
  <candy-divider></candy-divider>
  <p style=${style}>Below</p>`;

export default {
  title: "Components/Divider",
  component: "candy-divider",
  parameters: {
    docs: {
      description: {
        component: "CSS part selector: **divider**",
      },
    },
  },
  render: renderDivider,
};

export const Divider: Story = {};
