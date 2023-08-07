import { html } from "lit";

import { CandyTopbarProps } from "../../../components/Topbar";

export const renderTobpar = (args: CandyTopbarProps) => html` <candy-topbar
  ?isopen=${args.isopen}
  style="position: relative"
>
  <candy-topbar-element label="Getting Started"></candy-topbar-element>
  <candy-topbar-element label="Graph"></candy-topbar-element>
  <candy-topbar-element label="Contact">
    <fa-icon slot="icon" class="fa-brands fa-github"></fa-icon>
  </candy-topbar-element>
  <candy-topbar-element>
    <a slot="icon" href="https://google.com"> <fa-icon class="fa-brands fa-github"> </fa-icon></a>
  </candy-topbar-element>
</candy-topbar>`;
