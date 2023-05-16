import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import BreadcrumbStyle from "./BreadcrumbStyle";

export type CandyBreadcrumbProps = {
  items: Array<string>;
};

@customElement("candy-breadcrumb")
export class CandyBreadcrumb extends LitElement {
  static styles = BreadcrumbStyle;

  @property({ type: Array(String) })
  items = ["Home", "Page 1", "Subpage 1"];

  render() {
    const htmlItems = this.items.map((item, i, row) => {
      const result = [
        html`<li>
          <a href="/">${item}</a>
        </li> `,
      ];
      if (i + 1 !== row.length) {
        result.push(html` <li>
          <svg
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
        </li>`);
      }
      return result;
    });

    return html`
      <nav class="breadcrumb-container" aria-label="Breadcrumb" part="breadcrumb">
        <ol role="list">
          ${htmlItems}
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-breadcrumb": CandyBreadcrumb;
  }
}
