import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import type { CandyTopbarElementProps } from "../../../components/Topbar/Element";
import "../../../components/Topbar/Element";

type Story = StoryObj<CandyTopbarElementProps>;

const renderTopBarElement = (args: CandyTopbarElementProps) => html`<candy-topbar-element label=${args.label}>
  <fa-icon slot="icon" class="fa-brands fa-github"></fa-icon>
</candy-topbar-element>
`;

export default {
  title: "Components/Topbar/ElementWithIcon",
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
  }
} as Meta<CandyTopbarElementProps>;

export const TopbarElement: Story = {
  args: {
    label: "Github"
  }
};
