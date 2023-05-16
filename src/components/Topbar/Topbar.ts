import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../Logos/LogoHorizontal";
import "../Input/Input";
import TopbarStyle from "./TopbarStyle";

@customElement("candy-topbar")
export class CandyTopbar extends LitElement {
  static styles = TopbarStyle;

  render() {
    return html`
      <header class="topbar-container flex-1">
        <div class="logo">
          <a href="/">
            <candy-logo-horizontal></candy-logo-horizontal>
          </a>
        </div>
        <div class="navbar">
          <candy-input label=""></candy-input>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-topbar": CandyTopbar;
  }
}
