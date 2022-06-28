import type { default as DrawingLibrary } from "../drawing";
import * as d3 from "d3";
import { ConceptType } from "../node";
import type Node from "../node";
import type Link from "../link";
import { LinkType } from "../link";
import CandyData from "../../graph/candyData";

type SVGProps = {
  SVG: Element;
  width?: number;
  height?: number;
};

const color = d3.scaleOrdinal(d3.schemeTableau10);

class D3 implements DrawingLibrary {
  svg: d3.Selection<Element, unknown, null, undefined>;
  simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>;

  constructor(SVGProps: SVGProps, domain: CandyData) {
    const { nodes, links } = this.extractNodesAndLinks(domain);
    this.svg = this.initSVG(SVGProps);
    this.simulation = this.initD3Force(nodes, links);
    this.drawGraph(nodes, links);
    const handleZoom = (e: any) => this.svg.attr("transform", e.transform);
    const zoom = d3.zoom().on("zoom", handleZoom);
    this.svg.call(zoom);
  }

  private initSVG({ SVG, width = 400, height = 400 }: SVGProps) {
    return d3
      .select(SVG)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height]);
  }

  private initD3Force(nodes: Node[], links: Link[]) {
    return d3
      .forceSimulation()
      .force("charge", d3.forceManyBody())
      .force(
        "center",
        d3.forceCenter(Number(this.svg.style("width")) / 2, Number(this.svg.style("height")) / 2)
      )
      .nodes(nodes)
      .force(
        "link",
        d3
          .forceLink()
          .links(links)
          .id((d) => d.canonicalName)
          .distance(200)
      );
  }

  private drawNodes(nodes: Node[]) {
    this.svg
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("fill", (d) => color(d.group.toString()));
  }

  private drawLinks(links: Link[]) {
    this.svg
      .selectAll("links")
      .data(links)
      .join("line")
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y)
      .attr("stroke", (d) => color(d.group.toString()));
  }

  public drawGraph(nodes: Node[], links: Link[]): void {
    this.drawLinks(links);
    this.drawNodes(nodes);
  }

  public extractNodesAndLinks(json: any): { nodes: Node[]; links: Link[] } {
    const nodes: Node[] = [];
    const links: Link[] = [];

    const addNode = (
      simpleName: string,
      canonicalName: string,
      groupNumber: number,
      conceptType: ConceptType
    ): void => {
      nodes.push(<Node>{
        simpleName: simpleName,
        canonicalName: canonicalName,
        group: groupNumber,
        type: conceptType,
      });
    };

    const addLink = (
      sourceCanonicalName: string,
      targetCanonicalName: string,
      groupNumber: number
    ): void => {
      links.push(<Link>{
        source: sourceCanonicalName,
        target: targetCanonicalName,
        group: groupNumber,
        type: LinkType.Simple,
      });
    };

    const boundedContexts = json.boundedContexts;
    const sharedKernels = json.sharedKernels;
    let groupNumber = 1;
    if (boundedContexts !== undefined && boundedContexts.length > 0) {
      boundedContexts.forEach((boundedContext: any) => {
        addNode(
          boundedContext.simpleName,
          boundedContext.canonicalName,
          groupNumber,
          ConceptType.BoundedContext
        );
        boundedContext.aggregates.forEach((concept: Node) => {
          addNode(concept.simpleName, concept.canonicalName, groupNumber, ConceptType.Aggregate);
          concept.interactsWith.forEach((otherConcept: Node) => {
            addLink(concept.canonicalName, otherConcept.canonicalName, groupNumber);
          });
        });
        boundedContext.coreConcepts.forEach((concept: Node) => {
          addNode(concept.simpleName, concept.canonicalName, groupNumber, ConceptType.CoreConcept);
          concept.interactsWith.forEach((otherConcept: Node) => {
            addLink(concept.canonicalName, otherConcept.canonicalName, groupNumber);
          });
        });
        boundedContext.valueObjects.forEach((concept: Node) => {
          addNode(concept.simpleName, concept.canonicalName, groupNumber, ConceptType.ValueObject);
          concept.interactsWith.forEach((otherConcept: Node) => {
            addLink(concept.canonicalName, otherConcept.canonicalName, groupNumber);
          });
        });
      });
      groupNumber++;
    }
    if (sharedKernels !== undefined && sharedKernels.length > 0) {
      sharedKernels.forEach((sharedKernel: any) => {
        addNode(
          sharedKernel.simpleName,
          sharedKernel.canonicalName,
          groupNumber,
          ConceptType.BoundedContext
        );
        sharedKernel.relations.forEach((relation: any) => {
          addLink(sharedKernel.canonicalName, relation, groupNumber);
        });
        sharedKernel.coreConcepts.forEach((concept: Node) => {
          addNode(concept.simpleName, concept.canonicalName, groupNumber, ConceptType.CoreConcept);
          concept.interactsWith.forEach((otherConcept: Node) => {
            addLink(concept.canonicalName, otherConcept.canonicalName, groupNumber);
          });
        });
        sharedKernel.valueObjects.forEach((concept: Node) => {
          addNode(concept.simpleName, concept.canonicalName, groupNumber, ConceptType.ValueObject);
          concept.interactsWith.forEach((otherConcept: Node) => {
            addLink(concept.canonicalName, otherConcept.canonicalName, groupNumber);
          });
        });
      });
      groupNumber++;
    }
    return { nodes, links };
  }
}

export default D3;
