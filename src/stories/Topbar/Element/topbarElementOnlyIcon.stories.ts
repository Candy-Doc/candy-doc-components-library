import { html } from "lit";
import { StoryObj } from "@storybook/web-components";

import { meta } from "./TopbarElementMeta";
import "../../../components/Topbar/Element";

const renderTopBarElement = () => html`<candy-topbar-element>
  <a slot="icon" href="https://google.com">
    <fa-icon class="fa-brands fa-github"></fa-icon>
  </a>
</candy-topbar-element> `;

export default {
  ...meta,
  title: "Components/Topbar/ElementOnlyIcon",
  render: renderTopBarElement,
};

export const TopbarElement: StoryObj = {};
