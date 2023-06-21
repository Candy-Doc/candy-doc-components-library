import { customElement, property } from "lit/decorators.js";
import { html, LitElement, css, unsafeCSS } from "lit";
import { ButtonSizes } from "../Button";
import { buttonSize } from "../Button/Buttons";
import FloatingButtonStyle from "./FloatingButtonStyle.css?inline";
import { floatingButtonPosition, FloatingButtonsPosition } from "./FloatingButtons";

export type CandyFloatingButtonProps = {
  label: string;
  size: ButtonSizes;
  color: string;
  position: FloatingButtonsPosition;
};

@customElement("candy-floating-button")
export class CandyFloatingButton extends LitElement {
  static styles = css`
    ${unsafeCSS(FloatingButtonStyle)}
  `;

  @property({ type: String })
  label = "Click on it";

  @property({ type: String })
  size: ButtonSizes = ButtonSizes.md;

  @property({ type: String })
  color = "#2563EBFF";

  @property({ type: String })
  position: FloatingButtonsPosition = FloatingButtonsPosition.br;

  render() {
    const buttonSizeClasses = buttonSize[this.size];
    const floatingButtonPositionClasses = floatingButtonPosition[this.position];
    return html` <div class=${"button-container " + floatingButtonPositionClasses}>
      <button
        part="floating-button"
        style="background-color: ${this.color}"
        type="button"
        class=${"button " + buttonSizeClasses}
      >
        <slot name="icon"></slot>
      </button>
      ${this.label}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-floating-button": CandyFloatingButton;
  }
}
