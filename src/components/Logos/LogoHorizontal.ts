import { html } from "lit";
import { customElement } from "lit/decorators.js";

import LogoHorizontal from "../../assets/logos/logo_horizontal.svg";
import { TailwindElement } from "../shared/tailwind.element";

@customElement("candy-logo-horizontal")
export class CandyLogoHorizontal extends TailwindElement {
  render() {
    return html`<img class="h-full" src=${LogoHorizontal} alt="Candy-Doc" /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-logo-horizontal": CandyLogoHorizontal;
  }
}
