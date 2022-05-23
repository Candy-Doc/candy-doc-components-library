import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "../Logos/LogoHorizontal";
import styles from "./sidebar.css.js";

@customElement("candy-sidebar")
export class CandySidebar extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="flex h-full border-r border-gray-200 pt-5 bg-white overflow-y-auto">
        <nav class="flex-1 px-2 pb-4 space-y-1">
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
