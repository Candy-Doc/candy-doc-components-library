import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import SwitchStyle from "./SwitchStyle";

export type CandySwitchProps = {
  activated: boolean;
};

@customElement("candy-switch")
export class CandySwitch extends LitElement {
  static styles = SwitchStyle;

  @property({ type: Boolean })
  activated = false;

  render() {
    const bgColor = this.activated ? "blue" : "gray";
    const switchPosition = this.activated ? "translate-x-5" : "translate-x-0";
    return html`<button
      type="button"
      class=${"switch " + bgColor}
      role="switch"
      aria-checked=${this.activated ? "true" : "false"}
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
