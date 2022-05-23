import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "../Logos/LogoHorizontal";
import "../Input/Input";
import styles from "./topbar.css.js";

@customElement("candy-topbar")
export class CandyTopbar extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <header class="bg-white border-b border-gray-200 flex-1">
        <div class="p-2 mx-auto">
          <div class="flex flex-row items-center justify-between">
            <div class="w-1/6">
              <a href="/">
                <candy-logo-horizontal></candy-logo-horizontal>
              </a>
            </div>
            <div class="w-1/4">
              <candy-input label=""></candy-input>
            </div>
          </div>
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
