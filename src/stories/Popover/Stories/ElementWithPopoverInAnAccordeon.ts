import { html } from "lit";

import { CandyPopoverProps } from "../../../components/Popover";

export const elementWithPopoverInAnAccordeon = (args: CandyPopoverProps) => html`<div
  class="popover-container half-width"
>
  <candy-sidebar>
    <candy-accordion ?active=${args.isParentVisible}>
      <candy-sidebar-element label="Element">
        <fa-icon
          slot="options"
          class="fa-solid fa-location-crosshairs"
          size="2em"
          id="anchor-bis"
        ></fa-icon>
      </candy-sidebar-element>
      <candy-popover
        .isActive=${args.isActive}
        side=${args.side}
        .isParentVisible=${args.isParentVisible}
        targetId="anchor-bis"
      >
        <div class="icon-container">
          <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
        </div>
      </candy-popover>
    </candy-accordion>
  </candy-sidebar>
</div>`;
