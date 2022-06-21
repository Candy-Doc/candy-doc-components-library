import type { default as DrawingLibrary, CircleProps, RectProps, ShapeProps } from "../drawing";
import * as d3 from "d3";

class D3 implements DrawingLibrary {
  svg: d3.Selection<Element, unknown, null, undefined>;

  constructor(SVG: Element, width = 200, height = 200) {
    this.svg = d3.select(SVG).attr("width", width).attr("height", height);
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
