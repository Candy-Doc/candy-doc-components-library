import { html } from "lit";
import { CandyPopoverProps } from "../../components/Popover";

export const popoverOnHiddenTarget = (args: CandyPopoverProps) => html`<div style="width: 50%">
  <candy-accordion ?active=${args.isParentVisible}>
    <candy-icon size="md">
      <fa-icon slot="icon" class="fa-solid fa-candy-cane" id="anchor-hidden"></fa-icon>
      <candy-popover .isActive=${args.isActive} side=${args.side} .isParentVisible=${args.isParentVisible} target="anchor-hidden">
        <div style="display: flex; align-items: center; height: 100%; justify-content: center">
          <fa-icon
            class="fa-solid fa-location-crosshairs"
            size="2em"
          ></fa-icon>
        </div>
      </candy-popover>
    </candy-icon>
  </candy-accordion>
</div>`;
