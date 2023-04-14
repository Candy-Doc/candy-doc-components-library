import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { alerts, AlertTypes } from "./Alerts.js";
import { TailwindElement } from "../shared/tailwind.element";

export type CandyAlertProps = {
  type: string;
};

@customElement("candy-alert")
export class CandyAlert extends TailwindElement {
  @property({ type: String })
  alertType = AlertTypes.Info;

  render() {
    const currentAlert = alerts[this.alertType];
    const containerColors = `${currentAlert.borderColor} ${currentAlert.backgroundColor}`;
    return html`<div class=${"border-l-4 p-4 " + containerColors} part="alert">
      <div class="flex">
        <div class=${"flex-shrink-0 " + currentAlert.iconColor}>${currentAlert.icon}</div>
        <div class="ml-3">
          <p class=${"text-sm " + currentAlert.textColor}>
            <slot name="content"></slot>
          </p>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-alert": CandyAlert;
  }
}
