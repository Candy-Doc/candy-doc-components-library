import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

export type CandyBreadcrumbProps = {
  items: string[];
};

@customElement("candy-breadcrumb")
export class CandyBreadcrumb extends TailwindElement {
  @property({ type: Array(String) })
  items = ["Home", "Page 1", "Subpage 1"];

  render() {
    const htmlItems = this.items.map((item, i, row) => {
      const result = [
        html`<li>
          <a class="block transition-colors hover:text-gray-700" href="/">${item}</a>
        </li> `,
      ];
      if (i + 1 !== row.length) {
        result.push(html` <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
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
      <nav aria-label="Breadcrumb" part="breadcrumb">
        <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
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
