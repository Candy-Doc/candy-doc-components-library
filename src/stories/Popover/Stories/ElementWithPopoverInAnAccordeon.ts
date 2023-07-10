import { html } from "lit";

import { CandyPopoverProps } from "../../../components/Popover";

export const elementWithPopoverInAnAccordeon = (args: CandyPopoverProps) => html`<div
  class="popover-container half-width"
>
  <candy-sidebar>
    <candy-accordion>
      <candy-sidebar-element label="Element">
        <candy-popover slot="options" side=${args.side}>
          <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
          <div slot="content" class="icon-container">
            <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
          </div>
        </candy-popover>
      </candy-sidebar-element>
    </candy-accordion>
  </candy-sidebar>
</div>`;
