import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./icon.css.js";
import { iconSize, IconSizes } from "./Icons.js";

@customElement("candy-icon")
export class CandyBadge extends LitElement {
  static styles = [styles];

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
