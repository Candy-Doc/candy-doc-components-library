import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";
import { within, userEvent } from "@storybook/testing-library";

import "../../../components/Sidebar/Element/Element";
import { CandySidebarElementProps } from "../../../components/Sidebar/Element/Element";

export default {
  title: "Sidebar/Element",
  component: "candy-sidebar-element",
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
  },
} as Meta<CandySidebarElementProps>;

const TemplateWithoutIcon: Story<CandySidebarElementProps> = (args) => {
  return html`<candy-sidebar-element
    title="element"
    label=${args.label}
    ?active=${args.active}
    ?disabled=${args.disabled}
  ></candy-sidebar-element>`;
};

export const Element = TemplateWithoutIcon.bind({});

Element.play = async ({ canvasElement }) => {
  const element = within(canvasElement).getByTitle("element");
  await userEvent.click(element);
};
