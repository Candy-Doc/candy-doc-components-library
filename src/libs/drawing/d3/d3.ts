import type { default as DrawingLibrary } from "../drawing";
import * as d3 from "d3";
import type Node from "../node";
import { ConceptType } from "../node";

class D3 implements DrawingLibrary {
  svg: d3.Selection<Element, unknown, null, undefined>;

  constructor(SVG: Element, width = 200, height = 200) {
    this.svg = d3
      .select(SVG)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height]);
  }

  public transformJSONintoNodes(json: any): Node[] {
    const nodes: Node[] = [];
    const boundedContexts = json.boundedContexts;
    const sharedKernels = json.sharedKernels;
    let groupNumber = 1;
    if (boundedContexts !== undefined && boundedContexts.length > 0) {
      boundedContexts.forEach((boundedContext: any) => {
        nodes.push(<Node>{
          simpleName: boundedContext.simpleName,
          canonicalName: boundedContext.canonicalName,
          group: groupNumber,
          type: ConceptType.BoundedContext,
        });
        boundedContext.aggregates.forEach((concept: Node) => {
          nodes.push(<Node>{
            simpleName: concept.simpleName,
            canonicalName: concept.canonicalName,
            group: groupNumber,
            type: ConceptType.CoreConcept,
          });
        });
        boundedContext.coreConcepts.forEach((concept: Node) => {
          nodes.push(<Node>{
            simpleName: concept.simpleName,
            canonicalName: concept.canonicalName,
            group: groupNumber,
            type: ConceptType.CoreConcept,
          });
        });
        boundedContext.valueObjects.forEach((concept: Node) => {
          nodes.push(<Node>{
            simpleName: concept.simpleName,
            canonicalName: concept.canonicalName,
            group: groupNumber,
            type: ConceptType.CoreConcept,
          });
        });
      });
      groupNumber++;
    }
    if (sharedKernels !== undefined && sharedKernels.length > 0) {
      sharedKernels.forEach((sharedKernel: any) => {
        nodes.push(<Node>{
          simpleName: sharedKernel.simpleName,
          canonicalName: sharedKernel.canonicalName,
          group: groupNumber,
          type: ConceptType.BoundedContext,
        });
        sharedKernel.coreConcepts.forEach((concept: Node) => {
          nodes.push(<Node>{
            simpleName: concept.simpleName,
            canonicalName: concept.canonicalName,
            group: groupNumber,
            type: ConceptType.CoreConcept,
          });
        });
        sharedKernel.valueObjects.forEach((concept: Node) => {
          nodes.push(<Node>{
            simpleName: concept.simpleName,
            canonicalName: concept.canonicalName,
            group: groupNumber,
            type: ConceptType.CoreConcept,
          });
        });
      });
      groupNumber++;
    }
    return nodes;
  }

  public drawGraph(nodes: Node[]): void {
    const simulation = d3
      .forceSimulation()
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(100, 100))
      .force(
        "link",
        d3
          .forceLink()
          .id((d) => d.id)
          .distance(200)
      )
      .force("x", d3.forceX())
      .force("y", d3.forceY());
    simulation.nodes(nodes);
    simulation.alpha(1).restart();

    const color = d3.scaleOrdinal(d3.schemeTableau10);

    this.svg
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("fill", (d) => color(d.group.toString()));
  }
}

export default D3;
