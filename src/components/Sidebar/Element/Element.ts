import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import {
  PopoverInComponentHandler,
  PopoverInComponentHandlerProps,
} from "../../Shared/PopoverInComponentHandler";
import ElementStyle from "./ElementStyle";
import VerticalMenuBlue from "../../../assets/icons/vertical-menu blue.svg";
import VerticalMenuBlack from "../../../assets/icons/vertical-menu-black.svg";
import "../../Popover";

export type CandySidebarElementProps = PopoverInComponentHandlerProps & {
  label: string;
  active: boolean;
  disabled: boolean;
  collapsed: boolean;
};

@customElement("candy-sidebar-element")
export class CandySidebarElement extends PopoverInComponentHandler {
  static styles = [PopoverInComponentHandler.styles, ElementStyle];

  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  collapsed = false;

  private handleClick(): void {
    if (this.collapsed) {
      const reopen = new CustomEvent("onReopen", {
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(reopen);
    }
  }

  render() {
    const styleClass = this.active ? "bg-gray text-blue" : "text-black";

    const renderOptionsIcons =
      this.minimizeOptions && this.countOptionsSlotAmount() >= 2
        ? html` <div class="end-icons">
            <div class="options-container">
              <img
                @click=${this.handleVerticalIconClick}
                id="sidebar-element-vertical-icon"
                style="width: 24px; height: 24px"
                src=${this.active ? VerticalMenuBlue : VerticalMenuBlack}
                alt="sidebar-element-vertical-icon"
                data-testid="sidebar-element-options-icon"
              />
            </div>
            <candy-popover
              ?isActive=${this.isPopoverActive}
              side=${this.optionPopoverSide}
              targetId="sidebar-element-vertical-icon"
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
      <button
        part="sidebar-element"
        href="#"
        class="${"element-container " + styleClass} ${!this.collapsed
          ? "element-container-extended"
          : null}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
        <slot name="icon"></slot>
        <p part="sidebar-element-text">${!this.collapsed ? this.label : null}</p>
        ${!this.collapsed ? renderOptionsIcons : null}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar-element": CandySidebarElement;
  }
}
