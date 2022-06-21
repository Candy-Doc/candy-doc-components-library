import { D3 } from "../drawing";
import DrawingLibrary from "../drawing/drawing";
import type CandyData from "./candyData";

class Graph {
  drawer: DrawingLibrary;
  candyData: CandyData;

  constructor(candyData: string, svg: Element, width?: number, height?: number) {
    this.drawer = new D3(svg, width, height);
    this.candyData = JSON.parse(candyData);
    this.draw();
  }

  drawBoundedContext() {
    this.candyData.forEach(() => {
      this.drawer.appendCircle({
        x: 100,
        y: 100,
      });
      this.drawer.appendRect({
        x: 100,
        y: 100,
      });
    });
  }

  draw() {
    this.drawBoundedContext();
  }
}

export default Graph;
