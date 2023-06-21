import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import SwitchStyle from "./Switch.css" assert { type: "css" };

export type CandySwitchProps = {
  activated: boolean;
};

@customElement("candy-switch")
export class CandySwitch extends LitElement {
  static styles = unsafeCSS(SwitchStyle);

  @property({ type: Boolean })
  activated = false;

  handleClick = () => {
    this.activated = !this.activated;
    const event = new CustomEvent("onChange", {
      bubbles: false,
      composed: true,
      detail: { value: this.activated },
    });
    this.dispatchEvent(event);
  };

  render() {
    const bgColor = this.activated ? "blue" : "gray";
    const switchPosition = this.activated ? "translate-x-5" : "translate-x-0";
    return html`<button
      part="switch"
      type="button"
      class=${"switch " + bgColor}
      role="switch"
      aria-checked=${this.activated ? "true" : "false"}
      @click=${this.handleClick}
    >
      <span class="sr-only">Use setting</span>
      <span aria-hidden="true" class=${"transform " + switchPosition}></span>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-switch": CandySwitch;
  }
}
