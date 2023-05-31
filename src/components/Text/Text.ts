import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export type CandyTextProps = {
  text: string;
};

@customElement("candy-text")
export class CandyText extends LitElement {
  @property({ type: String })
  childText = "";

  returnString() {
    const frag = document.createRange().createContextualFragment(`${this.childText}`);
    return frag;
  }

  render() {
    return html`<div part="prose" class="prose">${this.returnString()}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-text": CandyText;
  }
}
