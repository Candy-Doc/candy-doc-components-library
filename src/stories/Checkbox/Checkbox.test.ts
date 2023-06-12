import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";
import { getByShadowLabelText } from "shadow-dom-testing-library";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const playFunction = async (
  { args, canvasElement, step }: any,
  checked: { value: boolean }
) => {
  const checkbox = getByShadowLabelText(canvasElement, "Checkbox");
  const initialCheckboxState = args.checked;

  await step("Check", async () => {
    await userEvent.click(checkbox);
    await expect(checked.value).toEqual(!initialCheckboxState);
  });
  await step("Uncheck", async () => {
    await userEvent.click(checkbox);
    await expect(checked.value).toEqual(initialCheckboxState);
    checkbox.blur();
  });
};
