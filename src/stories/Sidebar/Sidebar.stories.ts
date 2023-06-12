import { StoryObj } from "@storybook/web-components";

import type { CandySidebarProps } from "../../components/Sidebar";
import type { CandySideBarControl } from "./SidebarMeta";
import { meta } from "./SidebarMeta";
import { renderSideBar } from "./RenderSidebar";
import { playFunction } from "./Sidebar.test";

type Story = StoryObj<CandySidebarProps & CandySideBarControl>;

const isCollapse = { value: false };

export default {
  ...meta,
  title: "Components/Sidebar",
  render: renderSideBar,
};

export const Sidebar: Story = {
  args: {
    canCollapse: true,
    onCollapse: (e: CustomEvent) => (isCollapse.value = e.detail.value),
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
  play: async ({ canvasElement, step }) => playFunction({ canvasElement, step }, isCollapse),
};
