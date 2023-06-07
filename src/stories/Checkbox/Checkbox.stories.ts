import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";

import { CandyCheckboxProps } from "../../components/Checkbox";
import "../../components/Checkbox";
import { meta } from "./CheckboxMeta";
import { userEvent } from "@storybook/testing-library";
import { getByShadowLabelText } from "shadow-dom-testing-library";
import { expect } from "@storybook/jest";

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
  play: async ({ canvasElement, step }) => {
    const checkbox = getByShadowLabelText(canvasElement, "Checkbox");

    await step("Check", async () => {
      await userEvent.click(checkbox);
      await expect(checked).toBeTruthy();
    });
    await step("Uncheck", async () => {
      await userEvent.click(checkbox);
      await expect(checked).toBeFalsy();
      checkbox.blur();
    });
  },
};
