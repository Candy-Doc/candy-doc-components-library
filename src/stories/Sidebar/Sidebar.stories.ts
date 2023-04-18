import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../../components/Sidebar";
import "../../components/Sidebar/Element";

type Story = StoryObj<CandySideBarControl>;

type CandySideBarControl = {
  elements: Array<{
    label: string;
    active: boolean;
    icon: string;
  }>;
};

const renderSideBar = (args: CandySideBarControl) => html`<candy-sidebar>
  ${args.elements.map(
    ({ label, active, icon }) =>
      html`<candy-sidebar-element label=${label} ?active=${active}>
        <fa-icon slot="icon" class=${icon} size="2em"></fa-icon>
      </candy-sidebar-element>`
  )}
</candy-sidebar>`;

export default {
  title: "Components/Sidebar",
  component: "candy-sidebar",
  argTypes: {
    elements: {
      description:
        "List of sidebar elements information attributed in <candy-sidebar-element> items",
      table: {
        type: {
          summary: "object[]",
        },
        defaultValue: {
          summary: "[]",
        },
      },
    },
  },
  render: renderSideBar,
} as Meta<CandySideBarControl>;

export const Sidebar: Story = {
  args: {
    elements: [
      { label: "Overview", active: true, icon: "fa-solid fa-binoculars" },
      { label: "Objects", active: false, icon: "fa-solid fa-cubes" },
      {
        label: "Bounded context 1",
        active: false,
        icon: "fa-regular fa-object-group",
      },
    ],
  },
};
