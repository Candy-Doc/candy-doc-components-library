import type { default as DrawingLibrary, CircleProps, RectProps, ShapeProps } from "../drawing";
import * as d3 from "d3";

type SVGProps = {
  SVG: Element;
  width?: number;
  height?: number;
};

const color = d3.scaleOrdinal(d3.schemeTableau10);

class D3 implements DrawingLibrary {
  svg: d3.Selection<Element, unknown, null, undefined>;
  simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>;
  node: d3.Selection<d3.BaseType, unknown, SVGGElement, unknown>;
  link: d3.Selection<d3.BaseType, unknown, SVGGElement, unknown>;

  constructor(
    SVGProps: SVGProps,
    nodes = [{ id: 1 }, { id: 2 }],
    links = [{ source: 1, target: 2 }]
  ) {
    this.svg = this.initSVG(SVGProps);
    this.simulation = this.initD3Force();
    this.node = this.initNode();
    this.link = this.initLink();

    this.simulation.nodes(nodes);
    this.simulation.force("link").links(links);

    this.node = this.node
      .data(nodes, (d) => d.id)
      .join((enter) =>
        enter
          .append("circle")
          .attr("r", 18)
          .attr("fill", (d) => color(d.id))
      );
    this.link = this.link.data(links, (d) => `${d.source.id}\t${d.target.id}`).join("line");
  }

  private initSVG({ SVG, width = 400, height = 400 }: SVGProps) {
    return d3
      .select(SVG)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height]);
  }

  private initD3Force() {
    return d3
      .forceSimulation()
      .force(
        "link",
        d3
          .forceLink()
          .id(function (d) {
            return d.id;
          })
          .distance(200)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter())
      .on("tick", () => this.ticked());
  }

  private initNode() {
    return this.svg
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .attr("fill", "lime")
      .selectAll("circle");
  }

  private initLink() {
    return this.svg.append("g").attr("stroke", "#000").attr("stroke-width", 1.5).selectAll("line");
  }

  private appendShape(
    shape: keyof SVGElementTagNameMap,
    { color = "blue", opacity = 0.2, strokeColor = color, strokeOpacity = 1, ...props }: ShapeProps
  ) {
    return this.svg
      .append(shape)
      .attr("x", props.x)
      .attr("y", props.y)
      .attr("stroke", strokeColor)
      .attr("stroke-opacity", strokeOpacity)
      .attr("fill", color)
      .attr("fill-opacity", opacity);
  }

  private ticked() {
    this.node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

    this.link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
  }

  public appendCircle({ radius = 50, ...props }: CircleProps) {
    const circle = this.appendShape("circle", props);
    circle.attr("r", radius).attr("cx", props.x).attr("cy", props.y);
  }

  public appendRect({ width = 50, height = 50, ...props }: RectProps) {
    const rect = this.appendShape("rect", props);
    rect.attr("width", width).attr("height", height);
  }
}

export default D3;
