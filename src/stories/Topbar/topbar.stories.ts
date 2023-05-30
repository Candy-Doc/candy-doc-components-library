import { StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../../components/Topbar/Topbar";
import "../../components/Topbar/Element";

const renderTopBar = () => html`<candy-topbar>
  <candy-topbar-element label="Getting Started"></candy-topbar-element>
  <candy-topbar-element label="Graph"></candy-topbar-element>
  <candy-topbar-element label="Contact">
    <fa-icon slot="icon" class="fa-brands fa-github"></fa-icon>
  </candy-topbar-element>
  <candy-topbar-element>
    <a slot="icon" href="https://google.com">
      <fa-icon class="fa-brands fa-github">
      </fa-icon></a>
  </candy-topbar-element>
</candy-topbar>`;

export default {
  title: "Components/Topbar",
  component: "candy-topbar",
  render: renderTopBar,
}

export const Topbar: StoryObj = {};
