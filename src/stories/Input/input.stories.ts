import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyInputProps } from "../../components/Input";
import { meta } from "./InputMeta";
import { playFunction } from "./Input.test";
import "../../components/Input";

type Story = StoryObj<CandyInputProps>;

const inputText = { value: "" };

const renderInput = (args: CandyInputProps) => html`<candy-input
  label=${args.label}
  placeholder=${args.placeholder}
  shortCut=${args.shortCut}
  value=${args.value}
  @input=${({ target }: Event) => (inputText.value = (target as HTMLButtonElement).value)}
>
</candy-input>`;

export default {
  ...meta,
  title: "Components/Input",
  render: renderInput,
} as Meta<CandyInputProps>;

export const Input: Story = {
  args: {
    label: "Quick search",
    placeholder: "Search",
    shortCut: "⌘B",
    value: "",
  },
  play: ({ canvasElement, step }) => playFunction({ canvasElement, step }, inputText),
};
