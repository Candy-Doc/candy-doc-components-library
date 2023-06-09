import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { getByShadowDisplayValue } from "shadow-dom-testing-library";

import { CandyInputProps } from "../../components/Input";
import "../../components/Input";
import { meta } from "./InputMeta";

type Story = StoryObj<CandyInputProps>;

let inputValue = "";

const renderInput = (args: CandyInputProps) => html`<candy-input
  label=${args.label}
  placeholder=${args.placeholder}
  shortCut=${args.shortCut}
  value=${args.value}
  @input=${({ target }: Event) => (inputValue = (target as HTMLButtonElement).value)}
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
  play: async ({ canvasElement, step }) => {
    const input = getByShadowDisplayValue(canvasElement, "");

    await step("onInput event is is updating my variable", async () => {
      (input as HTMLInputElement).value = "";
      const valueToType = "Default value";
      await userEvent.type(input, valueToType);
      await expect(inputValue).toEqual(valueToType);
    });
  },
};
