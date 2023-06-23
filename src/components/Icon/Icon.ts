import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { iconSize, IconSizes } from "./Icons.js";
import IconStyle from "./Icon.css?inline";

export type CandyIconProps = {
  size: IconSizes;
};

@customElement("candy-icon")
export class CandyBadge extends LitElement {
  static styles = css`
    ${unsafeCSS(IconStyle)}
  `;

  @property({ type: String })
  size: IconSizes = IconSizes.sm;

  render() {
    const iconClasses = iconSize[this.size];
    return html`
      <div class=${iconClasses} part="icon">
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
