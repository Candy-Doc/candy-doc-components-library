import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";
import { within, userEvent } from "@storybook/testing-library";

import "../../../components/Sidebar/Element/Element";
import { CandySidebarElementProps } from "../../../components/Sidebar/Element/Element";

type CandySidebarElementControls = {
  icon: string;
};

export default {
  title: "Sidebar/Element",
  component: "candy-sidebar-element",
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    icon: "fa-solid fa-candy-cane",
  },
} as Meta<CandySidebarElementProps & CandySidebarElementControls>;

const TemplateWithIcon: Story<CandySidebarElementProps & CandySidebarElementControls> = (args) =>
  html`<candy-sidebar-element
    title="element"
    label=${args.label}
    ?active=${args.active}
    ?disabled=${args.disabled}
  >
    <fa-icon slot="icon" class=${args.icon} size="2em"></fa-icon>
  </candy-sidebar-element>`;

export const ElementWithIcon = TemplateWithIcon.bind({});

ElementWithIcon.play = async ({ canvasElement }) => {
  const element = within(canvasElement).getByTitle("element");
  await userEvent.click(element);
};
