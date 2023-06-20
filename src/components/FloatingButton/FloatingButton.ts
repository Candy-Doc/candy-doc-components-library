import {customElement, property} from "lit/decorators.js";
import {html, LitElement} from "lit";
import {ButtonSizes, ButtonTypes} from "../Button";
import {buttonSize, buttonType} from "../Button/Buttons";
import FloatingButtonStyle from "./FloatingButtonStyle";
import {floatingButtonPosition, FloatingButtonsPosition} from "./FloatingButtons";

export type CandyFloatingButtonProps = {
  label: string;
  size: ButtonSizes;
  type: ButtonTypes;
  position: FloatingButtonsPosition;
}

@customElement("candy-floating-button")
export class CandyFloatingButton extends LitElement {
  static styles = FloatingButtonStyle;

  @property({type: String})
  label = "Click me if you dare";

  @property({type: String})
  size: ButtonSizes = ButtonSizes.md;

  @property({ type: String })
  type: ButtonTypes = ButtonTypes.Primary;

  @property({type: String})
  position: FloatingButtonsPosition = FloatingButtonsPosition.br;

  render() {
    const buttonSizeClasses = buttonSize[this.size];
    const buttonTypeClasses = buttonType[this.type];
    const floatingButtonPositionClasses = floatingButtonPosition[this.position];
    const classes = `${buttonSizeClasses} ${buttonTypeClasses} ${floatingButtonPositionClasses}`;
    return html`<button part="floating-button" type="button" class=${"button-container " + classes}>
      <slot name="icon"></slot>
      ${this.label}
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-floating-button": CandyFloatingButton;
  }
}