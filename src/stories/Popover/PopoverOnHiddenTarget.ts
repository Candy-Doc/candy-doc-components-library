import { html } from "lit";

import { CandyPopoverProps } from "../../components/Popover";
import { iconContainerClass, storyWidthClass } from "./iconContainerClass";

export const popoverOnHiddenTarget = (args: CandyPopoverProps) => html`<div
  style=${storyWidthClass}
>
  <candy-accordion ?active=${args.isParentVisible}>
    <candy-icon size="md">
      <fa-icon slot="icon" class="fa-solid fa-candy-cane" id="anchor-hidden"></fa-icon>
      <candy-popover
        .isActive=${args.isActive}
        side=${args.side}
        .isParentVisible=${args.isParentVisible}
        targetId="anchor-hidden"
      >
        <div style=${iconContainerClass}>
          <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
        </div>
      </candy-popover>
    </candy-icon>
  </candy-accordion>
</div>`;
