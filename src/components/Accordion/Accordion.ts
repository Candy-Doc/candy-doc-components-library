import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import {
  PopoverInComponentHandler,
  PopoverInComponentHandlerProps,
} from "../Shared/PopoverInComponentHandler";
import AccordionStyle from "./AccordionStyle";
import VerticalMenuBlack from "../../assets/icons/vertical-menu-black.svg";
import VerticalMenuBlue from "../../assets/icons/vertical-menu blue.svg";
import "../Popover";

export type CandyAccordionProps = PopoverInComponentHandlerProps & {
  label: string;
  active: boolean;
  disabled: boolean;
};

@customElement("candy-accordion")
export class CandyAccordion extends PopoverInComponentHandler {
  static styles = [PopoverInComponentHandler.styles, AccordionStyle];

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
    const textColor = this.active ? "text-blue" : "text-black";
    const slotContent = html`
      <div class="accordion-childrens ${this.collapsed || !this.active ? "hidden" : null}">
        <slot></slot>
      </div>
    `;

    const renderOptionsIcons =
      this.minimizeOptions && this.countOptionsSlotAmount() >= 2
        ? html` <div class="end-icons">
            <div class="options-container">
              <img
                @click=${this.handleVerticalIconClick}
                id="vertical-icon"
                style="width: 24px; height: 24px"
                src=${this.active ? VerticalMenuBlue : VerticalMenuBlack}
                alt="accordion-vertical-icon"
                data-testid="accordion-options-icon"
              />
            </div>
            <candy-popover
              ?isActive=${this.isPopoverActive}
              side=${this.optionPopoverSide}
              targetId="vertical-icon"
              ?isTargetInShadowRoot=${true}
            >
              <div class="options-container">
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
          role="button"
          href="#"
          class="${"element-container " + textColor} ${!this.collapsed
            ? "element-container-extended"
            : null}"
          ?disabled="${this.disabled}"
          @click="${this.handleClick}"
        >
          <slot name="icon"></slot>
          <p>${!this.collapsed ? this.label : null}</p>
          ${!this.collapsed ? renderOptionsIcons : null}
          <div class=${`chevron ${this.active ? "rotate" : ""}`}></div>
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
