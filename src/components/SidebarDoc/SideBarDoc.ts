import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import SidebarStyle from "./SideBarDoc.css" assert { type: "css" };

@customElement("candy-sidebar-doc")
export class CandySidebarDoc extends LitElement {
  static styles = unsafeCSS(SidebarStyle);

  render() {
    return html`
      <div class="sidebar-doc-container" part="doc-sidebar">
        <section>
          <slot></slot>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar-doc": CandySidebarDoc;
  }
}
