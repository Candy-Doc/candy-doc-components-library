import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";
import { getByShadowRole } from "shadow-dom-testing-library";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const playFunction = async (
  { args, canvasElement, step }: any,
  isActive: { value: boolean }
) => {
  const accordion = getByShadowRole(canvasElement, "button");
  const initialAcccordionState = args.active;

  await step("Open accordion", async () => {
    await userEvent.click(accordion);
    await expect(isActive.value).toEqual(!initialAcccordionState);
  });
  await step("Close accordion", async () => {
    await userEvent.click(accordion);
    await expect(isActive.value).toEqual(initialAcccordionState);
  });
};
