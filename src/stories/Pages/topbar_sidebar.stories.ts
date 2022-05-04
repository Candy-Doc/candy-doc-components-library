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
  title: "Pages",
};

const Template: Story = () =>
  html`
    <div>
      <candy-topbar> </candy-topbar>
    </div>
    <div class="grid grid-cols-4">
      <div>
        <candy-sidebar>
          ${elements.map(
            ({ label, active, icon }) =>
              html`
                <candy-sidebar-element label=${label} ?active=${active}>
                  <fa-icon slot="icon" class=${icon} size="2em"></fa-icon>
                </candy-sidebar-element>
              `
          )}
        </candy-sidebar>
      </div>
      <div class="col-span-3 text-center">Content</div>
    </div>
  `;

export const Topbar_and_sidebar = Template.bind({});
