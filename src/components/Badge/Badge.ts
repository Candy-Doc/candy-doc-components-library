import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import BadgeStyle from "./Badge.css" assert { type: "css" };

export type CandyBadgeProps = {
  label: string;
};

@customElement("candy-badge")
export class CandyBadge extends LitElement {
  static styles = unsafeCSS(BadgeStyle);

  @property({ type: String })
  label = "Badge";

  render() {
    return html` <span class="badge-container" part="badge"> ${this.label} </span> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-badge": CandyBadge;
  }
}
