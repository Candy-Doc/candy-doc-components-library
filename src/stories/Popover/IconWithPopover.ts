import { html } from "lit";
import { CandyPopoverProps } from "../../components/Popover";

export const iconWithPopover = (args: CandyPopoverProps) => html`<div style="width: 50%">
  <candy-icon size="md">
    <fa-icon slot="icon" class="fa-solid fa-candy-cane" id="anchor-third"></fa-icon>
  </candy-icon>
  <candy-popover .isActive=${args.isActive} target="anchor-third">
    <div style="display: flex; align-items: center; height: 100%; justify-content: center">
      <fa-icon
        class="fa-solid fa-location-crosshairs"
        size="2em"
      ></fa-icon>
    </div>
  </candy-popover>
</div>`;
