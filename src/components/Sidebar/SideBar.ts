import { LitElement, PropertyValues, html } from "lit";
import { customElement, state, property } from "lit/decorators.js";

import expandIcon from "../../assets/icons/collapse-icon.svg";
import SidebarStyle from "./SidebarStyle";

export type CandySidebarProps = {
  canCollapse: boolean;
};

@customElement("candy-sidebar")
export class CandySidebar extends LitElement {
  static styles = SidebarStyle;

  @state()
  collapsed = false;

  @property({ type: Boolean })
  canCollapse = true;

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

  private handleCollapse() : void {
    this.collapsed = !this.collapsed;
  }

  render() {
    return html`
      <div class="sidebar-container ${this.collapsed ? "sidebar-mini " : null}" part="sidebar">
        <section>
          ${this.canCollapse ? html`          
            <div class="icon-container">
              <img src=${expandIcon} alt="expand-icon" @click="${this.handleCollapse}"/>
            </div>` : null}
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
