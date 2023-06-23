import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import DividerStyle from "./Divider.css?inline";

@customElement("candy-divider")
export class CandyDivider extends LitElement {
  static styles = css`
    ${unsafeCSS(DividerStyle)}
  `;

  render() {
    return html`<div part="divider" class="divider-container"><div></div></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-divider": CandyDivider;
  }
}
