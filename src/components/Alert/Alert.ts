import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { alerts, AlertTypes } from "./Alerts.js";
import AlertStyle from "./AlertStyle";

export type CandyAlertProps = {
  type: string;
};

@customElement("candy-alert")
export class CandyAlert extends LitElement {
  static styles = AlertStyle;

  @property({ type: String })
  alertType = AlertTypes.Info;

  render() {
    const currentAlert = alerts[this.alertType];

    return html`<div class=${"alert-container " + currentAlert.type} part="alert">
      <div class="flex">
        <div class="alert-icon">${currentAlert.icon}</div>
        <div class="ml-3">
          <p>
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
