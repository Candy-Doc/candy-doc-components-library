import { html } from "lit";

import { CandyPopoverProps } from "../../../components/Popover";

export const iconWithPopover = (args: CandyPopoverProps) => html`
<candy-popover .isActive=${args.isActive} side=${args.side} ?isParentVisible=${args.isParentVisible} class="popover-container">
  <candy-icon>
    <fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon>
  </candy-icon>
    <div slot="content" class="icon-container">
      <fa-icon class="fa-solid fa-location-crosshairs"></fa-icon>
    </div>
  </candy-popover>
`;
