import * as d3 from "d3";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import Graph from "../../libs/graph";
import styles from "./Test.css.js";

function createGraph(select) {
  const svg = d3
    .select(select)
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

  const simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody().strength(-1000))
    .force(
      "link",
      d3
        .forceLink()
        .id((d) => d.id)
        .distance(200)
    )
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .on("tick", ticked);

  let link = svg.append("g").attr("stroke", "#000").attr("stroke-width", 1.5).selectAll("line");

  let node = svg.append("g").attr("stroke", "#fff").attr("stroke-width", 1.5).selectAll("circle");

  function ticked() {
    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
  }

  // Terminate the force layout when this cell re-runs.
  // invalidation.then(() => simulation.stop());

  return Object.assign(svg.node(), {
    update({ nodes, links }) {
      // Make a shallow copy to protect against mutation, while
      // recycling old nodes to preserve position and velocity.
      const old = new Map(node.data().map((d) => [d.id, d]));
      nodes = nodes.map((d) => Object.assign(old.get(d.id) || {}, d));
      links = links.map((d) => Object.assign({}, d));

      simulation.nodes(nodes);
      simulation.force("link").links(links);
      simulation.alpha(1).restart();

      node = node
        .data(nodes, (d) => d.id)
        .join((enter) =>
          enter
            .append("circle")
            .attr("r", 18)
            .attr("fill", (d) => color(d.id))
        );

      link = link.data(links, (d) => `${d.source.id}\t${d.target.id}`).join("line");
    },
  });
}

@customElement("candy-test")
export class CandyTest extends LitElement {
  static styles = [styles];

  firstUpdated() {
    const select = this.shadowRoot.querySelector("#candy");
    console.log("hey", select);
    if (select) {
      console.log("salut");
      const simulation = createGraph(select);
      simulation.update(graph3);
    }
  }

  render() {
    return html`<svg id="candy"></svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "candy-test": CandyTest;
  }
}

const graph3 = {
  nodes: [{ id: "a" }, { id: "b" }],
  links: [{ source: "a", target: "b" }],
};

const height = 400;
const width = 400;
const color = d3.scaleOrdinal(d3.schemeTableau10);
