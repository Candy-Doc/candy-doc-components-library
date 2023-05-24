import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import ElementStyle from "./AccordionStyle";

export type CandyAccordionProps = {
  label: string;
  active: boolean;
  disabled: boolean;
};

@customElement("candy-accordion")
export class CandyAccordion extends LitElement {
  static styles = ElementStyle;

  @property({ type: String })
  label = "Home";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  render() {
    const styleClass = this.active
      // ? "bg-gray text-blue"
      ? "text-blue"
      : "text-black hover:bg-gray-50 hover:text-gray-900";

    const content = this.active ? html`
      <div class="accordion-childrens">
        <slot>

        </slot>
      </div>
    `: html``;

    return html`
      <section part="accordion">
        <button href="#" class="${"element-container " + styleClass}" ?disabled="${this.disabled}">
          <div class="icon-container"><slot name="icon"></slot></div>
          ${this.label}
          <div class="end-icons">
            <div class="options-container">
              <slot name="options"></slot>
            </div>
          </div>
          <div class="icon-container">
            <div class=${`chevron ${this.active ? "rotate" : ""}`}></div>
          </div>
        </button>
        ${content}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-accordion": CandyAccordion;
  }
}
