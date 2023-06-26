import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement, unsafeCSS } from "lit";
import { ButtonSizes } from "../Button";
import { buttonSize } from "../Button/Buttons";
import FloatingButtonStyle from "./FloatingButtonStyle.css?inline";
import {
  floatingButtonAnchor,
  FloatingButtonAnchor,
  floatingButtonPositionMap,
  FloatingButtonsPosition,
} from "./FloatingButtons";

export type CandyFloatingButtonProps = {
  label: string;
  size: ButtonSizes;
  color: string;
  position: FloatingButtonsPosition;
  xPadding: number;
  yPadding: number;
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

  @property({ type: Number })
  xPadding = 20;

  @property({ type: Number })
  yPadding = 20;

  render() {
    const buttonSizeClasses = buttonSize[this.size];
    const labelSizeClasses = "text-" + buttonSizeClasses;
    const floatingButtonPositionClasses = floatingButtonPositionMap[this.position];
    const floatingButtonAnchorClass = floatingButtonAnchor[this.anchor];
    return html` <div
      style=${floatingButtonPositionClasses(this.xPadding, this.yPadding)}
      part="floating-container"
      class=${"button-container " + floatingButtonAnchorClass}
    >
      <button
        part="floating-button"
        name="floating-button"
        style="background-color: ${this.color}"
        type="button"
        class=${"button " + buttonSizeClasses}
      >
        <slot name="icon"></slot>
      </button>
      <label for="floating-button" part="floating-label" class=${labelSizeClasses}
        >${this.label}</label
      >
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-floating-button": CandyFloatingButton;
  }
}
