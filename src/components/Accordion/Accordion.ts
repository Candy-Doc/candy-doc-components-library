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
  };

  render() {
    const styleClass = this.active ? "text-blue" : "text-black";
    const content = this.active
      ? html`
          <div class="accordion-childrens">
            <slot></slot>
          </div>
        `
      : null;

    return html`
      <div part="accordion">
        <button
          role="button"
          href="#"
          class="${"element-container " + styleClass} ${!this.collapsed
            ? "element-container-extended"
            : null}"
          ?disabled="${this.disabled}"
          @click=${this.handleClick}
        >
          <slot name="icon"></slot>
          <p>${!this.collapsed ? this.label : null}</p>
          ${!this.collapsed
            ? html`<div class="end-icons">
                  <div class="options-container">
                    <slot name="options"></slot>
                  </div>
                </div>
                <div class=${`chevron ${this.active ? "rotate" : ""}`}></div> `
            : null}
        </button>
        ${!this.collapsed ? content : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-accordion": CandyAccordion;
  }
}
