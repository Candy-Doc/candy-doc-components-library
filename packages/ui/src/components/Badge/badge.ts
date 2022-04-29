import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./badge.css.js";

export type CandyBadgeProps = {
  label: string;
};

@customElement("candy-badge")
export class CandyBadge extends LitElement {
  static styles = [styles];

  @property({ type: String })
  label = "Badge";

  render() {
    return html`
      <span class="rounded-full px-2 py-1 text-xs uppercase font-medium text-white bg-blue-600">
        ${this.label}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-badge": CandyBadge;
  }
}
