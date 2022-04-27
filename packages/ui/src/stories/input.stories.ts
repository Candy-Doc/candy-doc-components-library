import { Story, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyInputProps } from "../components/Input/Input";
import "../components/Input/Input";

export default {
  title: "Input",
  component: "candy-input",
  args: {
    value: "C'est l'oeuf ou la poule ?",
    label: "Quick search",
    placeholder: "Search",
    shortCut: "⌘B",
  },
} as Meta<CandyInputProps>;

const Template: Story<CandyInputProps> = (args) =>
  html`<candy-input
    .value=${args.value}
    .label=${args.label}
    .placeholder=${args.placeholder}
    .shortCut=${args.shortCut}
  >
  </candy-input>`;

export const Input = Template.bind({});
