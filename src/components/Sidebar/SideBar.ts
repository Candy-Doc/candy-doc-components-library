import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../Logos/LogoHorizontal";
import SidebarStyle from "./SidebarStyle";

@customElement("candy-sidebar")
export class CandySidebar extends LitElement {
  static styles = SidebarStyle;

  render() {
    return html`
      <div class="sidebar-container">
        <nav>
          <slot></slot>
        </nav>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar": CandySidebar;
  }
}
