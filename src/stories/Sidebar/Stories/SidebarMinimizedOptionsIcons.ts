import { html } from "lit";

import { CandySidebarProps } from "../../../components/Sidebar";
import { CandySideBarControl } from "../SidebarMeta";
import { PopoverSide } from "../../../components/Popover";

export const renderSidebarMinimizedOptionsIcons = (
  args: CandySidebarProps & CandySideBarControl
) => {
  return html`<div
    style="display: flex; background-color: #F8F9FA; border-radius: 8px; min-height: 350px"
  >
    <div>
      <candy-sidebar @onCollapse=${args.onCollapse} ?canCollapse=${args.canCollapse}>
        <candy-accordion
          label="Sectio accordion"
          ?minimizeOptions=${true}
          optionsPopoverSide=${PopoverSide.Right}
        >
          <fa-icon slot="icon" class="fa-solid fa-cubes"></fa-icon>
          <fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>
          <fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>
        </candy-accordion>
        <candy-accordion
          label="Section accordion 2"
          ?minimizeOptions=${true}
          optionsPopoverSide=${PopoverSide.Right}
        ></candy-accordion>
        <candy-sidebar-element
          label="Element"
          ?minimizeOptions=${true}
          optionsPopoverSide=${PopoverSide.Right}
        >
          <fa-icon slot="icon" class="fa-solid fa-diamond"></fa-icon>
          <fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>
          <fa-icon slot="options" class="fa-regular fa-eye"></fa-icon>
        </candy-sidebar-element>
        <candy-sidebar-element
          label="Element 2"
          ?minimizeOptions=${true}
          optionsPopoverSide=${PopoverSide.Right}
        >
        </candy-sidebar-element>
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
