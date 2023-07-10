import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { PopoverSide } from "./Types";
import PopoverStyle from "./PopoverStyle";

export type CandyPopoverProps = {
  side: PopoverSide;
  isParentVisible: boolean;
  isActive: boolean;
  targetId: string;
};

@customElement("candy-popover")
export class CandyPopover extends LitElement {
  static styles = PopoverStyle;

  @state()
  isActive = false;

  @property({ type: Boolean })
  isParentVisible = true;

  @property({ type: String })
  side = PopoverSide.Right;

  handleClick = (e: Event) => {
    e.stopPropagation();
    this.isActive = !this.isActive;
  }

  render() {
    return html`
      <div
        id="popover"
        class="popover"
        part="popover"
        data-testid="popover"
      >
        <slot class="cursor-pointer" id="slot-target" @click=${this.handleClick}></slot>
        <div class="popover-container ${`popover-${this.side}`} ${!(this.isActive && this.isParentVisible) ? 'popover-hide' : null}">
            <div part="popover-arrow" class="popover-arrow ${`popover-arrow-${this.side}`}"></div>
            <div part="popover-content" class="popover-content">
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
