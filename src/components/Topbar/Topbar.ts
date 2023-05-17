import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import TopbarStyle from "./TopbarStyle";
import "../Logos/LogoHorizontal";
import "../Input/Input";

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
          <ul>
            <slot></slot>
          </ul>
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
