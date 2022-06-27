export enum ConceptType {
  Aggregate,
  BoundedContext,
  CoreConcept,
  DomainCommand,
  DomainEvent,
  SharedKernel,
  ValueObject,
}

export default interface Node {
  simpleName: string;
  canonicalName: string;
  group: number;
  type: ConceptType;
}
