import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./Divider.css.js";

@customElement("candy-divider")
export class CandyDivider extends LitElement {
  static styles = [styles];

  render() {
    return html` <div class="p-2"><div class="flex border-t"></div></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-divider": CandyDivider;
  }
}
