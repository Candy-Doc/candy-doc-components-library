import {customElement, property} from "lit/decorators.js";
import {html, LitElement} from "lit";
import {ButtonSizes} from "../Button";
import {buttonSize} from "../Button/Buttons";
import FloatingButtonStyle from "./FloatingButtonStyle";
import {floatingButtonPosition, FloatingButtonsPosition} from "./FloatingButtons";

export type CandyFloatingButtonProps = {
  label: string;
  size: ButtonSizes;
  color: string;
  position: FloatingButtonsPosition;
}

@customElement("candy-floating-button")
export class CandyFloatingButton extends LitElement {
  static styles = FloatingButtonStyle;

  @property({type: String})
  label = "Click on it";

  @property({type: String})
  size: ButtonSizes = ButtonSizes.md;

  @property({ type: String })
  color: string = "#2563EBFF"

  @property({type: String})
  position: FloatingButtonsPosition = FloatingButtonsPosition.br;

  render() {
    const buttonSizeClasses = buttonSize[this.size];
    const floatingButtonPositionClasses = floatingButtonPosition[this.position];
    // const classes = `${buttonSizeClasses} ${floatingButtonPositionClasses}`;
    // return html`<button part="floating-button" style="background-color: ${this.color}" type="button" class=${"button-container " + classes}>
    //   <slot name="icon"></slot>
    //   ${this.label}
    // </button>`;
    return html `
      <div class=${"button-container " + floatingButtonPositionClasses}>
        <button part="floating-button" style="background-color: ${this.color}" type="button" class=${"button " + buttonSizeClasses}>
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