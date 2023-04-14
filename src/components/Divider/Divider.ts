import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

@customElement("candy-divider")
export class CandyDivider extends TailwindElement {
  render() {
    return html` <div class="p-2"><div class="flex border-t"></div></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-divider": CandyDivider;
  }
}
