import Node from "./node";

export type ShapeProps = {
  color?: string;
  opacity?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  x: number;
  y: number;
};

export interface CircleProps extends ShapeProps {
  radius?: number;
}

export interface RectProps extends ShapeProps {
  width?: number;
  height?: number;
}

export default interface DrawingLibrary {
  transformJSONintoNodes(json: any): Node[];
  drawGraph(nodes: Node[]): void;
}
