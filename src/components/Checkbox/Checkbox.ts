import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import CheckboxStyle from "./CheckboxStyle";

export type CandyCheckboxProps = {
  checked: boolean;
  label: string;
  description: string;
};

@customElement("candy-checkbox")
export class CandyCheckbox extends LitElement {
  static styles = CheckboxStyle;

  @property({ type: Boolean })
  checked = false;

  @property({ type: String })
  label = "Checkbox";

  @property({ type: String })
  description = "";

  render() {
    return html`<div class="checkbox-container" part="checkbox">
      <div class="checkbox">
        <input
          id="comments"
          aria-deszcribedby="comments-description"
          name="comments"
          type="checkbox"
          ?checked=${this.checked}
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
