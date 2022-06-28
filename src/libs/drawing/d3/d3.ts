import type { default as DrawingLibrary } from "../drawing";
import * as d3 from "d3";
import { ConceptType } from "../node";
import type Node from "../node";
import type Link from "../link";
import { LinkType } from "../link";

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

  private ticked() {
    this.node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

    this.link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
  }

  public drawGraph(nodes: Node[], links: Link[]): void {
    const simulation = d3
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
      )
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const handleZoom = (e: any) => this.svg.attr("transform", e.transform);

    const zoom = d3.zoom().on("zoom", handleZoom);
    this.svg.call(zoom);

    const color = d3.scaleOrdinal(d3.schemeTableau10);

    this.svg
      .selectAll("links")
      .data(links)
      .join("line")
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y)
      .attr("stroke", (d) => color(d.group.toString()));

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
