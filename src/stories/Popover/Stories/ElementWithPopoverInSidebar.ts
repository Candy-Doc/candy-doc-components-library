import { html } from "lit";

import { CandyPopoverProps } from "../../../components/Popover";

export const elementWithPopoverInSidebar = (args: CandyPopoverProps) => html`<div class="popover-container half-width">
  <candy-sidebar>
    <candy-sidebar-element label="Element">
      <fa-icon
        slot="options"
        class="fa-solid fa-location-crosshairs"
        size="2em"
        id="anchor"
      ></fa-icon>
    </candy-sidebar-element>
    <candy-popover
      .isActive=${args.isActive}
      targetId="anchor"
      side=${args.side}
      .isParentVisible=${args.isParentVisible}
    >
      <div class="icon-container">
        <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
      </div>
    </candy-popover>
  </candy-sidebar>
</div>`;
