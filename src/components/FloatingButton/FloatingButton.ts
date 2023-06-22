import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement, unsafeCSS } from "lit";
import { ButtonSizes } from "../Button";
import { buttonSize } from "../Button/Buttons";
import FloatingButtonStyle from "./FloatingButtonStyle.css?inline";
import {
  floatingButtonAnchor,
  FloatingButtonAnchor,
  floatingButtonPosition,
  FloatingButtonsPosition,
} from "./FloatingButtons";

export type CandyFloatingButtonProps = {
  label: string;
  size: ButtonSizes;
  color: string;
  position: FloatingButtonsPosition;
  anchor: FloatingButtonAnchor;
};

@customElement("candy-floating-button")
export class CandyFloatingButton extends LitElement {
  static styles = css`
    ${unsafeCSS(FloatingButtonStyle)}
  `;

  @property({ type: String })
  label = "";

  @property({ type: String })
  size: ButtonSizes = ButtonSizes.md;

  @property({ type: String })
  color = "#2563EBFF";

  @property({ type: String })
  position: FloatingButtonsPosition = FloatingButtonsPosition.br;

  @property({ type: String })
  anchor: FloatingButtonAnchor = FloatingButtonAnchor.window;

  render() {
    const buttonSizeClasses = buttonSize[this.size];
    const floatingButtonPositionClasses = floatingButtonPosition[this.position];
    const floatingButtonAnchorClass = floatingButtonAnchor[this.anchor];
    return html` <div
      class=${"button-container " + floatingButtonPositionClasses + " " + floatingButtonAnchorClass}
    >
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
