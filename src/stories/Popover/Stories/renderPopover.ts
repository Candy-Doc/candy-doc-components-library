import { html } from "lit";

import { CandyPopoverProps } from "../../../components/Popover";
import { iconContainerClass, storyWidthClass } from "../iconContainerClass";

export const renderPopover = (args: CandyPopoverProps) => html`<div style=${storyWidthClass}>
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
      <div style=${iconContainerClass}>
        <fa-icon class="fa-solid fa-location-crosshairs" size="2em"></fa-icon>
      </div>
    </candy-popover>
  </candy-sidebar>
</div>`;
