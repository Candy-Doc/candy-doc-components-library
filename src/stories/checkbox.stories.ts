import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyCheckboxProps } from "../components/Checkbox/Checkbox";
import "../components/Checkbox/Checkbox";

export default {
  title: "Checkbox",
  component: "candy-checkbox",
  args: {
    checked: false,
    label: "Checkbox",
    description: "This is a description",
  },
} as Meta<CandyCheckboxProps>;

const Template: Story<CandyCheckboxProps> = (args) =>
  html`<candy-checkbox
    .checked=${args.checked}
    label=${args.label}
    description=${args.description}
  ></candy-checkbox>`;

export const Checkbox = Template.bind({});
