import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import BreadcrumbStyle from "./BreadcrumbStyle";

@customElement("candy-breadcrumb")
export class CandyBreadcrumb extends LitElement {
  static styles = BreadcrumbStyle;

  render() {
    return html`
      <div class="breadcrumb-container" aria-label="Breadcrumb" part="breadcrumb">
        <ol role="list">
          <slot></slot>
        </ol>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-breadcrumb": CandyBreadcrumb;
  }
}
