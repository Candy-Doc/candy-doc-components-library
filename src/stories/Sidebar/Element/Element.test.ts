import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";
import { getByShadowTestId } from "shadow-dom-testing-library";

export const sidebarElementWithOptionsTesting = async (
  { canvasElement, step }: any
) => {
  await step("Has a filled popover containing at least 2 items", async () => {
    const popoverIconWrapper = getByShadowTestId(canvasElement, "sidebar-element-options-icon");
    await userEvent.click(popoverIconWrapper);

    const popoverComponent = getByShadowTestId(canvasElement, "popover");
    const { offsetLeft, offsetTop } = popoverComponent;
    const isPopoverCorrectlyPlaced = offsetLeft !== 0 && offsetTop !== 0;
    await expect(isPopoverCorrectlyPlaced).toBeTruthy();


    await expect(popoverComponent.childElementCount).toBeGreaterThanOrEqual(2);

    await userEvent.click(popoverIconWrapper);
  });
}
