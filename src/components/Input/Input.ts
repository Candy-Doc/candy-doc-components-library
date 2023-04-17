import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

export type CandyInputProps = {
  value: string;
  label: string;
  placeholder: string;
  shortCut: string;
  onChange: (value: string) => void;
};

@customElement("candy-input")
export class CandyInput extends TailwindElement {
  @property({ type: String })
  value = "";

  @property({ type: String })
  label = "Quick Search";

  @property({ type: String })
  placeholder = "Search";

  @property({ type: String })
  shortCut = "⌘K";

  @property({ type: Function })
  onChange?: (value: string) => void;

  handleInput = (e: Event) => {
    this.value = (e.target as HTMLInputElement).value;
    if (typeof this.onChange !== "function") {
      console.log("onChange props is not a function");
    } else if (this.onChange) {
      this.onChange(this.value);
    }
  };

  render() {
    return html`<div>
      <label for="search" class="block text-sm font-medium text-gray-700">${this.label}</label>
      <div class="mt-1 relative flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder=${this.placeholder}
          .value=${this.value}
          @input=${this.handleInput}
          class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        ${this.shortCut &&
        html`<div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd
            class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-500"
          >
            ${this.shortCut}
          </kbd>
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
