import { D3 } from "../drawing";
import DrawingLibrary from "../drawing/drawing";
import type CandyData from "./candyData";

class Graph {
  drawer: DrawingLibrary;
  candyData: CandyData;

  constructor(candyData: string, svg: Element, width?: number, height?: number) {
    this.drawer = new D3({ SVG: svg, width, height });
    this.candyData = JSON.parse(candyData);
    const { nodes, links } = this.drawer.extractNodesAndLinks(this.candyData);
    this.drawer.drawGraph(nodes, links);
  }
}

export default Graph;
