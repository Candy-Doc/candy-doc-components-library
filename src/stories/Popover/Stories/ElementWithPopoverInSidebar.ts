import { html } from "lit";

import { CandyPopoverProps } from "../../../components/Popover";

export const elementWithPopoverInSidebar = (args: CandyPopoverProps) => html`<div
  class="popover-container half-width"
>
  <candy-sidebar>
    <candy-sidebar-element label="Element">
      <candy-popover side=${args.side} slot="options">
        <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
        <div slot="content" class="icon-container">
          <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
        </div>
      </candy-popover>
    </candy-sidebar-element>
  </candy-sidebar>
</div>`;
