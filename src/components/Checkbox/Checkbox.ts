import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./Checkbox.css.js";

export type CandyCheckboxProps = {
  checked: boolean;
  label: string;
  description: string;
};

@customElement("candy-checkbox")
export class CandyCheckbox extends LitElement {
  static styles = [styles];

  @property({ type: Boolean })
  checked = false;

  @property({ type: String })
  label = "";

  @property({ type: String })
  description = "";

  render() {
    return html`<div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          ?checked=${this.checked}
        />
      </div>
      <div class="ml-3 text-sm">
        <label for="comments" class="font-medium text-gray-700">${this.label}</label>
        <p id="comments-description" class="text-gray-500">${this.description}</p>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-checkbox": CandyCheckbox;
  }
}
