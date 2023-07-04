import { html } from "lit";

import { CandySidebarProps } from "../../../components/Sidebar";
import { CandySideBarControl } from "../SidebarMeta";

export const renderSidebarMinimizedOptionsIcons = (
  args: CandySidebarProps & CandySideBarControl
) => {
  return html`<div
    style="display: flex; background-color: #F8F9FA; border-radius: 8px; min-height: 350px"
  >
    <div style="width: 20rem;">
      <candy-sidebar @onCollapse=${args.onCollapse}>
        <candy-accordion label="Section" ?minimizeOptions=${true}>
          <fa-icon slot="icon" class="fa-solid fa-cubes"></fa-icon>
          <fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>
          <fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>
        </candy-accordion>
      </candy-sidebar>
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
    "
    >
      <p>CONTENT</p>
    </div>
  </div>`;
};
