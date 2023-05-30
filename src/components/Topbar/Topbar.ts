import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import TopbarStyle from "./TopbarStyle";
import "../Logos/LogoMark";
import "../Logos/LogoHorizontal";
import "../Input/Input";

@customElement("candy-topbar")
export class CandyTopbar extends LitElement {
  static styles = TopbarStyle;

  @state()
  mobile = false;

  connectedCallback() {
    super.connectedCallback();
    this.resize();
    window.addEventListener("resize", this.resize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.resize);
    super.disconnectedCallback();
  }


  resize = () => {
    if (window.innerWidth < 768) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  render() {
    return html`
      <header class="topbar-container">
        <div class="${this.mobile ? "logo-reduced" : "logo"}">
          <a href="/">
            ${this.mobile ?
              html`<candy-logo-mark></candy-logo-mark>`
              :
              html`<candy-logo-horizontal></candy-logo-horizontal>`
            }
          </a>
        </div>
        <nav class="navbar">
          <ul>
            <slot></slot>
          </ul>
        </nav>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-topbar": CandyTopbar;
  }
}
