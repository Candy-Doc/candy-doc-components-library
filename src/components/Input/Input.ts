import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import InputStyle from "./InputStyle";

export type CandyInputProps = {
  label: string;
  placeholder: string;
  shortCut: string;
  value: string;
};

@customElement("candy-input")
export class CandyInput extends LitElement {
  static styles = InputStyle;

  @query('input')
  protected _input!: HTMLInputElement;
  protected _value = "";

  @property({ type: String })
  label = "Quick Search";

  @property({ type: String })
  placeholder = "Search";

  @property({ type: String })
  shortCut = "⌘K";

  @property({ type: String })
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    if (this._input) {
      this._input.value = value;
    }
  }

  handleChange = ({ target }: Event) => {
    this.value = (target as HTMLButtonElement).value;
  };

  render() {
    return html`<div class="input-container" part="input">
      <label for="search">${this.label}</label>
      <div class="input-box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder=${this.placeholder}
          class="focus:ring-blue-500 sm:text-sm"
          .value=${this._value}
          @input=${this.handleChange}
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
