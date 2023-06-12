import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";
import { getByShadowDisplayValue } from "shadow-dom-testing-library";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const playFunction = async ({ canvasElement, step }: any, inputText: { value: string }) => {
  const input = getByShadowDisplayValue(canvasElement, "");

  await step("onInput event is is updating my variable", async () => {
    (input as HTMLInputElement).value = "";
    const valueToType = "Default value";
    await userEvent.type(input, valueToType);
    await expect(inputText.value).toEqual(valueToType);
  });
};
