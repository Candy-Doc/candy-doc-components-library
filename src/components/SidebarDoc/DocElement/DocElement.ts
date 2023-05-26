import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import ElementStyle from "./DocElementStyle";
import candyIcon from "../../../assets/icons/candy-icon.svg"

export type CandySidebarDocElementProps = {
  label: string;
  active: boolean;
};

@customElement("candy-sidebar-doc-element")
export class CandySidebarDocElement extends LitElement {
  static styles = ElementStyle;

  @property({ type: String })
  label = "Home";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  candyIcon = true;

  render() {
    const styleClass = this.active
      ? "text-blue"
      : "text-gray";

    return html`
      <button
        href="#"
        class="${"element-container " + styleClass}"
        part="doc-element"
      >
        ${this.active ?
          this.candyIcon ? html`
            <div class="icon-container">
              <img src=${candyIcon} alt="candy-icon"/>
            </div>` : html`
            <div class= "icon-container" >
              <img src=${candyIcon} alt="candy-icon" />
            </div>`
          : null }
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
