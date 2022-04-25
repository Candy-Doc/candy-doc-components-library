import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./switch.css.js";

export type CandySwitchProps = {
  activated: boolean;
};

@customElement("candy-switch")
export class CandySwitch extends LitElement {
  static styles = [styles];

  @property({ type: Boolean })
  activated = false;

  @property({ type: Function })
  clickHandler: (newStatus: boolean, event: MouseEvent) => void = () => {};

  render() {
    const bgColor = this.activated ? "bg-blue-600" : "bg-gray-200";
    const switchPosition = this.activated ? "translate-x-5" : "translate-x-0";
    return html`<button
      type="button"
      class=${"relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " +
      bgColor}
      @click=${(e: MouseEvent) => this.clickHandler(!this.activated, e)}
      role="switch"
      aria-checked=${this.activated ? "true" : "false"}
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        class=${"pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 " +
        switchPosition}
      ></span>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-switch": CandySwitch;
  }
}
