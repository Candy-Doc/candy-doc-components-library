import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./element.css.js";

export type CandySidebarElementProps = {
  label: string;
  active: boolean;
  disabled: boolean;
};

@customElement("candy-sidebar-element")
export class CandySidebarElement extends LitElement {
  static styles = [styles];

  @property({ type: String })
  label = "Home";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  render() {
    const styleClass = this.active
      ? "bg-gray-100 text-blue-600"
      : "text-black hover:bg-gray-50 hover:text-gray-900";
    return html`
      <button
        href="#"
        class="${"w-full mb-1 rounded-md py-2 px-2 flex items-center text-base font-medium disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none " +
        styleClass}"
        ?disabled="${this.disabled}"
      >
        <div class="mr-4"><slot name="icon" /></div>
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
