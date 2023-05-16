import { StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../components/Topbar/Topbar";

const renderTopBar = () => html`<candy-topbar> </candy-topbar>`;

export default {
  title: "Components/Topbar",
  component: "candy-topbar",
  redner: renderTopBar,
};

export const Topbar: StoryObj = {};
