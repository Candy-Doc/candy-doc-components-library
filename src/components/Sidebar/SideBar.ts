import { LitElement, PropertyValues, html, unsafeCSS, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";

import expandIcon from "../../assets/icons/collapse-icon.svg";
import SidebarStyle from "./SideBar.css?inline";

export type CandySidebarProps = {
  canCollapse: boolean;
  onCollapse: (e: CustomEvent) => void;
};

@customElement("candy-sidebar")
export class CandySidebar extends LitElement {
  static styles = css`
    ${unsafeCSS(SidebarStyle)}
  `;

  @state()
  collapsed = false;

  @property({ type: Boolean })
  canCollapse = true;

  protected updated(_changedProperties: PropertyValues | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has("collapsed")) {
      Array.from(this.children).forEach((slot) => {
        if (this.collapsed) {
          slot.setAttribute("collapsed", "");
        } else {
          slot.removeAttribute("collapsed");
        }
      });
    }
  }

  private handleCollapse(): void {
    this.collapsed = !this.collapsed;
    const event = new CustomEvent("onCollapse", {
      bubbles: false,
      composed: true,
      detail: { value: this.collapsed },
    });
    this.dispatchEvent(event);
  }
  render() {
    return html`
      <section
        class="sidebar-container ${this.collapsed ? "sidebar-mini " : null}"
        part="sidebar"
        role="complementary"
        @onReopen="${this.handleCollapse}"
      >
        <div>
          ${this.canCollapse
            ? html` <div class="icon-container">
                <img
                  src=${expandIcon}
                  alt="collapse-icon"
                  @click="${this.handleCollapse}"
                  role="button"
                />
              </div>`
            : null}
          <slot></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar": CandySidebar;
  }
}
