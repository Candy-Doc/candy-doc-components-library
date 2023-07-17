import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { PopoverSide } from "../Popover";
import PopoverInComponentHandlerStyle from "./PopoverInComponentHandlerStyle";

export type PopoverInComponentHandlerProps = {
  position: PopoverSide;
  minimizeOptions: boolean;
};

export class PopoverInComponentHandler extends LitElement {
  static styles = PopoverInComponentHandlerStyle;

  @property({ type: String })
  protected position = PopoverSide.Top;

  @property({ type: Boolean })
  protected minimizeOptions = false;

  protected countOptionsSlotAmount = () => {
    let count = 0;

    Array.from(this.children).forEach((child) => {
      if (child.slot === "options") count++;
    });
    return count;
  };
}
