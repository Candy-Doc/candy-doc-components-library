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
  },
} as Meta<CandySidebarElementProps>;

const TemplateWithoutIcon: Story<CandySidebarElementProps> = (args) =>
  html`<candy-sidebar-element label=${args.label} ?active=${args.active}></candy-sidebar-element>`;

export const Element = TemplateWithoutIcon.bind({});
