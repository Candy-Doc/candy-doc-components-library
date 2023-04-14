import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { iconSize, IconSizes } from "./Icons.js";
import { TailwindElement } from "../shared/tailwind.element.js";

export type CandyIconProps = {
  size: IconSizes;
};

@customElement("candy-icon")
export class CandyBadge extends TailwindElement {
  @property({ type: String })
  size: IconSizes = IconSizes.sm;

  render() {
    const iconClasses = iconSize[this.size];
    return html`
      <div class=${iconClasses}>
        <slot name="icon"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-icon": CandyBadge;
  }
}
