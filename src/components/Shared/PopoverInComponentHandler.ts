import { LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { PopoverSide } from "../Popover";
import PopoverInComponentHandlerStyle from "./PopoverInComponentHandlerStyle";

export type PopoverInComponentHandlerProps = {
  optionPopoverSide: PopoverSide;
  minimizeOptions: boolean;
};

export class PopoverInComponentHandler extends LitElement {
  static styles = PopoverInComponentHandlerStyle;

  @state()
  protected isPopoverActive = false;

  @property({ type: String })
  protected optionPopoverSide = PopoverSide.Top;

  @property({ type: Boolean })
  protected minimizeOptions = false;

  protected handleVerticalIconClick = (e: Event) => {
    e.stopPropagation();
    this.isPopoverActive = !this.isPopoverActive;
  };

  protected countOptionsSlotAmount = () => {
    let count = 0;

    Array.from(this.children).forEach((child) => {
      if (child.slot === "options") count++;
    });
    return count;
  };
}
