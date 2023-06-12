import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";
import { getByShadowRole } from "shadow-dom-testing-library";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const playFunction = async (
  { args, canvasElement, step }: any,
  isActive: { value: boolean }
) => {
  const button = getByShadowRole(canvasElement, "switch");
  const initialSwitchState = args.activated;

  await step("Active", async () => {
    await userEvent.click(button);
    await expect(isActive.value).toEqual(!initialSwitchState);
  });
  await step("Disactive", async () => {
    await userEvent.click(button);
    await expect(isActive.value).toEqual(initialSwitchState);
  });
};
