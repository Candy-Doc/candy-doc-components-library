import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./Circle.css.js";
import * as d3 from "d3";

@customElement("candy-circle")
export class CandyCircle extends LitElement {
  static styles = [styles];

  @property({ type: String })
  color = "#69a3b2";

  firstUpdated() {
    d3.select(this.shadowRoot.querySelector("#d3"))
      .attr("width", 200)
      .attr("height", 200)
      .append("circle")
      .attr("cx", 100)
      .attr("cy", 100)
      .attr("r", 50)
      .attr("stroke", "black")
      .attr("fill", "#69a3b2");
  }

  render() {
    return html`<svg id="d3"></svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-circle": CandyCircle;
  }
}
