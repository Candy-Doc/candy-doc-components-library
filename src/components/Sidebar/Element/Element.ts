import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import ElementStyle from "./ElementStyle";

export type CandySidebarElementProps = {
  label: string;
  active: boolean;
  disabled: boolean;
  collapsed: boolean;
};

@customElement("candy-sidebar-element")
export class CandySidebarElement extends LitElement {
  static styles = ElementStyle;

  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  collapsed = false;

  render() {
    const styleClass = this.active ? "bg-gray text-blue" : "text-black";

    return html`
      <button
        part="sidebar-element"
        href="#"
        class="${"element-container " + styleClass} ${!this.collapsed
          ? "element-container-extended"
          : null}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
        <p>${!this.collapsed ? this.label : null}</p>
        <div class="end-icons">
          <div class="options-container">
            <slot name="options"></slot>
          </div>
        </div>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar-element": CandySidebarElement;
  }
}
