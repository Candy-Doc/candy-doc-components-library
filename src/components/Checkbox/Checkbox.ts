import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import CheckboxStyle from "./CheckboxStyle";

export type CandyCheckboxProps = {
  checked: boolean;
  label: string;
  description: string;
};

@customElement("candy-checkbox")
export class CandyCheckbox extends LitElement {
  static styles = CheckboxStyle;

  @query("input")
  protected _input!: HTMLInputElement;
  protected _checked = false;

  @property({ type: Boolean })
  get checked() {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
    if (this._input) {
      this._input.checked = value;
    }
  }

  @property({ type: String })
  label = "Checkbox";

  @property({ type: String })
  description = "";

  handleChange = ({ target }: Event) => {
    const event = new CustomEvent("onChange", {
      bubbles: false,
      composed: true,
      detail: { value: (target as HTMLInputElement).checked },
    });
    this.dispatchEvent(event);
  };

  render() {
    return html`<div class="checkbox-container" part="checkbox">
      <div class="checkbox">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          ?checked=${this._checked}
          @click=${this.handleChange}
        />
      </div>
      <div class="label-container">
        <label for="comments">${this.label}</label>
        <p id="comments-description">${this.description}</p>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-checkbox": CandyCheckbox;
  }
}
