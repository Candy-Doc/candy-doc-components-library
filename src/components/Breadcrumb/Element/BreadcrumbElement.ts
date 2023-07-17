import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import ElementStyle from "./BreadcrumbElementStyle";

export type CandyBreadcrumbElementProps = {
  label: string;
  isLast?: boolean;
};

@customElement("candy-breadcrumb-element")
export class CandyBreadcrumbElement extends LitElement {
  static styles = ElementStyle;

  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  isLast = false;

  render() {
    return html`
      <li part="breadcrumb-element">
        <a href="/">${this.label}</a>
        ${!this.isLast
          ? html` <span class="icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>`
          : null}
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-breadcrumb-element": CandyBreadcrumbElement;
  }
}
