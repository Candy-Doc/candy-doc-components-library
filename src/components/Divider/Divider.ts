import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import DividerStyle from "./DividerStyle";

@customElement("candy-divider")
export class CandyDivider extends LitElement {
  static styles = DividerStyle;

  render() {
    return html` <div class="divider-container"><div></div></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-divider": CandyDivider;
  }
}
