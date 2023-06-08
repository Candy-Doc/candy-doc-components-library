import { StoryObj, Meta } from "@storybook/web-components";
import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";
import { getByShadowLabelText } from "shadow-dom-testing-library";
import { html } from "lit";

import { CandyCheckboxProps } from "../../components/Checkbox";
import { meta } from "./CheckboxMeta";
import "../../components/Checkbox";

type Story = StoryObj<CandyCheckboxProps>;

let checked = false;

const renderCheckbox = (args: CandyCheckboxProps) =>
  html`<candy-checkbox
    ?checked=${args.checked}
    label=${args.label}
    description=${args.description}
    @onChange=${({ detail }: CustomEvent) => checked = detail.value}
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
  play: async ({ args, canvasElement, step }) => {
    const checkbox = getByShadowLabelText(canvasElement, "Checkbox");
    const initialCheckboxState = args.checked;

    await step("Check", async () => {
      await userEvent.click(checkbox);
      await expect(checked).toEqual(!initialCheckboxState);
    });
    await step("Uncheck", async () => {
      await userEvent.click(checkbox);
      await expect(checked).toEqual(initialCheckboxState);
      checkbox.blur();
    });
  },
};
