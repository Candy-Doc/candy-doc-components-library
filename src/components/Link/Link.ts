import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import LinkStyle from "./Link.css" assert { type: "css" };

export type CandyLinkProps = {
  label: string;
  url: string;
  target: string;
};

@customElement("candy-link")
export class CandyLink extends LitElement {
  static styles = unsafeCSS(LinkStyle);

  @property({ type: String })
  label = "click me";

  @property({ type: String })
  url = "https://candy-doc.com";

  @property({ type: String })
  target = "_blank";

  render() {
    return html`<a class="link-container" href=${this.url} target=${this.target} part="link"
      >${this.label}</a
    > `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-link": CandyLink;
  }
}
