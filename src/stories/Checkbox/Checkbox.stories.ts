import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyCheckboxProps } from "../../components/Checkbox";
import "../../components/Checkbox";
import { meta } from "./CheckboxMeta";

type Story = StoryObj<CandyCheckboxProps>;

const renderCheckbox = (args: CandyCheckboxProps) =>
  html`<candy-checkbox
    ?checked=${args.checked}
    label=${args.label}
    description=${args.description}
  ></candy-checkbox>`;

export default {
  ...meta,
  title: "Components/Checkbox",
  render: renderCheckbox,
} as Meta<CandyCheckboxProps>;

export const Checkbox: Story = {
  args: {
    checked: false,
    label: "Checkbox",
    description: "This is a description",
  },
};
