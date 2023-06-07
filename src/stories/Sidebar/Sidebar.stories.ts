import { StoryObj } from "@storybook/web-components";
import { userEvent } from '@storybook/testing-library';
import { getByShadowAltText, getByShadowRole } from "shadow-dom-testing-library";
import { expect } from '@storybook/jest';

import type { CandySidebarProps } from "../../components/Sidebar";
import type { CandySideBarControl } from "./SidebarMeta";
import { meta } from "./SidebarMeta";
import { renderSideBar } from "./RenderSidebar";

type Story = StoryObj<CandySidebarProps & CandySideBarControl>;

let isCollapse = false;

export default {
  ...meta,
  title: "Components/Sidebar",
  render: renderSideBar,
};

export const Sidebar: Story = {
  args: {
    canCollapse: true,
    onCollapse: (e: CustomEvent) => isCollapse = e.detail.value,
    elements: [
      {
        label: "Patterns",
        active: true,
        icon: "fa-solid fa-binoculars",
        optionsIcons: ["fa-solid fa-location-crosshairs", "fa-regular fa-eye"],
        childrens: [
          {
            label: "Book",
            active: true,
            icon: "fa-solid fa-binoculars",
            optionsIcons: ["fa-regular fa-eye"],
            childrens: [
              { label: "Price", active: false, optionsIcons: ["fa-regular fa-eye"], childrens: [] },
              { label: "Title", active: false, optionsIcons: ["fa-regular fa-eye"], childrens: [] },
              { label: "ISBN", active: false, optionsIcons: ["fa-regular fa-eye"], childrens: [] },
            ],
          },
        ],
      },
      {
        label: "Legend",
        active: false,
        icon: "fa-solid fa-cubes",
        optionsIcons: ["fa-regular fa-eye"],
        childrens: [],
      },
      {
        label: "Contact",
        active: false,
        icon: "fa-regular fa-object-group",
        optionsIcons: ["fa-regular fa-eye"],
        childrens: [],
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const collapseIcon = getByShadowAltText(canvasElement, "collapse-icon");
    const sidebarElem = getByShadowRole(canvasElement, "complementary");

    await step("Collsape the sidebar", async () => {
      await userEvent.click(collapseIcon);
      await expect(sidebarElem.classList.contains("sidebar-mini")).toBeTruthy();
      await expect(isCollapse).toBeTruthy();
    });
    await step("Open the sidebar", async () => {
      await userEvent.click(collapseIcon);
      await expect(sidebarElem.classList.contains("sidebar-mini")).not.toBeTruthy();
      await expect(isCollapse).toBeFalsy();
    });
  },
};
