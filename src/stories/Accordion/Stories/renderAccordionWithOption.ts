import { html } from "lit";

import { CandyAccordionProps } from "../../../components/Accordion";
import { AccordionControl } from "../AccordionMeta";

export const renderAccordionWithOption = (
  args: CandyAccordionProps & AccordionControl,
  isActive: { value: boolean }
) => html`<candy-accordion
  label=${args.label}
  ?active=${args.active}
  ?disabled=${args.disabled}
  ?minimizeOptions=${args.minimizeOptions}
  optionsPopoverSide=${args.optionsPopoverSide}
  @onChange=${({ detail }: CustomEvent) => (isActive.value = detail.value)}
>
  ${args.hasIcon ? html`<fa-icon slot="icon" class="fa-solid fa-candy-cane"></fa-icon>` : null}
  ${args.hasOptions
    ? html`<fa-icon slot="options" class="fa-solid fa-location-crosshairs"></fa-icon
        ></fa-icon>`
    : null}
  <candy-alert>
    <span slot="content"> I'm the text inside an info alert</span>
  </candy-alert>
</candy-accordion>`;
