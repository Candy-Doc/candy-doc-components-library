import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyCheckboxProps } from "../components/Checkbox";
import "../components/Checkbox";

type Story = StoryObj<CandyCheckboxProps>;

const renderCheckbox = (args: CandyCheckboxProps) =>
  html`<div>
    <candy-checkbox
      .checked=${args.checked}
      label=${args.label}
      description=${args.description}
      .onChange=${args.onChange}
    ></candy-checkbox>
  </div>`;

export default {
  title: "Components/Checkbox",
  component: "candy-checkbox",
  argTypes: {
    checked: { action: "onClick" },
  },
  render: renderCheckbox,
} as Meta<CandyCheckboxProps>;

const onChange = (value?: boolean) => {
  console.log("new value: ", value);
};

export const Checkbox: Story = {
  args: {
    checked: false,
    label: "Checkbox",
    description: "This is a description",
    onChange: onChange,
  },
};
