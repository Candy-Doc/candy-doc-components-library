import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import InputStyle from "./InputStyle";

export type CandyInputProps = {
  label: string;
  placeholder: string;
  shortCut: string;
};

@customElement("candy-input")
export class CandyInput extends LitElement {
  static styles = InputStyle;

  @property({ type: String })
  label = "Quick Search";

  @property({ type: String })
  placeholder = "Search";

  @property({ type: String })
  shortCut = "⌘K";

  render() {
    return html`<div class="input-container">
      <label for="search">${this.label}</label>
      <div class="input-box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder=${this.placeholder}
          class="focus:ring-blue-500 sm:text-sm"
        />
        ${this.shortCut &&
        html`<div class="shortcut-box">
          <kbd>${this.shortCut}</kbd>
        </div>`}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-input": CandyInput;
  }
}
