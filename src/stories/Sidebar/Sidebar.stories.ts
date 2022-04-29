import { html } from "lit";
import { Story } from "@storybook/web-components";

import "../../components/Sidebar/SideBar";
import "../../components/Sidebar/Element/Element";

const elements = [
  { label: "Overview", active: true, icon: "fa-solid fa-binoculars" },
  { label: "Objects", active: false, icon: "fa-solid fa-cubes" },
  {
    label: "Bounded context 1",
    active: false,
    icon: "fa-regular fa-object-group",
  },
  {
    label: "Bounded context 2",
    active: false,
    icon: "fa-regular fa-object-group",
  },
  {
    label: "Bounded context 3",
    active: false,
    icon: "fa-regular fa-object-group",
  },
];

export default {
  title: "Sidebar",
  component: "candy-sidebar",
};

const Template: Story = () =>
  html`<candy-sidebar>
    ${elements.map(
      ({ label, active, icon }) =>
        html`<candy-sidebar-element label=${label} ?active=${active}>
          <fa-icon slot="icon" class=${icon} size="2em"></fa-icon>
        </candy-sidebar-element>`
    )}
  </candy-sidebar>`;

export const Sidebar = Template.bind({});
