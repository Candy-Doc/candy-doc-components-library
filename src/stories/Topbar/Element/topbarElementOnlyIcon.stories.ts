import { html } from "lit";
import { StoryObj } from "@storybook/web-components";

import "../../../components/Topbar/Element";

const renderTopBarElement = () => html`<candy-topbar-element>
  <a slot="icon" href="https://google.com">
    <fa-icon class="fa-brands fa-github"></fa-icon>
  </a>
</candy-topbar-element> `;

export default {
  title: "Components/Topbar/ElementOnlyIcon",
  component: "candy-topbar-element",
  render: renderTopBarElement,
  argTypes: {
    label: {
      description: "Title of the navbar item",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "''",
        },
      },
    },
  },
};

export const TopbarElement: StoryObj = {};
