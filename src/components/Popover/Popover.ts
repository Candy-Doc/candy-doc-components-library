import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { PopoverSide } from "./Types";
import PopoverStyle from "./PopoverStyle";
import crossIcon from "../Shared/cross-icon";

export type CandyPopoverProps = {
  side: PopoverSide;
};

@customElement("candy-popover")
export class CandyPopover extends LitElement {
  static styles = PopoverStyle;

  @state()
  isActive = false;

  @property({ type: String })
  side = PopoverSide.Right;

  handleClick = (e: Event) => {
    e.stopPropagation();
    this.isActive = !this.isActive;
  };

  render() {
    return html`
      <div id="popover" class="popover" part="popover" data-testid="popover">
        <slot class="cursor-pointer" @click=${this.handleClick}></slot>
        <div
          class="popover-content ${`popover-${this.side}`} ${!this.isActive
            ? "popover-hide"
            : null}"
        >
          <div @click=${this.handleClick} class="popover-cross">${crossIcon}</div>
          <div part="popover-arrow" class="popover-arrow ${`popover-arrow-${this.side}`}"></div>
          <div part="popover-box" class="popover-box">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-popover": CandyPopover;
  }
}
