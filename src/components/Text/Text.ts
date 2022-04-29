import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./text.css.js";

export type CandyTextProps = {
  text: string;
};

@customElement("candy-text")
export class CandyText extends LitElement {
  static styles = [styles];

  @property({ type: String })
  childText = "";

  returnString() {
    const frag = document.createRange().createContextualFragment(`${this.childText}`);
    return frag;
  }

  render() {
    return html` <div class="prose">${this.returnString()}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-text": CandyText;
  }
}
