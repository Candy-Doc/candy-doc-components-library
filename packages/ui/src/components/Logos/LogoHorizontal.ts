import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import LogoHorizontal from "../../assets/logos/logo_horizontal.svg";

@customElement("candy-logo-horizontal")
export class CandyLogoHorizontal extends LitElement {
  render() {
    return html`<img src=${LogoHorizontal} alt="Candy-Doc" /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-logo-horizontal": CandyLogoHorizontal;
  }
}
