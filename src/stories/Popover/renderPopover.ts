import { html } from "lit";
import { CandyPopoverProps } from "../../components/Popover";

export const renderPopover = (args: CandyPopoverProps) => html`<div style="width: 50%">
  <candy-sidebar>
    <candy-sidebar-element label="Salut">
      <fa-icon
        slot="options"
        class="fa-solid fa-location-crosshairs"
        size="2em"
        id="anchor"
      ></fa-icon>
    </candy-sidebar-element>
  </candy-sidebar>
  <candy-popover .isActive=${args.isActive} target="anchor" side=${args.side}>
  <div style="display: flex; align-items: center; height: 100%; justify-content: center">
    <fa-icon
      class="fa-solid fa-location-crosshairs"
      size="2em"
    ></fa-icon>
  </div>
  </candy-popover>
</div>`;
