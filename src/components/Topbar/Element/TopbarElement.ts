import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import TopbarElementStyle from "./TopbarElementStyle";

export type CandyTopbarElementProps = {
  label: string;
};

@customElement("candy-topbar-element")
export class CandyTopbarElement extends LitElement {
  static styles = TopbarElementStyle;

  @property({ type: String })
  label = "";

  render() {
    return html`
      <li>
        <div class="title">
          ${this.label}
        </div>
        <div class="icon-container">
          <slot name="icon"></slot>
        </div>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-topbar-element": CandyTopbarElement;
  }
}
