import { LitElement, PropertyValues, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import expandArrow from "../../assets/icons/collapse-icon.svg";
import SidebarStyle from "./SidebarStyle";

export type CandySidebarProps = {
  collapsed: boolean;
};

@customElement("candy-sidebar")
export class CandySidebar extends LitElement {
  static styles = SidebarStyle;

  @property({ type: Boolean })
  collapsed = false;

  protected updated(_changedProperties: PropertyValues | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has("collapsed")) {
      const slots = this.shadowRoot?.querySelector("slot")?.assignedElements();
      if (slots) {
        slots.forEach(slot => {
          if (this.collapsed) {
            slot.setAttribute("collapsed", "");
          } else {
            slot.removeAttribute("collapsed");
          }
        })
      }
    }
  }

  render() {
    return html`
      <div class="sidebar-container ${this.collapsed ? "sidebar-mini " : null}" part="sidebar">
        <section>
          <div class="icon-container">
            <img src=${expandArrow} />
          </div>
          <slot></slot>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar": CandySidebar;
  }
}
