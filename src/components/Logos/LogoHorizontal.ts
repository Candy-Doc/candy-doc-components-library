import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import LogoHorizontal from "../../assets/logos/logo_horizontal.svg";

@customElement("candy-logo-horizontal")
export class CandyLogoHorizontal extends LitElement {
  static styles = css`
    .h-full {
      height: 100%;
    }
  `;

  render() {
    return html`<img class="h-full" src=${LogoHorizontal} alt="Candy-Doc" /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-logo-horizontal": CandyLogoHorizontal;
  }
}
