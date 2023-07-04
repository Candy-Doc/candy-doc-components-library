import { html } from "lit";

import { CandyPopoverProps } from "../../../components/Popover";

export const iconWithPopover = (args: CandyPopoverProps) => html`<div
  class="popover-container half-width"
>
  <candy-icon size="md">
    <fa-icon slot="icon" class="fa-solid fa-candy-cane" id="anchor-third"></fa-icon>
  </candy-icon>
  <candy-popover .isActive=${args.isActive} side=${args.side} targetId="anchor-third">
    <div class="icon-container">
      <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
    </div>
  </candy-popover>
</div>`;
