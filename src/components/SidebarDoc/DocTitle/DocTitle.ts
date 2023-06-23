import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import TitleStyle from "./DocTitle.css?inline";

export type CandySidebarDocTitleProps = {
  label: string;
  active: boolean;
};

@customElement("candy-sidebar-doc-title")
export class CandySidebarDocTitle extends LitElement {
  static styles = css`
    ${unsafeCSS(TitleStyle)}
  `;

  @property({ type: String })
  label = "Home";

  @property({ type: Boolean })
  active = false;

  handleClick = () => {
    this.active = !this.active;
    const event = new CustomEvent("onChange", {
      bubbles: false,
      composed: true,
      detail: { value: this.active },
    });
    this.dispatchEvent(event);
  };

  render() {
    const styleClass = this.active ? "text-blue" : "text-gray";

    const content = this.active
      ? html`
          <div class="title-childrens">
            <slot></slot>
          </div>
        `
      : null;

    return html`
      <div class="title-container" part="doc-title">
        <button href="#" class="${"element-container " + styleClass}" @click=${this.handleClick}>
          <div class=${`chevron ${this.active ? "rotate" : ""}`}></div>
          <p>${this.label}</p>
        </button>
        ${content}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar-doc-title": CandySidebarDocTitle;
  }
}
