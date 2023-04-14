import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { TailwindElement } from "../shared/tailwind.element";
import "../Logos/LogoHorizontal";

@customElement("candy-sidebar")
export class CandySidebar extends TailwindElement {
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
