import { LitElement, PropertyValues, html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";

import TopbarStyle from "./TopbarStyle";
import "../Logos/LogoMark";
import "../Logos/LogoHorizontal";
import "../Divider";

export type CandyTopbarProps = {
  isopen: boolean;
};

@customElement("candy-topbar")
export class CandyTopbar extends LitElement {
  static styles = TopbarStyle;

  @query("#topbar-burger")
  burgerButton!: HTMLElement;

  @query("#drawer")
  drawer!: HTMLElement;

  @state()
  mobile = false;

  @property({ type: Boolean })
  isopen = false;

  connectedCallback() {
    super.connectedCallback();
    this.resize();
    window.addEventListener("resize", this.resize);
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.resize);
    super.disconnectedCallback();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (this.mobile && changedProperties.has("isopen")) {
      this.handleBurgerClick(this.isopen);
    }
  }

  protected firstUpdated(): void {
    if (this.mobile) {
      this.handleBurgerClick(this.isopen);
    }
  }

  resize = () => {
    if (window.innerWidth < 768) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  };

  openDrawer() {
    this.burgerButton.classList.add("active");
    this.drawer.classList.remove("display-none");
    this.drawer.classList.remove("topbar-drawer-close");
    this.drawer.classList.add("topbar-drawer-active");
  }

  closeDrawer() {
    this.burgerButton.classList.remove("active");
    this.drawer.classList.remove("topbar-drawer-active");
    this.drawer.classList.add("topbar-drawer-close");
    setTimeout(() => {
      this.drawer.classList.add("display-none");
    }, 150);
  }

  emitValueChangeEvent = (openValue: boolean) => {
    const eventOnChange = new CustomEvent("onchange", {
      bubbles: false,
      composed: true,
      detail: { value: openValue },
    });
    this.dispatchEvent(eventOnChange);
  };

  handleBurgerClick = (openValue: boolean) => {
    this.isopen = openValue;
    this.emitValueChangeEvent(openValue);
    if (openValue) {
      this.openDrawer();
    } else {
      this.closeDrawer();
    }
  };

  render() {
    const displaySlot = html`<slot></slot>`;

    const displayBurger = html` <button
      part="tobpar-burger"
      id="topbar-burger"
      @click=${() => this.handleBurgerClick(!this.isopen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>`;

    const displayDrawer = html` <div
      id="drawer"
      part="tobpar-drawer"
      class="topbar-drawer display-none"
    >
      <div
        @click=${() => this.handleBurgerClick(!this.isopen)}
        class="topbar-drawer-backdrop"
      ></div>
      <aside part="tobpar-drawer-content" class="topbar-drawer-content">
        <div part="tobpar-drawer-box" class="topbar-drawer-box">
          <div class="logo-reduced">
            <a href="/">
              <candy-logo-mark></candy-logo-mark>
            </a>
          </div>
          ${displaySlot}
        </div>
        <candy-divider></candy-divider>
        <slot name="drawer-content"></slot>
      </aside>
    </div>`;

    return html` <header class="topbar-container" part="topbar">
      <div class="${this.mobile ? "logo-reduced" : "logo"}">
        <a href="/">
          ${this.mobile
            ? html`<candy-logo-mark></candy-logo-mark>`
            : html`<candy-logo-horizontal></candy-logo-horizontal>`}
        </a>
      </div>
      <nav class="navbar">
        <ul>
          ${this.mobile ? displayBurger : displaySlot}
        </ul>
      </nav>
      ${this.mobile ? displayDrawer : null}
    </header>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-topbar": CandyTopbar;
  }
}
