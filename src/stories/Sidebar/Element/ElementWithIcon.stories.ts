import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";
import { within, userEvent } from "@storybook/testing-library";

import { CandySidebarElementProps } from "../../../components/Sidebar/Element";
import "../../../components/Sidebar/Element";

type Story = StoryObj<CandySidebarElementProps & CandySidebarElementControls>;

type CandySidebarElementControls = {
  icon: string;
};

const renderIconElement = (
  args: CandySidebarElementProps & CandySidebarElementControls
) => html`<candy-sidebar-element
  title="element"
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
>
  <fa-icon slot="icon" class=${args.icon} size="2em"></fa-icon>
</candy-sidebar-element>`;

export default {
  title: "Components/Sidebar/Element",
  component: "candy-sidebar-element",
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    icon: "fa-solid fa-candy-cane",
  },
  render: renderIconElement,
} as Meta<CandySidebarElementProps & CandySidebarElementControls>;

export const ElementWithIcon: Story = {
  args: {
    label: "Candy-Doc",
    active: false,
    disabled: false,
    icon: "fa-solid fa-candy-cane",
  },
};

ElementWithIcon.play = async ({ canvasElement }) => {
  const element = within(canvasElement).getByTitle("element");
  await userEvent.click(element);
};
