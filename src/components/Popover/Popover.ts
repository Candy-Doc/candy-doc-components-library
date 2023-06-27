import { LitElement, PropertyValues, css, html, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import { PopoverSide } from "./Types";
import PopoverStyle from "./Popover.css?inline";

export type CandyPopoverProps = {
  side: PopoverSide;
  isParentVisible: boolean;
  isActive: boolean;
  targetId: string;
};

@customElement("candy-popover")
export class CandyPopover extends LitElement {
  static styles = css`
    ${unsafeCSS(PopoverStyle)}
  `;

  @query("#popover")
  componentRef!: HTMLElement;

  @property({ type: Boolean })
  isActive = false;

  @property({ type: Boolean })
  isParentVisible = true;

  @property({ type: PopoverSide })
  side = PopoverSide.Right;

  @property({ type: String })
  targetId = undefined;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.setPosition);
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.setPosition);
    super.disconnectedCallback();
  }

  protected updated(changedProperties: PropertyValues | Map<PropertyKey, unknown>): void {
    if (changedProperties.has("side") || changedProperties.get("isActive")) {
      this.setPosition();
    }
  }

  setPosition = () => {
    if (this.targetId) {
      const targetElement = document.getElementById(this.targetId);
      if (!targetElement) {
        return;
      }
      const paddingOffset = this.getOffset({
        elemHeight: targetElement.offsetHeight,
        elemWidth: targetElement.offsetWidth,
      });
      const { offsetLeft, offsetTop } = targetElement;

      this.componentRef.style.left = `${offsetLeft + paddingOffset.left}px`;
      this.componentRef.style.top = `${offsetTop + paddingOffset.top}px`;
    }
  };

  getOffset = ({ elemHeight, elemWidth }: { elemHeight: number; elemWidth: number }) => {
    const offset = {
      top: 0,
      left: 0,
    };
    const { offsetWidth, offsetHeight } = this.componentRef;

    switch (this.side) {
      case PopoverSide.Left:
        offset.top = -offsetHeight / 2 + elemHeight / 2;
        offset.left = -(offsetWidth - elemWidth / 2) - 30;
        break;
      case PopoverSide.Top:
        offset.top = -offsetHeight - 20;
        offset.left = -(offsetWidth / 2 - elemWidth / 2);
        break;
      case PopoverSide.Bottom:
        offset.top = elemHeight + 20;
        offset.left = -(offsetWidth / 2 - elemWidth / 2);
        break;
      default:
        offset.top = -offsetHeight / 2 + elemHeight / 2;
        offset.left = elemWidth / 2 + 30;
        break;
    }
    return offset;
  };

  render() {
    const hidePopover = !(this.isActive && this.isParentVisible);

    return html`
      <div
        id="popover"
        class="popover-container ${hidePopover ? "popover-hide" : null}"
        part="popover"
      >
        <div class="${`popover-arrow popover-${this.side}`}"></div>
        <div class="popover-content">
          <slot></slot>
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
