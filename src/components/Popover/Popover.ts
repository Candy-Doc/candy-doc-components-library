import { LitElement, PropertyValues, css, html, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import { PopoverSide } from "./Popovers";
import PopoverStyle from "./Popover.css?inline";

export type CandyPopoverProps = {
  side: PopoverSide;
  isParentVisible: boolean;
  isActive: boolean;
  target: string;
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
  target = undefined;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.setPosition);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.setPosition);
    super.disconnectedCallback();
  }

  protected updated(changedProperties: PropertyValues | Map<PropertyKey, unknown>): void {
    if (changedProperties.has("side") || (changedProperties.has("isActive") && changedProperties.get("isActive") === true)) {
      this.setPosition();
    }
  }

  setPosition = () => {
    if (this.target) {
      const targetElement = document.getElementById(this.target);
      if (!targetElement) {
        return;
      }
      const offset = this.getOffset({ elemHeight: targetElement.offsetHeight, elemWidth: targetElement.offsetWidth });
      const targetRect = {
        left: targetElement.offsetLeft,
        top: targetElement.offsetTop,
      };
      this.componentRef.style.left = `${targetRect.left + offset.left}px`;
      this.componentRef.style.top = `${targetRect.top + offset.top}px`;
    }
  }

  getOffset = ({ elemHeight, elemWidth }: { elemHeight: number, elemWidth: number }) => {
    const offset = {
      top: 0,
      left: 0,
    };
    const componentWidth = this.componentRef.offsetWidth;
    const componentHeight = this.componentRef.offsetHeight;

    switch (this.side) {
      case PopoverSide.Left:
        offset.top = -componentHeight / 2 + elemHeight / 2;
        offset.left = -(componentWidth - elemWidth / 2) - 30;
        break;
      case PopoverSide.Top:
        offset.top = -componentHeight - 20;
        offset.left = -(componentWidth / 2 - elemWidth / 2);
        break;
      case PopoverSide.Bottom:
        offset.top = elemHeight + 20;
        offset.left = -(componentWidth / 2 - elemWidth / 2);
        break;
      default:
        offset.top = -componentHeight / 2 + elemHeight / 2;
        offset.left = elemWidth / 2 + 30;
        break;
    }
    return offset;
  };

  render() {
    return html`
      <div
        id="popover"
        class="popover-container ${!this.isActive || !this.isParentVisible ? "hide-popover" : null}"
        part="popover"
      >
        <div class="${`arrow ${this.side.toString()}`}"></div>
        <div class="content">
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
