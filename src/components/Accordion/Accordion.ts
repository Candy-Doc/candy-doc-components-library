import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import {
  PopoverInComponentHandler,
  PopoverInComponentHandlerProps,
} from "../Shared/PopoverInComponentHandler";
import { verticalMenuIcon } from "../Shared/vertical-menu-icon";
import AccordionStyle from "./AccordionStyle";
import "../Popover";

export type CandyAccordionProps = PopoverInComponentHandlerProps & {
  label: string;
  active: boolean;
  disabled: boolean;
  collapsed: boolean;
};

@customElement("candy-accordion")
export class CandyAccordion extends PopoverInComponentHandler {
  static styles = [PopoverInComponentHandler.styles, AccordionStyle];

  @state()
  hasSlotIcon = false;

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

  doesComponentHasIcon = () =>
    Array.from(this.children).some((child: Element) => child.slot === "icon");

  onSlotIconChange = () => {
    this.hasSlotIcon = this.doesComponentHasIcon();
  };

  render() {
    const textColor = this.active ? "text-blue" : "text-black";
    const slotContent = html`
      <div class="accordion-childrens ${this.collapsed || !this.active ? "hidden" : null}">
        <slot></slot>
      </div>
    `;

    const renderOptionsIcons =
      this.minimizeOptions && this.countOptionsSlotAmount() >= 2
        ? html` <div class="end-icons">
            <candy-popover class="options-container" side=${this.position}>
              <div class="vertical-menu-icon" data-testid="accordion-options-icon">${verticalMenuIcon}</div>
              <div slot="content" class="options-container">
                <slot name="options"></slot>
              </div>
            </candy-popover>
          </div>`
        : html`<div class="end-icons">
            <div class="options-container">
              <slot name="options"></slot>
            </div>
          </div> `;

    return html`
      <div part="accordion">
        <button
          part="accordion-button"
          role="button"
          href="#"
          class="${"element-container " + textColor} ${!this.collapsed
            ? "element-container-extended"
            : null}"
          ?disabled="${this.disabled}"
          @click="${this.handleClick}"
        >
          <slot @slotchange=${this.onSlotIconChange} name="icon"></slot>
          ${this.collapsed
            ? html` ${this.hasSlotIcon
                ? null
                : html`<div
                    part="accordion-chevron"
                    class=${`chevron ${this.active ? "rotate" : ""}`}
                  ></div>`}`
            : html`
                <p part="accordion-text">${this.label}</p>
                ${renderOptionsIcons}
                <div
                  part="accordion-chevron"
                  class=${`chevron ${this.active ? "rotate" : ""}`}
                ></div>
              `}
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
