import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import BadgeStyle from "./Badge.css?inline";

export type CandyBadgeProps = {
  label: string;
};

@customElement("candy-badge")
export class CandyBadge extends LitElement {
  static styles = css`
    ${unsafeCSS(BadgeStyle)}
  `;

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
