import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyCheckboxProps } from "../components/Checkbox";
import "../components/Checkbox";

type Story = StoryObj<CandyCheckboxProps>;

const renderCheckbox = (args: CandyCheckboxProps) =>
  html`<candy-checkbox
    .checked=${args.checked}
    label=${args.label}
    description=${args.description}
  ></candy-checkbox>`;

export default {
  title: "Components/Checkbox",
  component: "candy-checkbox",
  render: renderCheckbox,
} as Meta<CandyCheckboxProps>;

export const Checkbox: Story = {
  args: {
    checked: false,
    label: "Checbox",
    description: "This is a description",
  },
};
