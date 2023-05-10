// deslint disabled in order to ensure a good html documentation display
/* eslint-disable prettier/prettier */
import { StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../components/Divider";

type Story = StoryObj;

const renderDivider = () => html` <p
    style="text-align: center; background-color: rgb(240,240,240); border-radius: 6px; margin: 0;"
  >Above</p>
  <candy-divider></candy-divider>
<p style="text-align: center; background-color: rgb(240,240,240); border-radius: 6px; margin: 0;">Below</p>`;

export default {
  title: "Components/Divider",
  component: "candy-divider",
  render: renderDivider,
};

export const Divider: Story = {};
