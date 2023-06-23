import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import ElementStyle from "./DocElement.css?inline";
import Icon from "../../../assets/icons/candy-icon.svg";

export type CandySidebarDocElementProps = {
  label: string;
  active: boolean;
  candyIcon: boolean;
};

@customElement("candy-sidebar-doc-element")
export class CandySidebarDocElement extends LitElement {
  static styles = css`
    ${unsafeCSS(ElementStyle)}
  `;

  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  candyIcon = true;

  render() {
    const styleClass = this.active ? "text-blue" : "text-gray";

    return html`
      <button href="#" class="${"element-container " + styleClass}" part="doc-element">
        ${this.active
          ? this.candyIcon
            ? html` <div class="icon-container">
                <img src=${Icon} alt="candy-icon" />
              </div>`
            : html` <div class="icon-container">
                <img src=${Icon} alt="candy-icon" />
              </div>`
          : null}
        <p>${this.label}</p>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-sidebar-doc-element": CandySidebarDocElement;
  }
}
