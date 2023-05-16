import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import LogoVertical from "../../assets/logos/logo_vertical.svg";

@customElement("candy-logo-vertical")
export class CandyLogoVertical extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<img src=${LogoVertical} alt="Candy-Doc" /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-logo-vertical": CandyLogoVertical;
  }
}
