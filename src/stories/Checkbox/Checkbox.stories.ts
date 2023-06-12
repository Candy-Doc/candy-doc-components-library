import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyCheckboxProps } from "../../components/Checkbox";
import { meta } from "./CheckboxMeta";
import { playFunction } from "./Checkbox.test";
import "../../components/Checkbox";

type Story = StoryObj<CandyCheckboxProps>;

const checked = {
  value: false,
};

const renderCheckbox = (args: CandyCheckboxProps) =>
  html`<candy-checkbox
    ?checked=${args.checked}
    label=${args.label}
    description=${args.description}
    @onChange=${({ detail }: CustomEvent) => (checked.value = detail.value)}
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
  play: ({ args, canvasElement, step }) => playFunction({ args, canvasElement, step }, checked),
};
