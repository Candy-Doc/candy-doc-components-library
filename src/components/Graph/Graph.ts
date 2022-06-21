import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import Graph from "../../libs/graph";
import styles from "./Graph.css.js";

@customElement("candy-graph")
export class CandyGraph extends LitElement {
  static styles = [styles];

  @property({ type: String })
  candyData = "{}";

  firstUpdated() {
    const svg = this.shadowRoot.querySelector("#candy-graph");
    if (svg) {
      new Graph(`[{"simpleName": "Library"}]`, svg);
    }
  }

  render() {
    return html`<svg id="candy-graph"></svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-graph": CandyGraph;
  }
}
