import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";
import { getByShadowAltText, getByShadowRole } from "shadow-dom-testing-library";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const playFunction = async (
  { canvasElement, step }: any,
  isCollapse: { value: boolean }
) => {
  const collapseIcon = getByShadowAltText(canvasElement, "collapse-icon");
  const sidebarElem = getByShadowRole(canvasElement, "complementary");

  await step("Collsape the sidebar", async () => {
    await userEvent.click(collapseIcon);
    await expect(sidebarElem.classList.contains("sidebar-mini")).toBeTruthy();
    await expect(isCollapse.value).toBeTruthy();
  });
  await step("Open the sidebar", async () => {
    await userEvent.click(collapseIcon);
    await expect(sidebarElem.classList.contains("sidebar-mini")).not.toBeTruthy();
    await expect(isCollapse.value).toBeFalsy();
  });
};
