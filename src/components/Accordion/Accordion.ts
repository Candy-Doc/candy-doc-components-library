import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import AccordionStyle from "./AccordionStyle";

export type CandyAccordionProps = {
  label: string;
  active: boolean;
  disabled: boolean;
};

@customElement("candy-accordion")
export class CandyAccordion extends LitElement {
  static styles = AccordionStyle;

  @property({ type: String })
  label = "Home";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  collapsed = false;

  handleClick = () => {
    this.active = !this.active;

    const event = new CustomEvent("onChange", {
      bubbles: false,
      composed: true,
      detail: { value: this.active },
    });
    this.dispatchEvent(event);
    if (this.collapsed) {
      const reopen = new CustomEvent("onReopen", {
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(reopen);
    }
  };

  render() {
    const styleClass = this.active ? "text-blue" : "text-black";
    const slotContent = html`
      <div class="accordion-childrens ${this.collapsed || !this.active ? "hidden" : null}">
        <slot></slot>
      </div>
    `;

    return html`
      <div part="accordion">
        <button
          part="accordion-button"
          role="button"
          href="#"
          class="${"element-container " + styleClass} ${!this.collapsed
            ? "element-container-extended"
            : null}"
          ?disabled="${this.disabled}"
          @click="${this.handleClick}"
        >
          <slot name="icon"></slot>
          <p part="accordion-text">${!this.collapsed ? this.label : null}</p>
          ${!this.collapsed
            ? html`<div class="end-icons">
                  <div class="options-container">
                    <slot name="options"></slot>
                  </div>
                </div>
                <div
                  part="accordion-chevron"
                  class=${`chevron ${this.active ? "rotate" : ""}`}
                ></div> `
            : null}
        </button>
        ${slotContent}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-accordion": CandyAccordion;
  }
}
