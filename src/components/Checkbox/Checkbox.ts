import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

export type CandyCheckboxProps = {
  checked: boolean;
  label: string;
  description: string;
  onChange: (e?: boolean) => void;
};

@customElement("candy-checkbox")
export class CandyCheckbox extends TailwindElement {
  @property({ type: Boolean })
  checked = false;

  @property({ type: String })
  label = "";

  @property({ type: String })
  description = "";

  @property({ type: Function })
  onChange?: (e?: boolean) => void;

  toto = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.checked = target?.checked;
    if (typeof this.onChange !== "function") {
      console.log("onChange props is not a function");
    } else if (this.onChange) {
      this.onChange(this.checked);
    }
  };

  render() {
    return html`<div class="relative flex items-start" part="checkbox">
      <div class="flex items-center h-5">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          ?checked=${this.checked}
          @click=${this.toto}
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
