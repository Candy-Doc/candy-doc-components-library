import { html } from "lit";
import { CandyPopoverProps } from "../../components/Popover";

export const secondRenderPopover = (args: CandyPopoverProps) => html`<div style="width: 50%">
  <candy-sidebar>
    <candy-accordion ?active=${args.isParentVisible}>
      <candy-sidebar-element label="Salut">
        <fa-icon
          slot="options"
          class="fa-solid fa-location-crosshairs"
          size="2em"
          id="anchor-bis"
        ></fa-icon>
      </candy-sidebar-element>
      <candy-popover .isActive=${args.isActive} side=${args.side} .isParentVisible=${args.isParentVisible} target="anchor-bis">
        <div style="display: flex; align-items: center; height: 100%; justify-content: center">
          <fa-icon
            class="fa-solid fa-location-crosshairs"
            size="2em"
          ></fa-icon>
        </div>
      </candy-popover>
    </candy-accordion>
  </candy-sidebar>
</div>`;
