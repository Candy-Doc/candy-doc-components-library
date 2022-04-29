import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./button.css.js";
import { buttonSize, ButtonSizes, buttonType, ButtonTypes } from "./Buttons";

export type CandyButtonProps = {
  label: string;
  size: ButtonSizes;
  type: ButtonTypes;
};

@customElement("candy-button")
export class CandyButton extends LitElement {
  static styles = [styles];

  @property({ type: String })
  label = "Click me";

  @property({ type: String })
  size: ButtonSizes = ButtonSizes.md;

  @property({ type: String })
  type: ButtonTypes = ButtonTypes.Primary;

  render() {
    const buttonSizeClasses = buttonSize[this.size];
    const buttonTypeClasses = buttonType[this.type];
    const classes = `${buttonSizeClasses} ${buttonTypeClasses}`;
    return html`<button
      type="button"
      class=${"inline-flex items-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " +
      classes}
    >
      ${this.label}
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-button": CandyButton;
  }
}
