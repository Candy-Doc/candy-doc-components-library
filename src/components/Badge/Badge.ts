import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import BadgeStyle from "./BadgeStyle";

export type CandyBadgeProps = {
  label: string;
};

@customElement("candy-badge")
export class CandyBadge extends LitElement {
  static styles = BadgeStyle;

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
