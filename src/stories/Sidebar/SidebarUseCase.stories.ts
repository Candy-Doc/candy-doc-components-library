import { StoryObj } from "@storybook/web-components";
import { html } from "lit";

import type { CandySidebarProps } from "../../components/Sidebar";
import { meta, type CandySideBarControl } from "./SidebarMeta";
import { renderSideBar } from "./RenderSidebar";
import { Sidebar } from "./Sidebar.stories";

type Story = StoryObj<CandySidebarProps & CandySideBarControl>;

const renderUseCaseSideBar = (args: CandySidebarProps & CandySideBarControl) => {
  return html`<div style="display: flex; background-color: #F8F9FA; border-radius: 8px; min-height: 350px">
    <div>
      ${renderSideBar(args)}
    </div>
    <div
      style="
        background-color: #D2D4D6;
        width: 100%;
        flex-direction: column;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    ">
      <p>CONTENT</p>
    </div>
  </div>`
};

export default {
  ...meta,
  title: "Components/Sidebar",
  render: renderUseCaseSideBar,
};

export const SidebarUseCase: Story = {
  args: {
    ...Sidebar.args,
  },
  play: Sidebar.play,
};
