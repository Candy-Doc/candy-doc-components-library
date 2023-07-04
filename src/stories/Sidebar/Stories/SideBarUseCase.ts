import { html } from "lit";

import { renderSideBar } from "./RenderSidebar";
import { CandySidebarProps } from "../../../components/Sidebar";
import { CandySideBarControl } from "../SidebarMeta";

export const renderSideBarWithContent = (args: CandySidebarProps & CandySideBarControl) => {
  return html`<div
    style="display: flex; background-color: #F8F9FA; border-radius: 8px; min-height: 350px"
  >
    <div style="width: 20rem;">${renderSideBar(args)}</div>
    <div
      style="
        background-color: #D2D4D6;
        width: 100%;
        flex-direction: column;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    "
    >
      <p>CONTENT</p>
    </div>
  </div>`;
};
