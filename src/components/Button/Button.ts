import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import { buttonSize, ButtonSizes, buttonType, ButtonTypes } from "./Buttons";
import ButtonStyle from "./Button.css?inline";

export type CandyButtonProps = {
  label: string;
  size: ButtonSizes;
  type: ButtonTypes;
};

@customElement("candy-button")
export class CandyButton extends LitElement {
  static styles = css`
    ${unsafeCSS(ButtonStyle)}
  `;

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
    return html`<button part="button" type="button" class=${"button-container " + classes}>
      <slot name="icon"></slot>
      ${this.label}
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-button": CandyButton;
  }
}
