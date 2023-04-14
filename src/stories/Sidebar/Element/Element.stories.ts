import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";
import { within, userEvent } from "@storybook/testing-library";

import { CandySidebarElementProps } from "../../../components/Sidebar/Element";
import "../../../components/Sidebar/Element";

type Story = StoryObj<CandySidebarElementProps>;

const renderElement = (args: CandySidebarElementProps) => html`<candy-sidebar-element
  title="element"
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
></candy-sidebar-element>`;

export default {
  title: "Components/Sidebar/Element",
  component: "candy-sidebar-element",
  render: renderElement,
} as Meta<CandySidebarElementProps>;

export const Element: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
  },
};

Element.play = async ({ canvasElement }) => {
  const element = within(canvasElement).getByTitle("element");
  await userEvent.click(element);
};
