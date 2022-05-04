import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "../Logos/LogoHorizontal";
import styles from "./sidebar.css.js";

@customElement("candy-sidebar")
export class CandySidebar extends LitElement {
  static styles = [styles];

  render() {
    return html`<div>
      <div class="flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
          <div class="flex-1 flex flex-col">
            <nav class="flex-1 px-2 pb-4 space-y-1">
              <slot></slot>
            </nav>
          </div>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar": CandySidebar;
  }
}
