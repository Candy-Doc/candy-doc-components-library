import { D3 } from "../drawing";
import DrawingLibrary from "../drawing/drawing";
import type CandyData from "./candyData";

class Graph {
  drawer: DrawingLibrary;
  candyData: CandyData;

  constructor(candyData: string, svg: Element, width?: number, height?: number) {
    this.candyData = JSON.parse(candyData);
    this.drawer = new D3({ SVG: svg, width, height }, this.candyData);
  }
}

export default Graph;
