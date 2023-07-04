import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";
import { getByShadowRole, getByShadowTestId } from "shadow-dom-testing-library";

export const testOpenCloseAccordion = async (
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

export const accordionWithOptionsTesting = async (
  { args, canvasElement, step }: any,
  isActive: { value: boolean }
) => {
  await testOpenCloseAccordion({ args, canvasElement, step }, isActive);
  await step("Has a filled popover containing at least 2 items", async () => {
    const popoverIconWrapper = getByShadowTestId(canvasElement, "accordion-options-icon");
    await userEvent.click(popoverIconWrapper);

    const popoverComponent = getByShadowTestId(canvasElement, "popover");
    const { offsetLeft, offsetTop } = popoverComponent;
    const isPopoverCorrectlyPlaced = offsetLeft !== 0 && offsetTop !== 0;
    await expect(isPopoverCorrectlyPlaced).toBeTruthy();
    await expect(popoverComponent.childElementCount).toBeGreaterThanOrEqual(2);

    await userEvent.click(popoverIconWrapper);
  });
};
