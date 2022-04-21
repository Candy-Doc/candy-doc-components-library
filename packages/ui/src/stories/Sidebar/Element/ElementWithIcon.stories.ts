import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import "../../../components/Sidebar/Element/Element";
import { CandySidebarElementProps } from "../../../components/Sidebar/Element/Element";

export default {
  title: "Sidebar/Element",
  component: "candy-sidebar-element",
  argTypes: {
    label: { type: "string", defaultValue: "Candy-Doc" },
    active: { type: "boolean", defaultValue: false },
    icon: { type: "string", defaultValue: "fa-solid fa-candy-cane" },
  },
} as Meta<CandySidebarElementProps>;

const TemplateWithIcon: Story<CandySidebarElementProps> = (args) =>
  html`<candy-sidebar-element label=${args.label} ?active=${args.active}>
    <fa-icon slot="icon" class=${args.icon} size="2em"></fa-icon>
  </candy-sidebar-element>`;

export const ElementWithIcon = TemplateWithIcon.bind({});
