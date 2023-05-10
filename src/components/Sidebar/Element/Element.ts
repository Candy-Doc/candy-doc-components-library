import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import ElementStyle from "./ElementStyle";

export type CandySidebarElementProps = {
  label: string;
  active: boolean;
  disabled: boolean;
};

@customElement("candy-sidebar-element")
export class CandySidebarElement extends LitElement {
  static styles = ElementStyle;

  @property({ type: String })
  label = "Home";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  render() {
    const styleClass = this.active
      ? "bg-gray text-blue"
      : "text-black hover:bg-gray-50 hover:text-gray-900";
    return html`
      <button href="#" class="${"element-container " + styleClass}" ?disabled="${this.disabled}">
        <div class="icon-container"><slot name="icon"></slot></div>
        ${this.label}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar-element": CandySidebarElement;
  }
}
