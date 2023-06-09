import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import TitletStyle from "./DocTitleStyle";

export type CandySidebarDocTitleProps = {
  label: string;
  active: boolean;
};

@customElement("candy-sidebar-doc-title")
export class CandySidebarDocTitle extends LitElement {
  static styles = TitletStyle;

  @property({ type: String })
  label = "Home";

  @property({ type: Boolean })
  active = false;

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
        <button href="#" class="${"element-container " + styleClass}">
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
