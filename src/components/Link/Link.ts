import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

export type CandyLinkProps = {
  label: string;
  url: string;
};

@customElement("candy-link")
export class CandyLink extends TailwindElement {
  @property({ type: String })
  label = "click me";

  @property({ type: String })
  url = "https://candy-doc.com";

  @property({ type: String })
  target = "_blank";

  render() {
    return html`<a class="font-medium underline" href=${this.url} target=${this.target}
      >${this.label}</a
    > `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-link": CandyLink;
  }
}
