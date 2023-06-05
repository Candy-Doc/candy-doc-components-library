import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import LogoMark from "../../assets/logos/logo_mark.svg";

@customElement("candy-logo-mark")
export class CandyLogoMark extends LitElement {
  static styles = css`
    img {
      width: 100%;
      height: 100%;
    };
  `;

  render() {
    return html`<img style={{}} part="logo-mark" class="toto" src=${LogoMark} alt="Candy-Doc-Mark" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-logo-mark": CandyLogoMark;
  }
}
