import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyInputProps } from "../components/Input";
import "../components/Input";

type Story = StoryObj<CandyInputProps>;

const renderInput = (args: CandyInputProps) => html`<candy-input
  .value=${args.value}
  .label=${args.label}
  .placeholder=${args.placeholder}
  .shortCut=${args.shortCut}
  .onChange=${args.onChange}
>
</candy-input>`;

export default {
  title: "Components/Input",
  component: "candy-input",
  render: renderInput,
} as Meta<CandyInputProps>;

const handleInput = (newValue: string) => {
  console.log("new value: " + newValue);
};

export const Input: Story = {
  args: {
    value: "This is a research",
    label: "Quick search",
    placeholder: "Search",
    shortCut: "⌘B",
    onChange: handleInput,
  },
};
