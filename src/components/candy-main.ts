import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("candy-main")
export class CandyMain extends LitElement {
  static styles = css`
    @unocss-placeholder;
  `;

  render() {
    return html`
      <main class="font-sans p-8 m-8">
        <h1>Main element</h1>
        <slot></slot>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-main": CandyMain;
  }
}
