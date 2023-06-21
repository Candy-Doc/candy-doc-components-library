import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import TopbarElementStyle from "./TopbarElement.css" assert { type: "css" };

export type CandyTopbarElementProps = {
  label: string;
};

@customElement("candy-topbar-element")
export class CandyTopbarElement extends LitElement {
  static styles = unsafeCSS(TopbarElementStyle);

  @property({ type: String })
  label = "";

  render() {
    return html`
      <li part="topbar-element">
        <div class="title">${this.label}</div>
        <slot name="icon"></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-topbar-element": CandyTopbarElement;
  }
}
